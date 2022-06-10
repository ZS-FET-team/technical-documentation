

<h1 align="center">中商云前端技术团队</h1>

<h4 align="center">✨前端技术文档✨</h4>

<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg?sanitize=true" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true" alt="Chat"></a>
</p>


## 项目概述

此文档基于`vuePress 2x`技术，是一个Vue 驱动的静态网站生成器

### 项目启动

```bash
# 下载依赖
$ npm install

# 启动开发环境
$ npm run dev

# 打包项目
$ npm run build

# 部署到GitHub
$ 将docs/.vuepress/dist 文件复制

$ 将dist文件推送到 ZS-FET-team 仓库

$ GitHub 部署路径为根目录 /root
```
### 项目目录说明
```hash
.
├── docs
│   ├── .vuepress (项目运行文件夹)
│   │   ├── .cache (vuePress运行产生文件 -- 不用管)
│   │   ├── .temp (vuePress运行产生文件 -- 不用管)
│   │   ├── dist (构建出的静态文件)
│   │   ├── public (静态资源)
│   │   └──  config.js (项目设置)
│   ├── annotation (注释 规范) 
│   ├── css (css 规范) 
│   ├── git (git 规范) 
│   ├── html (html 规范) 
│   ├── JavaScript (JavaScript 规范)
│   ├── naming (命名 规范)  
│   ├── picture (图片 规范) 
│   ├── statute (文档概述) 
│   ├── tool (代码规范工具) 
│   └── README.md (首页) 
├── 前端技术文档.docx(前端技术文档word版)
├── .gitignore(忽略的有意未跟踪的文件)
├── package.json (依赖)
└── README.md (项目说明) 
```

<p align="center">
Copyright © 2022-2023 Evan Kanbara Take | MIT License
</p>
