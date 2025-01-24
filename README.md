🌍 *[English](README.md) ∙ [简体中文](README.zh.md)*

# SitemapHunt - 免费站点地图监控工具

<p align="center">
  <img src="public/logo.png" alt="SitemapHunt Logo" width="200"/>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-13-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 🌟 产品简介

SitemapHunt 是一款强大的免费在线站点地图监控和变更检测工具。通过自动化的sitemap跟踪系统，帮助网站管理员实时掌握网站内容变更，提供直观的监控报告。

### 🔥 核心特性

- 📊 **自动站点地图监控**
  - 实时跟踪网站变更
  - 自动检测sitemap更新
  - 智能变更对比分析

- 📈 **变更检测与报告**
  - Markdown格式报告生成
  - 自定义监控频率
  - 历史变更记录追踪

- 🔍 **高级监控功能**
  - 多站点并行监控
  - 自定义监控规则
  - 变更通知提醒

- 🛠 **便捷工具集成**
  - 一键导入站点地图
  - 批量URL管理
  - API接口支持

## 🚀 快速开始

1. 访问 [SitemapHunt](https://dotcursorrules.com)
2. 输入您的网站sitemap URL
3. 配置监控参数
4. 开始自动监控

## 💡 使用场景

- 网站内容更新追踪
- SEO变更监控
- 竞品网站分析
- 网站维护管理

## 📚 技术架构

- **前端框架**: Next.js 13
- **样式方案**: Tailwind CSS
- **国际化**: Next-Intl
- **部署平台**: Vercel

## 🌍 国际化支持

- 🇨🇳 简体中文
- 🇺🇸 English

## 📖 文档资源

- [入门指南](docs/getting-started.md)
- [高级功能教程](docs/advanced-guide.md)
- [API文档](docs/api-reference.md)

## 🤝 参与贡献

欢迎提交 Pull Request 或创建 Issue！

## 📄 开源协议

本项目采用 MIT 协议 - 详见 [LICENSE](LICENSE) 文件

## 📞 联系我们

- 官方网站：[dotcursorrules.com](https://dotcursorrules.com)
- 技术支持：support@dotcursorrules.com

---

<p align="center">用科技改变网站监控方式</p>

# DevToolset

[DevToolset](https://DevToolset.net/) is an open-source database-free developer tools navigator

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=iamcorey/devtoolset&type=Date)](https://star-history.com/#iamcorey/devtoolset&Date)


## Preview

![DevToolset](https://img.magicbox.tools/screenshot_img/devtoolset.png?version=081702)

## Features

- **Database-free Architecture**: Utilizes GitHub for content storage and management.
- **Dynamic Content**: Renders content dynamically using Next.js server-side rendering.
- **Markdown Support**: Write your content in Markdown format for easy editing and version control.
- **Admin Interface**: Built-in admin panel for content management.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **SEO Friendly**: Optimized for search engines with dynamic metadata.
- **Easy Deployment**: Simple deployment process to Vercel.
- **Built-in Analytics Support**: Integrated analytics support scripts, compatible with Google Analytics and Plausible Analytics.
- **i18n**: Support multiple languages and can be easily extended to support more languages.
- **Dark Mode**: Support dark mode and can be easily extended to support more themes.
- **Ads Support**: Support Google Adsense and can be easily extended to support more ads.

### Tech Stack
- Next.js - Framework
- Tailwind CSS - CSS Framework
- Shadcn/UI - Component Library
- Vercel - Deployment
- Next-Intl - Internationalization
- Analytics - Google Analytics & Plausible Analytics & ...
- Ads - Google Adsense & ...

---


## Adding New Developer Tools to DevToolset

Wanna add your site to DevToolset? 

### Two ways to submit your site
1. Submit your site via [GitHub Issues](https://github.com/iamcorey/devtoolset/issues) for a free dofollow link.

2. Or you can also submit your site by change the jsonc file in the `data/json/[locale]` folder and create a pull request.
(Please read our [Submission Guide](/data/md/add-new-developer-tools.md) for details on how to request inclusion)

### Submit format

Follow the format below:
- [ ] **name**: Provide a brief title describing the tool or data you added.
- [ ] **description**: Clearly state what tool or data was added and in which category.
- [ ] **url**: Provide the url of the tool.
- [ ] **category**: Provide the category of the tool.
- [ ] **tags**: Provide serval tags of the tool. (3 tags at most)
- [ ] **icon_url**: Provide the url of the icon of the tool. (Optional) If not provided, the icon will be generated automatically.


### Additional Notes
- **Developer Tools Only**: Please do not submit tools unrelated to development.
- **No Affiliate Links**: Do not include affiliate links.
- **No Spam**: Do not include spam.
- **Accessible URL**: Ensure the url is accessible.



## Deploy your own DevToolset

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FiAmCorey%2Fdevtoolset&project-name=devtoolset&repository-name=devtoolset&external-id=https%3A%2F%2Fgithub.com%2FiAmCoreye%2Fdevtoolset%2Ftree%2Fmain)



## Prerequisites

- Node.js (version 14 or later)
- npm/pnpm/yarn (comes with Node.js)
- Git
- GitHub account
- Vercel account (for deployment)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/iAmCorey/devtoolset
   cd devtoolset
   ```

2. Install dependencies:
   ```
   npm install
   pnpm install
   yarn
   ```

3. Create a `.env.local` file in the root directory and add the following:
   ```
   GITHUB_TOKEN=your_github_personal_access_token(Optional)
   GITHUB_OWNER=your_github_username(Optional)
   GITHUB_REPO=your_repo_name(Optional)
   ACCESS_PASSWORD=your_secure_access_password(Optional)
   JWT_SECRET=your_secret_key_here(Optional)
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics(G-xxx)(Optional)
   NEXT_PUBLIC_PLAUSIBLE_URL=your_plausible_data_domain(Optional)
   NEXT_PUBLIC_GOOGLE_ADSENSE_ID=your_google_adsense_id(Optional)
   DOMAIN=your_domain(localhost / YOUR_DOMAIN.tld)
   ```

4. Set up your GitHub repository:
   - Create a new repository on GitHub
   - Create two folders in the repository: `data/json/[locale]` and `data/md`
   - In `data/json/[locale]`, create related jsonc file with an empty array: `[]`

5. Run the development server:
   ```
   npm run dev
   pnpm dev
   yarn run dev
   ```

Visit `http://localhost:3000` to see your DevToolset instance running locally.

## Deployment

1. Push your code to GitHub.
2. Log in to Vercel and create a new project from your GitHub repository.
3. Configure the environment variables in Vercel:
   - `GITHUB_TOKEN`(Optional)
   - `GITHUB_OWNER`(Optional)
   - `GITHUB_REPO`(Optional)
   - `ACCESS_PASSWORD`(Optional)
   - `JWT_SECRET`(Optional)
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`(Optional)
   - `NEXT_PUBLIC_PLAUSIBLE_URL`(Optional)
   - `NEXT_PUBLIC_GOOGLE_ADSENSE_ID`(Optional)
   - `DOMAIN`(localhost / YOUR_DOMAIN.tld)
4. Deploy the project.

For a detailed deployment guide, please refer to our [Installation and Deployment Guide](/data/md/deploy-own-devtoolset.md).

## Usage
### Mannually
- Tools: Change the jsonc file in the `data/json/[locale]` folder.
- Articles: Change the markdown file in the `data/md` folder.

### By The Admin Panel
(Need to configure the GITHUB related environment variables.)
- Access the admin panel by navigating to `/admin` and using your `ACCESS_PASSWORD`.
- Create and edit articles through the admin interface.
- Manage resources in the admin panel.
- All changes are automatically synced with your GitHub repository.


---


## Changelog
See [CHANGELOG.md](./CHANGELOG.md) for a detailed list of changes.

## Contributing

We welcome contributions to DevToolset! Please read our [Contributing Guide](/data/md/add-new-developer-tools.md) for details on our code of conduct and the process for submitting pull requests.

## License

DevToolset is open-source software licensed under the [MIT license](./LICENSE).


## Acknowledgements

DevToolset is built with the following tools and libraries:
- [GitBase](https://gitbase.app/) 
- [Favicon.im](https://favicon.im/) 
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

We are grateful to the maintainers and contributors of these projects.

## Contact Us

If you want a secondary development, want to customize this project or want to collaborate with us, please contact us.

Feel free to reach out if you have any questions or suggestions:

- **Email:** [iamcoreychiu+devtoolset@gmail.com](mailto:iamcoreychiu+devtoolset@gmail.com)
- **GitHub:** [iamcorey](https://github.com/iamcorey)
- **jike:** `阿邱很行` [阿邱很行](https://okjk.co/mFe3NR)
- **Wechat:** `iAmCor3y`(Please add a note when sending a friend request)
<img src="https://img.magicbox.tools/screenshot_img/iamcoreywechat.jpg" alt="加我为好友" style="height: 200px; width: 200px">


## Support 

If you find this project helpful, please consider giving it a ⭐ on GitHub!

If you want to donate or sponsor this project, it will be greatly appreciated.

<a href='https://ko-fi.com/X8X2WF1V8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

<img src="./public/buymeacoffee.jpg" alt="请阿邱喝咖啡" style="height: 200px; width: 200px">

Thank you for your support!
