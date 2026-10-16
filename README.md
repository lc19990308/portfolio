# LewChaw Portfolio

个人作品集网站 · 前端开发工程师

🌐 **在线预览**：[https://lc19990308.github.io/portfolio/](https://lc19990308.github.io/portfolio/)

## ✨ 特性

- 🌙 **明暗主题切换** —— 跟随系统偏好，localStorage 持久化，内置防闪烁脚本刷新不跳变
- 🌐 **中英双语** —— 一键切换语言，选择自动记忆
- 🔍 **全站搜索** —— 快速定位项目与内容区块
- 📄 **简历下载** —— 内置 PDF 简历一键获取
- 📱 **响应式布局** —— 桌面端与移动端自适应
- ⚡ **数据驱动** —— 所有内容集中于 `src/data/`，改数据即改页面，无需触碰组件

## 🛠️ 技术栈

![Vue 3](https://img.shields.io/badge/Vue_3-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

- **框架**：Vue 3（Composition API + `<script setup>`）
- **构建**：Vite 8
- **样式**：原生 CSS 手写设计系统，`data-theme` 属性驱动主题变量
- **状态逻辑**：Composables（`useTheme` / `useI18n`）
- **部署**：GitHub Pages（`gh-pages` 分支）

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产产物（输出 dist/）
npm run build

# 本地预览构建产物
npm run preview

# 构建并部署到 GitHub Pages
npm run deploy
```

## 📂 项目结构

```
portfolio/
├── index.html                  # 入口 HTML（内联防主题闪烁脚本）
├── public/
│   └── resume.pdf              # 简历文件
├── src/
│   ├── App.vue                 # 页面骨架，组合各区块组件
│   ├── main.js                 # 应用挂载入口
│   ├── style.css               # 全局样式与主题 CSS 变量
│   ├── components/             # 页面区块组件
│   │   ├── AppHeader.vue       #   顶栏导航
│   │   ├── HeroSection.vue     #   首屏介绍
│   │   ├── ProjectSection.vue  #   项目展示
│   │   ├── SkillsSection.vue   #   技能图谱
│   │   ├── CareerSection.vue   #   职业经历
│   │   │   ├── InterestsSection.vue  #   兴趣爱好
│   │   ├── ContactSection.vue  #   联系方式
│   │   └── SearchModal.vue     #   全站搜索弹窗
│   ├── composables/            # 组合式函数
│   │   ├── useTheme.js         #   主题切换（暗色/亮色）
│   │   └── useI18n.js          #   中英国际化
│   └── data/                   # 内容数据（改这里即可更新页面）
│       ├── projects.js         #   项目列表
│       ├── skills.js           #   技能数据
│       ├── experience.js       #   工作经历
│       └── interests.js        #   兴趣内容
└── vite.config.js
```

## 📬 联系

- 📧 Email：[jarridaddison4@gmail.com](mailto:jarridaddison4@gmail.com)
- 🐙 GitHub：[lc19990308](https://github.com/lc19990308)
