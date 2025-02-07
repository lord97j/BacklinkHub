// 导入必要的依赖
require('dotenv').config();
const GitHub = require('github-api');
const fs = require('fs-extra');
const path = require('path');
const OpenAI = require('openai');

// 环境变量配置
const { 
  GH_TOKEN, 
  GH_USER, 
  GH_PROJECT_NAME, 
  OPENAI_API_KEY, 
  OPENAI_BASE_URL 
} = process.env;

// 常量定义
const BLOG_OUTPUT_PATH = '../../data/md';
const CONTRIBUTORS_OUTPUT_PATH = '../../data/json/contributors.json';
const CREATORS = ['lord97j'];

// GitHub 实例初始化
const gh = new GitHub({ token: GH_TOKEN });

// 环境变量检查
if (!GH_USER || !GH_PROJECT_NAME || !OPENAI_API_KEY || !OPENAI_BASE_URL) {
  console.error('请设置必要的环境变量: GITHUB_USER, GITHUB_PROJECT_NAME, OPENAI_API_KEY, OPENAI_BASE_URL');
  process.exit(-1);
}

/**
 * 闭合未闭合的img标签
 * @param {string} htmlString - HTML字符串
 * @returns {string} 处理后的HTML字符串
 */
function closeImgTag(htmlString) {
  const imgTagRegex = /<img([^>]*)(?<!\/)>/g;
  return htmlString.replace(imgTagRegex, '<img$1 />');
}

/**
 * 调用AI服务生成SEO优化的标题、URL和描述
 * @param {string} content - 博客内容
 * @returns {Promise<Object>} 包含titles、url和describe的对象
 */
async function callBlogAI(content) {
  const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
    baseURL: OPENAI_BASE_URL
  });

  try {
    const completion = await client.chat.completions.create({
      model: 'deepseek-ai/DeepSeek-V3',
      messages: [
        {
          role: 'system',
          content: `
            You are an SEO expert, skilled in analyzing content to generate SEO optimized titles、url、describe
            
            Title tags:
            - Place the main keywords at the beginning of the title
            - Keep title length between 50-60 characters
            - Ensure the title is eye-catching
            
            Meta description:
            - Provide a brief overview of the page content
            - Use keywords naturally
            - Keep length between 150-160 characters
            
            URL Structure:
            - Keep URLs short and descriptive
            - Include primary keywords
            - Use hyphens (-) for word separation
            
            Respond in format: {"titles": "...", "url": "...", "describe": "..."}
          `
        },
        {
          role: 'user',
          content: content
        }
      ],
      temperature: 0.7,
      max_tokens: 5000,
      response_format: { type: 'json_object' }
    });

    if (!completion.choices[0]?.message?.content) {
      throw new Error('AI响应内容为空');
    }

    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error('AI调用失败:', error.message || error, OPENAI_BASE_URL);
    throw error; // 向上传递错误，让调用者处理
  }
}

/**
 * 生成MDX格式的博客内容
 * @param {string} titles - 博客标题
 * @param {string} describe - 博客描述
 * @param {Object} issue - GitHub issue对象
 * @returns {string} MDX格式的内容
 */
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

/**
 * 生成安全的文件名
 * @param {string} url - 原始URL
 * @returns {string} 安全的文件名
 */
function generateSafeFileName(url) {
  return `${url.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')}.mdx`;
}

/**
 * 更新贡献者信息
 * @param {Array} contributors - 贡献者列表
 */
async function updateContributors(contributors) {
  try {
    const contributorsPath = path.resolve(__dirname, CONTRIBUTORS_OUTPUT_PATH);
    let existingContributors = [];
    
    // 读取现有贡献者
    if (fs.existsSync(contributorsPath)) {
      existingContributors = await fs.readJson(contributorsPath);
    }

    // 合并并去重贡献者
    const uniqueContributors = [...existingContributors];
    contributors.forEach(contributor => {
      const exists = uniqueContributors.some(
        existing => existing.login === contributor.login
      );
      if (!exists) {
        uniqueContributors.push(contributor);
      }
    });

    // 保存更新后的贡献者列表
    await fs.writeJson(contributorsPath, uniqueContributors, { spaces: 2 });
    console.log('贡献者信息更新成功');
  } catch (error) {
    console.error('更新贡献者信息失败:', error);
  }
}

/**
 * 主函数：同步GitHub Issues到博客文件
 */
async function main() {
  const filePath = path.resolve(__dirname, BLOG_OUTPUT_PATH);
  fs.ensureDirSync(filePath);
  
  const issueInstance = gh.getIssues(GH_USER, GH_PROJECT_NAME);
  const contributors = new Set();
  
  for (const creator of CREATORS) {
    const { data } = await issueInstance.listIssues({ 
      creator: creator, 
      labels: 'blog' 
    });
    
    let successCount = 0;
    
    for (const item of data) {
      try {
        // 收集贡献者信息
        contributors.add({
          login: item.user.login,
          avatar_url: item.user.avatar_url,
          html_url: item.user.html_url,
          contributions: ['blog']
        });

        const result = await callBlogAI(item.content);
        const { titles, url, describe } = result;
        const fileName = generateSafeFileName(url);
        const md = generateMdx(titles, describe, item);
        
        fs.writeFileSync(`${filePath}/${fileName}`, md);
        console.log(`成功同步: ${filePath}/${fileName}`);
        successCount++;
      } catch (error) {
        console.error('同步失败:', error);
      }
    }

    console.log(
      successCount === data.length
        ? `文章全部同步成功！共${data.length}篇`
        : `部分同步失败！成功${successCount}篇，失败${data.length - successCount}篇`
    );
  }

  // 更新贡献者信息
  await updateContributors(Array.from(contributors));
}

module.exports = main;