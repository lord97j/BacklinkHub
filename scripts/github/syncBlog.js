// 同步 issues 到 rules 和 contributors 和 blog
// 1. 同步 rules
// 2. 同步 contributors
// 3. 同步 blog

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
/* eslint-disable */
const GitHub = require('github-api');
const fs = require('fs-extra');
const path = require('path');
// console.log(process.env, ' process.env');
const { GH_TOKEN, GH_USER, GH_PROJECT_NAME } = process.env;

const gh = new GitHub({
	token: GH_TOKEN
});

const blogOutputPath = '../../data/md';
const rulesOutputPath = '../../data/json/en/rules';
const contributorsOutputPath = '../../data/json/contributors.json';

if (!GH_USER || !GH_PROJECT_NAME) {
	console.error('请设置GITHUB_USER和GITHUB_PROJECT_NAME');
	process.exit(-1);
}

// 如果是 img 标签，并且没有闭合，那么就拼接闭合字符
function closeImgTag(htmlString) {
	// 使用正则表达式匹配未闭合的 <img> 标签
	const imgTagRegex = /<img([^>]*)(?<!\/)>/g;
	// 将未闭合的 <img> 标签替换为自闭合的 <img /> 标签
	return htmlString.replace(imgTagRegex, '<img$1 />');
}

// 生成安全的文件名 slug
const generateSafeFileName = (title) => {
	return title
	  .trim()
	  .toLowerCase()                         // 转换为小写
	  .replace(/[^a-z0-9]+/g, '-')          // 将非字母数字字符替换为连字符
	  .replace(/^-+|-+$/g, '')              // 删除首尾的连字符
	  .replace(/-+/g, '-');                 // 将多个连字符替换为单个
  };

// get issues list
const issueInstance = gh.getIssues(GH_USER, GH_PROJECT_NAME);

function generateMdx(issue) {
	return `---
title: ${issue.title.trim()}
description: ${issue.content.replace(/#/g, '').substring(0, 120).trim()}
date: ${issue.created_at}
category: blog
author: ${issue.user?.login}：${issue.user?.html_url}
tags: ${JSON.stringify(issue.labels.map((item) => item.name))}
---

${closeImgTag(content.replace(/<br \/>/g, '\n'))}

`;
}

function main() {
	const filePath = path.resolve(__dirname, blogOutputPath);
	// 确保目录存在，但不清空
	fs.ensureDirSync(filePath);
	
	// 获取现有文件列表
	const existingFiles = new Set(fs.readdirSync(filePath));
	
	// 只查询自己的issues，避免别人创建的也更新到博客
	const creators = ['lord97j']; // 添加多个creator
	creators.forEach((name) => {
		issueInstance.listIssues({ creator: name, labels: 'blog' }).then(({ data }) => {
			let successCount = 0;
			const updatedFiles = new Set();
			
			for (const item of data) {
				try {
					const fileName = generateSafeFileName(title);
					const md = generateMdx(item);
					fs.writeFileSync(`${filePath}/${fileName}`, md);
					updatedFiles.add(fileName);
					console.log(`${filePath}/${fileName}`, 'success');
					successCount++;
				} catch (error) {
					console.log(error);
				}
			}

			if (successCount === data.length) {
				console.log('文章全部同步成功！', data.length);
			} else {
				console.log('文章同步失败！失败数量=', data.length - successCount);
			}
		});
	});
}

module.exports = main;
