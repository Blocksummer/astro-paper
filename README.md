# Summer 的个人空间

基于 [AstroPaper](https://github.com/satnaing/astro-paper) 的中文个人站点，包含科研笔记、仿真记录和项目展示。保留明暗主题、移动端菜单、标签、归档、RSS 和 Pagefind 搜索。

## 本地运行

需要 Node.js 22.12+（建议 Node.js 24 LTS）及 pnpm 11.3.0（与 CI 一致）。

```sh
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env
pnpm dev
```

编辑 `.env`，将 `SITE_URL` 改为最终站点的完整根地址，例如 `https://your-site.pages.dev/`。默认 example.com 仅用于本地构建，不代表网站已部署。当前个人版按根路径部署，不支持 GitHub Pages 的仓库子路径。

```sh
pnpm build
pnpm preview
```

`build` 包含 Astro 类型检查、静态构建和搜索索引生成。首次使用搜索前需要运行 build。输出目录为 `dist`。

## 内容管理

- 站点名称、简介和社交链接：`astro-paper.config.ts`
- 首页：`src/pages/index.astro`
- 项目展示：`src/pages/projects.astro`
- 关于页面：`src/content/pages/about.md`
- 文章：`src/content/posts/*.md`
- 中文界面：`src/i18n/lang/zh-CN.ts`

当前内容按 `research`、`simulation` 等科研相关标签归类。一篇文章可以有多个标签。首批文章明确标注为写作模板，请替换为真实内容；原始英文示例可从 Git 历史或上游仓库查阅。

新文章示例：

```yaml
---
title: 我的第一篇记录
pubDatetime: 2026-10-15T08:00:00+08:00
description: 用一句话概括文章。
tags: [research]
draft: true
---
```

设为 `draft: true` 可从网站输出隐藏，但公开仓库中的源文件仍然公开，请勿提交私密研究数据。准备发布后移除 draft 或改为 false。

## Cloudflare Pages 部署

1. 导入这个 GitHub 仓库，选择要部署的分支。
2. 构建命令：`pnpm build`；输出目录：`dist`。
3. 环境变量设置 `NODE_VERSION=24`、`SITE_URL=https://你的实际域名/`。
4. 部署后检查首页、文章、标签、项目、搜索、RSS，以及移动端导航。

这是静态站点，也可将 dist 作为 Workers Static Assets 部署。本次代码修改不创建 Cloudflare 项目，也不修改已有域名或访问策略。

## 许可证

继承原项目 MIT 许可证，详见 `LICENSE`。原主题作者及版权声明保持不变。分享封面使用仓库内 SVG；部分社交平台不显示 SVG 预览，如需要社交卡片可自行提供 PNG 并修改 ogImage。
