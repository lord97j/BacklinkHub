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
console.log(process.env, ' process.env');
const { GH_TOKEN, GH_USER, GH_PROJECT_NAME, OPENAI_API_KEY, OPENAI_BASE_URL } = process.env;

const gh = new GitHub({
	token: GH_TOKEN
});

const blogOutputPath = '../../data/md';
const contributorsOutputPath = '../../data/json/contributors.json';

if (!GH_USER || !GH_PROJECT_NAME || !OPENAI_API_KEY || !OPENAI_BASE_URL) {
	console.error('请设置GITHUB_USER和GITHUB_PROJECT_NAME和OPENAI_API_KEY和OPENAI_BASE_URL');
	process.exit(-1);
}

// 如果是 img 标签，并且没有闭合，那么就拼接闭合字符
function closeImgTag(htmlString) {
	// 使用正则表达式匹配未闭合的 <img> 标签
	const imgTagRegex = /<img([^>]*)(?<!\/)>/g;
	// 将未闭合的 <img> 标签替换为自闭合的 <img /> 标签
	return htmlString.replace(imgTagRegex, '<img$1 />');
}

// ai调用
async function callBlogAI(content) {
    const OpenAI = require('openai');
    
    const client = new OpenAI({
        apiKey: OPENAI_API_KEY,
        baseURL: OPENAI_BASE_URL
    });

    try {
        const response = await client.chat.completions.create({
            model: 'deepseek-ai/DeepSeek-V3',
			messages: [
				{
					role: 'system',
					content: `
					You are an SEO expert, skilled in analyzing content to generate SEO optimized titles、url、describe
Title tags
Place the main keywords at the beginning of the title.
The length of the title label should be kept between 50-60 characters.
Ensure that the title is eye-catching to attract clicks.

Meta description
Provide a brief overview of the page content.
Use primary and secondary keywords naturally.
The length of the meta description should be kept between 150-160 characters.

URL Structure
Keep the URL short and descriptive.
Add primary keywords to the URL.
Separate words with a hyphen '-' instead of an underscore '_'.

Note:
The URL should contain the most important keywords of the page, which helps search engines understand the page theme.

Please respond in the format {\"titles\": ..., \"url\": ..., \"describe\": ...}
					`
				},
                {
                    role: 'user',
                    content: content
                }
            ],
            max_tokens: 32000,
            temperature: 0.7,
            top_p: 0.7,
            top_k: 50,
            frequency_penalty: 0.5,
            n: 1,
            response_format: {
                type: 'json_object'
            }
        });
        const result = JSON.parse(response.choices[0].message.content);
        return result;
    } catch (error) {
        console.error('AI调用失败:', error);
        return null;
    }
}

// get issues list
const issueInstance = gh.getIssues(GH_USER, GH_PROJECT_NAME);

function generateMdx(titles, describe, issue) {
	return `---
title: ${titles}
description: ${describe}
date: ${issue.created_at}
category: blog
author: ${issue.user?.login}：${issue.user?.html_url}
tags: ${JSON.stringify(issue.labels.map((item) => item.name))}
---

${closeImgTag(issue.content.replace(/<br \/>/g, '\n'))}

`;
}

async function main() {
	const filePath = path.resolve(__dirname, blogOutputPath);
	fs.ensureDirSync(filePath);
	const existingFiles = new Set(fs.readdirSync(filePath));
	
	const creators = ['lord97j'];
	for (const name of creators) {
		const { data } = await issueInstance.listIssues({ creator: name, labels: 'blog' });
		let successCount = 0;
		const updatedFiles = new Set();
		
		for (const item of data) {
			try {
				const result = await callBlogAI(item.content);
				const { titles, url, describe } = result;
				const fileName = generateSafeFileName(url);
				const md = generateMdx(titles, describe, item);
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
	}
}

module.exports = main;
