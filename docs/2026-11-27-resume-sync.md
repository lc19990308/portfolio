# 2026-11-27 简历内容同步变更记录

## 实现过程

按新版简历 `~/Documents/刘超_前端开发工程师_简历.docx` 及事实核对底稿 `~/Documents/resume-fact-check.md` 的口径更新作品集：

- `src/data/experience.js`：四段工作经历（补齐河南乐易）、时间线改为 2019.10–2020.09 / 2020.09–2023.02 / 2023.02–2024.08 / 2024.10–至今，亮点按新简历重写（首段含独立架构、CI/CD、Vitest / Playwright、SSE、K 线调优）。
- `src/data/projects.js`：保留全部 18 个项目；重写 YS、星源 CRM、MBSE、系泊四个重点项目的双语字段，去掉事实核对标记为不可写的说法（150 页 / 185 API、YS 用 TypeScript、CRM 主链路 AutoX.js / OCR、平台直接调模型、180+ 已验收等），保留 `{zh,en}` 结构与 `architecture` 字段原有类型。
- `src/data/skills.js`：对齐新简历技能清单（Flutter / Qt / 公众号 JSSDK / Vue Test Utils / Cypress / GitLab CI / GitHub Actions / JSON Schema / Prompt Engineering），保持分类数与 `skillCount` 展示逻辑。
- `src/App.vue`：首屏与「关于我」文案按新简历职业概述重写；联系方式保持原样（用户确认）。
- `public/resume.html`：单页简历正文整体重写，头衔改为「前端开发工程师 / 资深跨端开发与 AI 工程化」，四段经历与四个项目对齐新口径，未加入简历 docx 中的占位联系方式。
- `public/resume.pdf`：使用系统 Chrome headless `--print-to-pdf` 从更新后的 resume.html 生成；打印样式压缩至 1 页 A4（字号 7.6pt / 行距 1.3），中文渲染目视检查正常。

未改动 `src/components/`（未被 App.vue 引用的历史组件）、`package.json` 与部署配置。

## 验证命令与结果

- `npm install && npm run build` → 构建通过（14 modules transformed，dist 输出正常）
- `npx vite preview --port 4173` + Playwright 快照：四个重点项目标题/时间/技术栈、四段经历时间线、技能分类、联系方式渲染正确
- 390×844 移动端视口：`scrollWidth == clientWidth == 390`，无横向溢出
- PDF：`/portfolio/resume.pdf` HTTP 200 且与本地新文件一致；Chrome 生成日志显示 1 页

## 遗留问题

- 组件目录内的联系方式（ContactSection.vue / README.md）仍保留旧值，但这些组件不参与当前构建；如需恢复组件化架构需另行统一。
- 发布需在用户确认后执行 `npm run deploy`（gh-pages 分支）并推送 `main` 源码分支。
