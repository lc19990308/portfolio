export const projects = [
  {
    id: 'yingshi',
    name: { zh: 'YS 投研金融数据平台', en: 'YS Investment Research Platform' },
    period: '2025 - 至今',
    techStack: ['Vue 3', 'TypeScript', 'Element Plus', 'Pinia', 'ECharts 6', 'Vite'],
    type: 'web',
    published: false,
    summary: { zh: '面向金融投研的一站式数据平台，包含约 150 个页面，覆盖 17 个业务领域、对接 185+ API。承担业务页面、定制公共组件、图表与加载性能优化，并参与专家库会议系统建设。', en: 'A financial research platform with around 150 pages across 17 business domains and 185+ APIs. Contributed business pages, custom shared components, chart and loading optimizations, and features for the expert database and meeting system.' },
    challenge: {
      zh: '多页面金融平台需要统一展示与交互；大数据量 K 线图的加载和交互、首屏资源加载，以及职责混杂模块的维护都是开发中的重点。',
      en: 'A large financial platform requires consistent presentation and interactions. Key challenges included loading and interacting with large candlestick datasets, initial resource loading, and maintaining modules with mixed responsibilities.',
    },
    approach: {
      zh: '依据设计稿实现业务页面与交互，封装 ECharts 图表及菜单栏、Banner、Swiper、侧边栏等定制组件。优化大数据量 K 线图加载与交互，结合模块分包优化首屏资源加载；清理冗余代码、拆分职责混杂模块并降低依赖耦合，参与专家库会议系统功能建设。',
      en: 'Implemented pages and interactions from designs, encapsulating ECharts charts and custom menus, banners, swipers and sidebars. Optimized large candlestick charts and initial resource loading through module splitting; removed redundant code, separated mixed responsibilities and reduced coupling, while contributing to the expert database and meeting system.',
    },
    keyPoints: {
      zh: ['约 150 个页面、17 个业务领域、185+ API 的平台前端开发', 'ECharts 图表与菜单栏、Banner、Swiper、侧边栏等定制组件封装', '大数据量 K 线图加载与交互优化，模块分包优化首屏加载', '冗余代码清理、模块拆分解耦，参与专家库会议系统建设'],
      en: ['Frontend contributions to a platform with around 150 pages, 17 domains and 185+ APIs', 'Shared ECharts charts and custom menus, banners, swipers and sidebars', 'Large candlestick chart optimization and module splitting for initial loading', 'Redundant code cleanup, module decoupling and expert database / meeting features'],
    },
    results: {
      zh: ['完成业务页面与公共组件交付，统一页面展示和交互', '改善大数据量 K 线图体验与首屏资源加载', '通过模块拆分和依赖解耦改善多页面项目可维护性'],
      en: ['Delivered business pages and shared components with consistent presentation and interactions', 'Improved large candlestick chart interactions and initial resource loading', 'Improved maintainability through module separation and reduced coupling'],
    },
    architecture: { zh: '设计稿 → Vue 3 + Pinia 业务页面 → 定制公共组件 / ECharts 图表 → 业务 API；模块分包与职责解耦', en: 'Designs → Vue 3 + Pinia business pages → shared custom components / ECharts → business APIs; module splitting and separation of responsibilities' },
    gradient: 'linear-gradient(135deg, #0c0c1d, #1a1a3e, #16213e)',
  },
  {
    id: 'xingyuan',
    name: { zh: '星源 CRM 移动端', en: 'XingYuan CRM Mobile' },
    period: '2024',
    techStack: ['uni-app', 'Vue 3', 'AutoX.js', 'Android 无障碍', 'OCR', '原生插件'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['华为应用市场', '小米应用商店', '应用宝'],
    summary: { zh: '面向电销业务的 CRM App，负责客户信息录入与外呼页面开发，结合 AutoX.js、Android 无障碍和原生插件实现信息录入、拨号及录音结果回传。已上架华为、小米、应用宝等应用市场。', en: 'A CRM app for telesales. Developed customer entry and outbound calling pages, integrating AutoX.js, Android accessibility and native plugins for automated entry, dialing and recording result uploads. Published on Huawei, Xiaomi and Tencent app stores.' },
    challenge: {
      zh: '自动录入与拨号需要识别不同页面节点，并适配不同品牌设备的无障碍和通话行为；通话结束后还需将外呼记录与录音准确关联，支持遗漏录音补偿回传。',
      en: 'Automated entry and dialing require identifying UI nodes and adapting accessibility and call behavior across device brands. Call records must be associated with recordings after calls, with compensating uploads for missed recordings.',
    },
    approach: {
      zh: '基于 AutoX.js 编写脚本，结合节点树定位与 OCR 识别实现自动录入和拨号。通过原生插件将脚本执行能力集成至原生服务，调用无障碍插件监听通话状态与录音结果，适配 Xiaomi、OPPO、vivo、Huawei。拨号前在本地生成唯一 key，关联外呼记录和录音，返回 App 后上传结果并支持遗漏录音补偿回传。',
      en: 'Wrote AutoX.js scripts using node-tree targeting and OCR for automated entry and dialing. Integrated script execution into a native service through a native plugin and used an accessibility plugin to monitor call states and recording results, adapting to Xiaomi, OPPO, vivo and Huawei. Generated a unique local key before dialing to link call records and recordings, then uploaded results on returning to the app with compensating uploads for missed recordings.',
    },
    keyPoints: {
      zh: ['CRM 客户录入与外呼业务页面开发', 'AutoX.js + 节点树定位 + OCR 自动录入与拨号', '原生插件集成脚本执行至原生服务，无障碍插件监听通话与录音结果', 'Xiaomi、OPPO、vivo、Huawei 品牌适配', '拨号前唯一 key 关联记录与录音，返回 App 上传及遗漏录音补偿回传'],
      en: ['CRM customer entry and outbound calling pages', 'AutoX.js with node-tree targeting and OCR for automated entry and dialing', 'Native plugin integration into a native service; accessibility plugin for call and recording monitoring', 'Device adaptation for Xiaomi, OPPO, vivo and Huawei', 'Unique pre-call key linking records and recordings, uploads on app return and compensating recording uploads'],
    },
    results: {
      zh: ['完成客户录入、自动拨号与通话录音回传流程', '适配多品牌 Android 设备并支持遗漏录音补偿回传', '项目已上架华为、小米、应用宝等应用市场'],
      en: ['Delivered customer entry, automated dialing and call recording upload flows', 'Adapted to multiple Android brands with compensating uploads for missed recordings', 'Published on Huawei, Xiaomi and Tencent app stores'],
    },
    architecture: { zh: 'uni-app CRM → 本地唯一 key → 原生插件 / 原生服务 → AutoX.js 节点树 + OCR / 无障碍插件 → 通话与录音监听 → 返回 App 上传 / 补偿回传', en: 'uni-app CRM → unique local key → native plugin / service → AutoX.js node tree + OCR / accessibility plugin → call and recording monitoring → upload on app return / compensating uploads' },
    gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  },
  {
    id: 'mooring-check',
    name: { zh: '系泊分析自动化测试平台', en: 'Mooring Analysis Automation Platform' },
    period: '2026',
    techStack: ['Vue 3', 'TypeScript', 'Naive UI', 'Pinia', 'OpenAPI', 'RPA'],
    type: 'web',
    published: false,
    summary: { zh: '参与中集系泊分析测试平台建设，承担用例管理、任务执行、进度监控与结果展示前端开发，通过 API 调用 Windows 端 Python 桥触发 MAS.exe 执行，并编写 GUI 自动化脚本。', en: 'Contributed to CIMC’s mooring analysis testing platform, developing case management, task execution, progress monitoring and result views. Called a Windows Python bridge through APIs to trigger MAS.exe and wrote GUI automation scripts.' },
    challenge: {
      zh: '平台需要衔接 Web 任务操作与 Windows MAS 执行环境；现有 Python 桥尚未覆盖操作方案的 200 余条测试用例，需要通过桌面 GUI 自动化补充执行路径。',
      en: 'The platform needed to connect Web task operations with Windows MAS execution. More than 200 test cases lacked operation procedures in the existing Python bridge, requiring desktop GUI automation to extend execution coverage.',
    },
    approach: {
      zh: '使用 Vue 3、TypeScript、Naive UI 和 Pinia 开发用例、任务、进度及结果页面，通过 API 对接已有 Windows 端 Python 桥以触发 MAS.exe。针对桥尚未覆盖操作方案的用例编写 RPA GUI 自动化脚本，衔接平台任务与桌面软件操作。',
      en: 'Built case, task, progress and result pages with Vue 3, TypeScript, Naive UI and Pinia. Integrated the existing Windows Python bridge through APIs to trigger MAS.exe, and wrote RPA GUI scripts for cases whose operation procedures were not yet covered by the bridge, connecting platform tasks to desktop operations.',
    },
    keyPoints: {
      zh: ['用例管理、任务执行、进度监控与结果展示前端开发', '通过 API 调用已有 Windows Python 桥触发 MAS.exe', '针对 200 余条待覆盖用例，通过 RPA 实现其中 180+ 条的 GUI 自动化操作', '衔接 Web 平台任务与 Windows 桌面软件执行流程'],
      en: ['Frontend case management, task execution, progress monitoring and result views', 'API integration with an existing Windows Python bridge to trigger MAS.exe', 'RPA GUI automation for 180+ of the 200+ cases lacking operation procedures in the bridge', 'Connected Web platform tasks with Windows desktop execution'],
    },
    results: {
      zh: ['完成用例、任务、监控与结果相关前端功能', '实现 180+ 条测试用例的 MAS GUI 自动化操作，补充现有桥的操作覆盖', '将平台任务与桌面执行衔接，减少重复人工操作'],
      en: ['Delivered frontend functionality for cases, tasks, monitoring and results', 'Automated MAS GUI operations for 180+ test cases, extending the existing bridge’s operation coverage', 'Connected platform tasks with desktop execution to reduce repetitive manual operations'],
    },
    architecture: { zh: 'Vue 3 + Pinia 业务页面 → API → 已有 Windows Python 桥 → MAS.exe；RPA 脚本补充 GUI 自动化操作 → 执行结果展示', en: 'Vue 3 + Pinia business pages → APIs → existing Windows Python bridge → MAS.exe; RPA scripts extend GUI automation → execution result views' },
    gradient: 'linear-gradient(135deg, #0c1a24, #16303f, #0f2231)',
  },
  {
    id: 'short-video',
    name: { zh: '短剧短视频 App', en: 'Short Drama Video App' },
    period: '2022',
    techStack: ['uni-app', 'Vue', 'WalletConnect', 'web3.js'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['H5', '微信小程序', 'App', 'iOS App Store'],
    summary: { zh: '参与短剧短视频 App 前端开发，完成视频浏览、支付页面对接与 H5、小程序、App 适配。使用 WalletConnect 接入 ETH、USDC、USDT 多钱包支付，项目已上架 App Store。', en: 'Contributed to a short drama video app, integrating video browsing and payment pages across H5, WeChat Mini Program and App. Used WalletConnect for multi-wallet ETH, USDC and USDT payments. The app is published on the App Store.' },
    challenge: {
      zh: '跨端应用需要兼顾视频浏览与支付体验，支付需覆盖浏览器插件钱包和 App 钱包唤起；获取 txHash 后还需查询并校验链上交易、持续展示状态并向后端上报结果。',
      en: 'The cross-platform app needed consistent video browsing and payment experiences, covering browser extension wallets and app wallet launch flows. After obtaining a txHash, the frontend needed to query and validate on-chain transactions, display ongoing status and report results to the backend.',
    },
    approach: {
      zh: '使用 uni-app 完成视频浏览、支付页面功能对接与多端适配。通过 WalletConnect、web3.js 接入 ETH、USDC、USDT，支持插件钱包及 Binance、OKX 等 App 钱包入口。获取 txHash 后查询并校验链上交易，轮询状态、展示支付结果，并向后端上报校验结果。',
      en: 'Integrated video browsing and payment pages across platforms with uni-app. Used WalletConnect and web3.js for ETH, USDC and USDT payments, supporting extension wallets and app wallet entry points including Binance and OKX. Queried and validated on-chain transactions after obtaining the txHash, polled status, displayed payment results and reported validation results to the backend.',
    },
    keyPoints: {
      zh: ['视频浏览与支付页面功能对接，H5 / 微信小程序 / App 多端适配', 'WalletConnect 多钱包支付发起，支持 ETH、USDC、USDT', '浏览器插件钱包及 Binance、OKX 等 App 钱包唤起', 'txHash 链上查询校验、状态轮询、支付结果展示与后端上报'],
      en: ['Video browsing and payment integration across H5, WeChat Mini Program and App', 'WalletConnect multi-wallet payment initiation for ETH, USDC and USDT', 'Browser extension wallets and app wallet launch flows including Binance and OKX', 'txHash-based on-chain queries and validation, status polling, result display and backend reporting'],
    },
    results: {
      zh: ['完成 Web3 多钱包支付对接与链上交易校验流程', '交付多端视频浏览及支付页面功能', '项目已上架 App Store'],
      en: ['Integrated Web3 multi-wallet payments and on-chain transaction validation', 'Delivered cross-platform video browsing and payment page functionality', 'The app is published on the App Store'],
    },
    architecture: { zh: 'uni-app 视频 / 支付页面 → WalletConnect + web3.js → 插件钱包 / App 钱包 → txHash 链上查询校验 → 状态轮询与结果展示 → 上报后端', en: 'uni-app video / payment pages → WalletConnect + web3.js → extension / app wallets → txHash on-chain query and validation → status polling and result display → backend reporting' },
    gradient: 'linear-gradient(135deg, #1a1028, #2d1a3e, #1a0f2e)',
  },
  {
    id: 's3000-deployment',
    name: { zh: '国产 GPU 部署与测试', en: 'Domestic GPU Deployment & Testing' },
    period: '2026',
    techStack: ['国产算力', '离线部署', 'FP32 测试工具', '自动化诊断'],
    type: 'infrastructure',
    published: false,
    summary: {
      zh: '参与国产 GPU 现场部署与环境适配，建设 FP32 测试工具和自动化诊断能力，整理可复用的离线部署与运维流程。',
      en: 'Contributed to domestic GPU deployment and environment adaptation, building FP32 testing tools and automated diagnostics, with reusable offline deployment and operations procedures.',
    },
    challenge: {
      zh: '封闭环境下需要完成软硬件环境适配，并形成便于重复执行的部署与诊断流程。',
      en: 'The isolated environment required coordinated platform adaptation and repeatable deployment and diagnostic procedures.',
    },
    approach: {
      zh: '参与双卡 S3000 部署和环境适配，建设 FP32 测试程序、自动化诊断与日志采集工具，沉淀离线操作文档。',
      en: 'Contributed to dual S3000 deployment and platform adaptation, creating FP32 test utilities, automated diagnostics and log collection tools, and documenting offline procedures.',
    },
    keyPoints: {
      zh: ['国产 GPU 现场部署与环境适配', 'FP32 测试程序及自动化诊断工具', '离线部署流程与运维文档'],
      en: ['Domestic GPU deployment and platform adaptation', 'FP32 test utilities and automated diagnostics', 'Offline deployment procedures and operations documentation'],
    },
    results: {
      zh: ['完成部署与环境适配工作', '交付 FP32 测试工具、自动化诊断能力及操作文档'],
      en: ['Completed deployment and environment adaptation work', 'Delivered FP32 testing tools, automated diagnostics and operational documentation'],
    },
    architecture: { zh: '离线部署准备 → 双卡 GPU 环境适配 → FP32 测试工具 / 自动化诊断 → 运维文档', en: 'Offline deployment preparation → dual-GPU environment adaptation → FP32 testing / automated diagnostics → operations documentation' },
    gradient: 'linear-gradient(135deg, #0c1a24, #16303f, #0f2231)',
  },
  {
    id: 'finance-intel',
    group: 'personal',
    name: { zh: '金融情报分析中台', en: 'Finance Intelligence Platform' },
    period: '2026',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'ECharts 5', 'Pinia', 'FastAPI', 'SQLAlchemy', 'JWT', 'akshare'],
    type: 'web',
    published: false,
    summary: {
      zh: '全球市场行情监测与分析中台，前端大屏、FastAPI 后端、uni-app 移动端均由我独立完成。聚合 A股/美股/港股/指数/汇率/期货/加密货币 9 类数据源，44 个 REST 接口支撑 30 个可配置大屏组件——相关性矩阵、估值泡沫评分、市场宽度、财经日历、新闻情绪等分析功能均为自研实现。',
      en: 'Global market monitoring platform — built solo end to end: the Vue 3 dashboard, FastAPI backend, and uni-app mobile. It aggregates 9 asset-class data sources (A-shares, US/HK stocks, indices, forex, futures, crypto) behind 44 REST endpoints, powering 30 configurable dashboard widgets. Analytics like correlation matrix, valuation bubble scores, and market breadth are all implemented from scratch.',
    },
    challenge: {
      zh: '新浪、腾讯、Binance、Yahoo 等 9 个数据源接口格式不同、限流严格、随时可能故障，任一源故障都不能导致大屏展示虚假数据。30 个组件同时轮询，若不做请求合并将直接压垮上游服务。',
      en: 'The 9 data sources (Sina, Tencent, Binance, Yahoo, etc.) each have different formats, rate limits, and failure modes — any single outage must never result in fake data on screen. 30 widgets polling simultaneously would overwhelm upstream APIs without request merging.',
    },
    approach: {
      zh: '后端做多源容错：FallbackAdapter 链式降级、按（源，接口）粒度熔断（失败 2 次冷却 60s）、分级超时预算，9 个源的运行时健康状态可随时切换。缓存采用自研 LRU + 软过期 + 单飞，Redis 故障时自动降级为进程内缓存。采集层是内嵌 asyncio worker，按 60s/120s/300s/900s 四路分频调度。前端用 12 列瀑布流布局，30 个 widget 可拖拽、布局存 localStorage，ECharts 按需注册减包；标签页隐藏时轮询自动暂停，相同代码的并发请求合并成一次。',
      en: 'Backend: multi-source fault tolerance — FallbackAdapter chain degradation, per (source, endpoint) circuit breaking (2 failures, 60s cooldown), and tiered timeout budgets, with runtime switching via a 9-source health registry. The cache is custom LRU + stale-while-revalidate + single-flight, degrading to in-process when Redis fails. Collection runs on embedded asyncio workers polling on four schedules (60s/120s/300s/900s). Frontend: 12-column masonry layout with 30 draggable widgets, layouts persisted to localStorage, ECharts registered on demand; polling pauses when the tab is hidden and concurrent requests for the same symbols merge into one.',
    },
    keyPoints: {
      zh: [
        '一人全栈：Vue 3 大屏 + FastAPI 后端 + uni-app 移动端，pnpm Monorepo 管理',
        '多数据源容错：9 源链式降级 + 接口粒度熔断 + 分级超时，运行时切换',
        '自研 LRU + 软过期 + 单飞缓存，Redis 故障自动降级',
        '12 列瀑布流大屏：30 个 widget 拖拽布局、localStorage 持久化',
        '页面隐藏时暂停轮询、相同请求 inflight 合并，全量组件并发轮询不压垮上游服务',
        '相关性矩阵、估值泡沫、市场宽度等分析指标纯 Python 实现',
      ],
      en: [
        'Full-stack solo: Vue 3 dashboard + FastAPI backend + uni-app mobile in a pnpm Monorepo',
        'Multi-source fault tolerance: chain degradation + endpoint-level circuit breaking + tiered timeouts with runtime switching',
        'Custom LRU + stale-while-revalidate + single-flight cache, auto-degrading when Redis fails',
        '12-column masonry dashboard: 30 draggable widgets, layouts persisted to localStorage',
        'Polling pauses on hidden tabs, identical requests merge inflight — 30 widgets without crushing upstream',
        'Correlation matrix, valuation bubble scores, market breadth computed in pure Python',
      ],
    },
    results: {
      zh: [
        '行情大屏覆盖 9 类资产，组件全部可配置',
        '单源故障自动切换，大屏不展示虚假数据',
        '31 个 pytest 用例 + GitHub Actions CI',
      ],
      en: [
        'Configurable dashboard covering 9 asset classes',
        'Single-source failures switch over seamlessly, no fake data on screen',
        '31 pytest cases + GitHub Actions CI',
      ],
    },
    architecture: '9 大行情数据源 → 熔断降级/分级超时 → FastAPI 44 端点 → LRU+单飞缓存 → Vue 3 瀑布流大屏 / uni-app 移动端',
    gradient: 'linear-gradient(135deg, #0a1428, #142c47, #0f1f3a)',
  },
  {
    id: 'cyber-drill',
    name: { zh: '船舶软件供应链攻防演练系统', en: 'Maritime Supply Chain Attack-Defense Drill Platform' },
    period: '2026',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Ant Design Vue', 'Pinia', 'ECharts 5', 'Windi CSS', 'Vben Admin'],
    type: 'web',
    published: false,
    summary: {
      zh: '与武汉理工大学合作的攻防演练管理平台，覆盖 AOD/AWD 演习、SBOM 分析、态势监控和复盘报告。基于 Vue Vben Admin 二次开发，独立完成前端开发与 88 个后端接口对接，3.5 周交付。',
      en: 'Attack-defense drill management platform in collaboration with Wuhan University of Technology, covering AOD/AWD drills, SBOM analysis, situation monitoring, and debrief reports. Secondary development on Vue Vben Admin, with the frontend built independently and 88 backend APIs integrated, delivered in 3.5 weeks.',
    },
    challenge: {
      zh: '攻击方、防守方、裁判三种角色在同一平台操作，页面与数据权限各不相同。演练进行时态势大屏要实时滚动战报和战绩，还要能一键导出报告，性能压力远高于常规管理页。项目是招标课题，前后端并行开发，接口频繁变更，前端只能 Mock 先行。开发中还发现 useDebounceFn 的隐患：表单防抖在删除/保存后刷新列表时产生时序竞态，导致旧响应覆盖新数据。',
      en: 'Attackers, defenders, and referees operate on the same platform with entirely different pages and data permissions. During drills, situation screens must stream battle reports and scores in real time and export reports in one click, with performance pressure far beyond typical admin pages. It was a tendered research project with frontend and backend developing in parallel and APIs changing frequently, so the frontend had to go mock-first. A useDebounceFn hazard also surfaced during development: form debouncing created a race between list refreshes after delete/save, causing stale responses to overwrite fresh data.',
    },
    approach: {
      zh: '基于 Vben Admin 二开，Ant Design Vue + Windi CSS 定制海事蓝政企主题。态势大屏有三块：攻击实况（CountUp 战绩数字、可暂停的滚动战报）、攻击成果、排行榜，报告用 Blob 流式导出，支持单条和批量。性能上 vendor 手动拆 6 个 chunk，index.html 里内联了真实资源加载进度条。接口层按 20 个业务域拆成 117 个 TS 函数，前期通过 mockjs 模拟全部数据，后端就绪后无缝切换。针对该竞态，定位 useDebounceFn 在删除/保存后刷新列表的时序问题，统一重构 12 个页面的实现。',
      en: 'Built on Vben Admin with a custom maritime-blue enterprise theme in Ant Design Vue + Windi CSS. Three situation screens: live attack (CountUp scores, pausable scrolling battle reports), achievements, and leaderboard — reports exported via Blob streaming, single or batch. Performance: manual 6-chunk vendor splitting and an inlined real-resource loading progress bar in index.html. The API layer is 117 TS functions across 20 business domains, fully mocked with mockjs early on and switched over seamlessly when the backend was ready. For the race condition: after locating the timing issue with useDebounceFn refreshing lists post-delete/save, the pattern was refactored across 12 pages.',
    },
    keyPoints: {
      zh: [
        '基于 Vben Admin 二开，3.5 周完成 88 个接口对接',
        '态势大屏三块：CountUp 战绩、可暂停战报、倒计时，Blob 流式导出报告',
        '攻击方/防守方/裁判三角色视图，动态路由 + 权限码生成菜单',
        'vendor 手动拆 6 个 chunk，内联真实加载进度条，gzip/brotli',
        '修复 useDebounceFn 删除/保存后的刷新竞态，12 个页面统一重构',
        'mockjs 先行 + 117 个 TS 类型化 API 函数，后端就绪零改动切换',
      ],
      en: [
        'Vben Admin secondary development: 88 APIs integrated in 3.5 weeks',
        'Three situation screens: CountUp scores, pausable battle reports, countdown, Blob streaming report export',
        'Attacker/defender/referee role views, dynamic routes + permission-code menus',
        'Manual 6-chunk vendor splitting, inlined real loading progress bar, gzip/brotli',
        'Fixed useDebounceFn refresh race after delete/save, refactored across 12 pages',
        'mockjs-first + 117 TS-typed API functions, zero-change backend switchover',
      ],
    },
    results: {
      zh: [
        '3.5 周完成 88/93 接口对接，按期交付',
        '态势大屏与业务页面覆盖演练全流程',
        'commitlint + Jest + vue-tsc 规范化工程链',
      ],
      en: [
        '88 of 93 APIs integrated in 3.5 weeks, delivered on schedule',
        'Situation screens and business pages covering the full drill workflow',
        'commitlint + Jest + vue-tsc engineering pipeline',
      ],
    },
    architecture: 'Vue 3 + Vben Admin → Ant Design Vue 海事蓝主题 → ECharts 5 态势大屏 → VAxios → 88 个接口（mockjs 先行）',
    gradient: 'linear-gradient(135deg, #0a1622, #142c3e, #0f2033)',
  },
  {
    id: 'mbse',
    name: { zh: 'MBSE 数据接口测试平台', en: 'MBSE Interface Testing Platform' },
    period: '2025',
    techStack: ['Vue 3', 'TypeScript', 'Vite 7', 'Element Plus', 'Pinia', 'Tailwind CSS', 'ECharts 6', 'WebSocket'],
    type: 'web',
    published: false,
    summary: {
      zh: '航空航天 & 汽车工业级仿真测试平台。对接 CATIA（达索系统，飞机/汽车结构仿真）和 OpenModelica（热仿真/控制仿真），将仿真接口测试从人工验证升级为全流程自动化——接口定义→用例生成→自动执行→实时监控→需求追溯→报告导出，接入 AI 批量生成测试用例。12 个完整业务模块。',
      en: 'Aerospace & automotive industrial-grade simulation testing platform. Integrates with CATIA (Dassault Systèmes, aircraft/vehicle structural simulation) and OpenModelica (thermal/control simulation). Upgrades simulation interface testing from manual verification to full automation — interface definition → case generation → auto-execution → real-time monitoring → requirement traceability → report export, with AI-powered batch test case generation. 12 complete business modules.',
    },
    challenge: {
      zh: '平台对接的是 CATIA（达索系统，航空/汽车结构仿真）和 OpenModelica（热力学/控制仿真）这类工业级仿真软件，每种软件的接口协议、调用方式完全不同，需要插件化架构灵活适配。执行引擎复杂度高：同时支持同步执行（开发调试）和异步批量执行（Celery + RabbitMQ，生产环境），还需要定时调度 + 分布式锁防止重复执行。AI 批量生成用例不是简单调个 API——上传接口定义 JSON，AI 要一次性生成几十上百条测试用例和对应的 Python 验证脚本，生成后还要走人工审核流程才能入库，整个链路涉及 AI 生成+人工审核+版本管理。',
      en: 'This isn\'t a generic web testing tool — it interfaces with CATIA (Dassault, aerospace/automotive structural simulation) and OpenModelica (thermodynamics/control simulation), industrial-grade software with completely different protocols and invocation methods, requiring a plugin architecture for flexible adaptation. The execution engine is complex: supporting both synchronous execution (dev/debug) and asynchronous batch execution (Celery + RabbitMQ, production), plus scheduled dispatch with distributed locking to prevent duplicates. AI batch generation isn\'t a simple API call — upload interface JSON, AI generates dozens of test cases with Python validation scripts, then goes through human review before being committed. The full pipeline spans AI generation → human review → version management.',
    },
    approach: {
      zh: 'Vue 3 + TypeScript + Vite 7 + Element Plus + Tailwind CSS 技术栈。WebSocket 对接后端 Redis Pub/Sub，执行结果毫秒级实时推送到前端，进度、日志、结果一站式展示。ECharts 6 自建多项可视化看板——项目仪表板、执行趋势、性能指标（响应时间/QPS/成功率）。完整的需求追溯链路（需求→用例→执行结果→缺陷）前端可视化，支持向上追溯和向下钻取。',
      en: 'Vue 3 + TypeScript + Vite 7 + Element Plus + Tailwind CSS stack. WebSocket connects to backend Redis Pub/Sub, pushing execution results to the frontend in milliseconds — progress, logs, and results in one view. ECharts 6 powers multiple dashboards: project dashboards, execution trends, and performance metrics (response time, QPS, success rate). Complete requirement traceability chain (requirement → case → execution result → defect) visualized in the frontend, with forward trace and drill-down.',
    },
    keyPoints: {
      zh: [
        'Vue 3 + TypeScript 企业级架构',
        '12 个完整业务模块：项目管理、插件注册、接口定义、用例设计、执行监控、AI 辅助等',
        'WebSocket 实时推送执行进度，Redis Pub/Sub → 前端毫秒级状态更新',
        'ECharts 6 多个可视化看板：项目仪表板、执行趋势、性能指标（响应时间/QPS/成功率）',
        'AI 批量生成测试用例：上传接口 JSON → AI 生成用例 + Python 验证脚本 → 审核入库',
      ],
      en: [
        'Vue 3 + TypeScript enterprise architecture',
        '12 business modules: project management, plugin registration, interface definition, case design, execution monitoring, AI assistance, and more',
        'WebSocket real-time execution progress via Redis Pub/Sub → millisecond frontend updates',
        'ECharts 6 dashboards: project dashboards, execution trends, performance metrics (response time, QPS, success rate)',
        'AI batch test case generation: upload interface JSON → AI generates cases + Python validation scripts → human review before commit',
      ],
    },
    results: {
      zh: [
        '搭建完成 12 个完整业务模块的 MBSE 测试平台前端',
        'WebSocket 实时执行监控，用户体验流畅',
        'AI 用例生成 + 人工审核工作流落地',
        '插件化架构支持 CATIA 和 OpenModelica 双适配器，可扩展新仿真软件',
      ],
      en: [
        'Delivered MBSE testing platform frontend with 12 complete business modules',
        'WebSocket real-time execution monitoring with smooth UX',
        'AI case generation + human review workflow operational',
        'Plugin architecture supporting CATIA and OpenModelica adapters, extensible to new simulation software',
      ],
    },
    architecture: 'Vue 3 → WebSocket 实时监控 → ECharts 6 看板 → REST API → FastAPI → Celery + RabbitMQ 异步执行 → CATIA / OpenModelica',
    gradient: 'linear-gradient(135deg, #0a1628, #0d2847, #0a1a30)',
  },
  {
    id: 'ai-call',
    name: { zh: 'AI 外呼 App', en: 'AI Outbound Call App' },
    period: '2025 - 至今',
    techStack: ['uni-app', 'Vue 3', 'Pinia', 'SSE', 'WebSocket', '微信支付', '支付宝支付'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['iOS App Store', '华为应用市场', '小米应用商店', '应用宝'],
    summary: {
      zh: 'AI 机器人自动外呼 App——用户创建任务后，AI 自动拨打电话、实时对话、逐字展示对话内容，如同看着 AI 和客户聊天。打通微信支付、支付宝、企业钱包三条支付通道，任务结束自动扣费。已通过 iOS App Store 严格审核，双端上架。',
      en: 'AI-powered auto dialer app — users create tasks, AI dials automatically, displays real-time conversation word-by-word like watching AI chat with customers. Three payment channels (WeChat Pay, Alipay, enterprise wallet) with automatic post-task billing. Passed App Store review, published on both iOS and Android.',
    },
    challenge: {
      zh: '核心在于实时体验——AI 和客户的对话必须像打字机一样逐字呈现在屏幕上，任何卡顿都会直接破坏体验。两类长连接共存于同一应用：WebSocket 负责消息推送（任务完成/余额不足/告警），SSE 负责 AI 对话流式传输，两套连接需同时保持稳定、互不干扰。三条支付通道（微信支付、支付宝、企业钱包）SDK 差异悬殊——签名方式、回调机制、错误码各不相同，需要统一支付流程。最具挑战的是 iOS 上架——App Store 审核严格，隐私政策、权限说明、证书签名，任一环节出错都会被驳回。',
      en: 'The core is real-time experience — AI conversations must render word-by-word like a typewriter; any lag immediately breaks the experience. Two persistent connections coexist in one app: WebSocket for push notifications (task complete, low balance, alerts) and SSE for AI conversation streaming, both must stay stable without interfering with each other. Three payment channels (WeChat Pay, Alipay, enterprise wallet) have vastly different SDKs — signatures, callbacks, and error codes all differ, requiring a unified payment flow. The most demanding part was iOS App Store submission — strict review covering privacy policy, permission descriptions, and certificate signing, where any misstep leads to rejection.',
    },
    approach: {
      zh: 'uni-app 跨平台架构，一套核心代码同时产出 iOS + 安卓，业务逻辑高度复用。SSE 流式请求实现 AI 对话实时逐字渲染，WebSocket 独立通道处理消息推送，两协议各司其职。Pinia 全局状态管理 + 统一支付中间层，屏蔽微信/支付宝/钱包三种 SDK 差异，上层业务只需调用统一的 pay() 接口。完整的 iOS 上架流程——证书签名、隐私协议撰写、App Store 审核材料准备、被驳回后快速定位问题并重新提交。',
      en: 'uni-app cross-platform architecture, single codebase producing iOS + Android with high business logic reuse. SSE streaming for real-time AI conversation rendering, WebSocket dedicated channel for push notifications — each protocol with clear responsibilities. Pinia global state management + unified payment middleware abstracting away three SDK differences, upper layers call a single pay() interface. Complete iOS publishing process — certificate signing, privacy policy drafting, App Store review preparation, and rapid issue resolution with resubmission after rejection.',
    },
    keyPoints: {
      zh: [
        'SSE 流式 AI 对话实时逐字渲染，WebSocket 独立消息推送通道',
        '集成微信支付、支付宝支付、企业钱包三种支付渠道，统一支付流程',
        'iOS App Store + 安卓应用市场双端上架全流程',
      ],
      en: [
        'SSE streaming AI conversation with real-time word-by-word rendering, WebSocket dedicated push channel',
        'Three payment channels (WeChat Pay, Alipay, enterprise wallet) behind a unified payment interface',
        'Full iOS App Store + Android market publishing process',
      ],
    },
    results: {
      zh: [
        '完成 iOS + 安卓双端上架，通过 App Store 严格审核',
        'AI 对话流式渲染，用户体验流畅',
        '三渠道支付统一接入，计费扣费自动化',
      ],
      en: [
        'Published on iOS and Android, passed strict App Store review',
        'Smooth AI conversation streaming experience',
        'Unified payment across three channels with automated billing',
      ],
    },
    architecture: 'uni-app → SSE + WebSocket 双通道 → LLM API → 统一支付层 → iOS + Android 双端上架',
    gradient: 'linear-gradient(135deg, #0d1117, #161b22, #0d1b2a)',
  },
  {
    id: 'crm-web',
    name: { zh: 'CRM 呼叫中心后台', en: 'CRM Call Center Dashboard' },
    period: '2025 - 至今',
    techStack: ['Vue 3', 'Vite 7', 'TypeScript', 'Element Plus', 'Pinia', 'UnoCSS', 'SIP.js', 'ECharts', 'AntV G2'],
    type: 'web',
    published: false,
    summary: {
      zh: '支撑 500+ 坐席同时在线的大型呼叫中心后台。最大亮点——浏览器内直接集成 SIP 软电话，无需安装任何软件，打开浏览器即可接打电话。线索中心支持批量搜索、区域筛选、拨打状态全链路追踪，ECharts + AntV G2 双引擎可视化报表，充值续费完整闭环。',
      en: 'Large call center backend supporting 500+ concurrent agents. Key highlight — browser-native SIP softphone, no software install needed, make and receive calls directly in the browser. Lead center with batch search, regional filtering, full call status tracking. ECharts + AntV G2 dual-engine analytics dashboards, complete recharge and billing loop.',
    },
    challenge: {
      zh: '浏览器内运行 SIP 软电话，其功能远不止通话本身。完整的分机注册流程、实时状态监控（空闲/通话中/离线）、回音测试、通话记录同步，还要在浏览器这个沙箱环境里保持长连接稳定。线索数据量庞大——几千行的表格，批量搜索、筛选、编辑操作卡顿是不可接受的。管理层需要看到区域维度的转化漏斗和经营分析，要求多维度、可下钻的数据可视化。',
      en: 'Running a SIP softphone in the browser is far more than "making calls." Complete extension registration, real-time status monitoring (idle, in-call, offline), echo testing, call log sync — all while maintaining stable persistent connections in the browser sandbox. Massive lead datasets — tables with thousands of rows demand smooth batch search, filter, and edit operations. Management needs regional conversion funnels and business analytics with multi-dimensional, drill-down data visualization.',
    },
    approach: {
      zh: 'Vue 3 + TypeScript + Vite 7 技术栈。SIP.js 深度集成——分机注册管理、状态机实时监控、通话生命周期控制、回音测试全流程。线索中心自研高性能表格策略——虚拟滚动 + 批量操作防抖 + 乐观更新 UI，保证大数据量下的流畅交互。ECharts + AntV G2 双图表引擎打造多维度数据分析看板——区域转化、坐席绩效、通话趋势，支持层级下钻。UnoCSS 原子化样式驱动，开发效率与样式一致性兼得。',
      en: 'Vue 3 + TypeScript + Vite 7 stack. Deep SIP.js integration — extension registration management, real-time state machine monitoring, call lifecycle control, echo testing. Custom high-performance table strategy for lead center — virtual scrolling + batch operation debounce + optimistic UI updates, ensuring smooth interaction with large datasets. ECharts + AntV G2 dual-engine analytics dashboards — regional conversion, agent performance, call trends, with hierarchical drill-down. UnoCSS utility-first styling for dev efficiency and design consistency.',
    },
    keyPoints: {
      zh: [
        'SIP.js 浏览器内软电话：分机注册、状态监控（空闲/通话/离线）、回音测试',
        '线索中心：批量搜索、区域筛选、拨打状态编辑、未接通标记，高性能表格支持',
        '区域线索分析报表：ECharts + AntV G2 双引擎多维度数据可视化',
        '充值续费模块：对接支付宝，完整支付/续费/余额管理流程',
      ],
      en: [
        'SIP.js browser softphone: extension registration, status monitoring (idle/in-call/offline), echo testing',
        'Lead center: batch search, regional filtering, call status editing, missed-call marking, high-performance tables',
        'Regional analytics: ECharts + AntV G2 dual-engine multi-dimensional visualization',
        'Recharge & billing: Alipay integration, complete payment/renewal/balance management',
      ],
    },
    results: {
      zh: [
        '支撑 500+ 坐席同时在线，浏览器内 SIP 通话流畅',
        '线索管理 + 数据分析 + 支付充值完整闭环',
        'AI 外呼能力集成，进一步降低坐席工作量',
      ],
      en: [
        '500+ concurrent agents, smooth browser-based SIP calling',
        'Lead management + analytics + payment recharge — complete closed loop',
        'AI outbound call integration further reducing agent workload',
      ],
    },
    architecture: 'Vue 3 + Pinia → SIP.js → ECharts + AntV G2 → Axios API',
    gradient: 'linear-gradient(135deg, #0f0f23, #1a1a3e, #12122a)',
  },
  {
    id: 'oss',
    name: { zh: 'OSS 开源组件安全治理平台', en: 'OSS Security Governance Platform' },
    period: '2025',
    techStack: ['Vue 2', 'Element UI', 'ECharts 5', 'AntV G6', 'Vuex', 'vuex-along', 'Axios'],
    type: 'web',
    published: false,
    summary: {
      zh: '企业级开源组件安全治理平台——让企业从容应对 Log4j 级别的组件漏洞。上传软件制品（支持 jar/war/apk/exe 等几十种二进制格式），自动扫描识别内部所有开源组件，匹配 CVE 漏洞库、检查许可证合规风险，用 AntV G6 力导向图谱将 5 层以上传递依赖关系可视化呈现。双后端网关架构 + 17 个业务模块，从零搭建完成。',
      en: 'Enterprise-grade open source component security governance — never fear another Log4j. Upload software artifacts (supporting dozens of binary formats: jar, war, apk, exe, etc.), auto-scan to identify all embedded open source components, match against CVE database, check license compliance risks. AntV G6 force-directed graph visualizes 5+ layers of transitive dependencies. Dual backend gateway architecture + 17 business modules, built from scratch.',
    },
    challenge: {
      zh: '2021 年 Log4j 重大漏洞让全球数百万企业连夜排查，很多公司花了数周都搞不清"我的系统到底用了 Log4j 没有"。这个平台要解决的根本问题：二进制文件（jar/war/apk/exe 等几十种格式）自动拆解→识别成百上千个开源组件→逐一匹配 CVE 漏洞库→标注许可证法律风险。组件依赖层层嵌套——A 依赖 B、B 依赖 C、C 又依赖 D……5 层以上的传递依赖很常见，仅靠列表难以理清，必须用图谱可视化。后端拆成两个独立服务——SBOM 扫描引擎（OpenSCA）和主业务后端，两套网关、两套错误码，前端要无缝衔接。',
      en: 'The 2021 Log4j vulnerability sent millions of enterprises scrambling — many spent weeks just figuring out "does our system even use Log4j?" This platform solves the fundamental problem: auto-decompose binaries (jar/war/apk/exe and dozens of formats) → identify hundreds of open source components → match each against CVE database → flag license legal risks. Component dependencies are like nesting dolls — A depends on B, B on C, C on D... 5+ layers of transitive dependencies are common, impossible to understand from a flat list, must visualize as a graph. The backend is split into two services — SBOM scanning engine (OpenSCA) and main business backend — two gateways, two error code systems, the frontend must bridge them seamlessly.',
    },
    approach: {
      zh: '从零搭建 Vue 2 + Element UI 企业级后台。设计双后端代理架构——`/oss-saas`（OpenSCA 扫描引擎）+ `/oss`（主业务后端），Axios 拦截器根据 URL 前缀智能路由分发，统一错误码映射（0=成功/401=超时/410001=资源不存在），业务代码零感知。AntV G6 力导向布局实现组件依赖图谱——节点展开/收起、路径高亮追溯、缩放拖拽，5+ 层传递依赖一目了然。ECharts 5 自建安全态势大屏——风险趋势 + 组件/漏洞/许可证 TOP 排名 + 分布饼图，项目级与全局级一键切换。Vuex + vuex-along 全局状态持久化，刷新不丢上下文。',
      en: 'Built Vue 2 + Element UI enterprise backend from scratch. Designed dual backend proxy architecture — `/oss-saas` (OpenSCA scanning engine) + `/oss` (main business backend), Axios interceptors intelligently route by URL prefix with unified error code mapping (0=success, 401=timeout, 410001=resource not found), zero awareness needed in business code. AntV G6 force-directed layout for component dependency graph — node expand/collapse, path highlight tracing, zoom and drag, 5+ layers of transitive dependencies at a glance. ECharts 5 powers the security dashboard — risk trends + component/vulnerability/license TOP rankings + distribution pie charts, toggle between project-level and global views. Vuex + vuex-along for persistent global state across page refreshes.',
    },
    keyPoints: {
      zh: [
        '17 个完整业务模块：项目管理/二进制扫描/SBOM 扫描/组件资产/漏洞管理/许可证合规/黑白名单/阻断策略/安全态势大屏/搜索/账号/系统设置/消息通知/报告/审计日志/帮助引导/SSO 登录',
        '双后端 API 网关：`/oss-saas`（OpenSCA 扫描引擎）+ `/oss`（主业务），Axios 拦截器智能路由分发，统一错误码映射',
        'AntV G6 组件依赖图谱：力导向布局，节点展开/收起、路径高亮追溯、缩放拖拽，支持 5+ 层传递依赖可视化',
        'ECharts 5 安全态势大屏：风险趋势 + 组件/漏洞/许可证 TOP 排名 + 分布饼图，项目级与全局级一键切换',
        'SSO 单点登录 + LDAP + 滑块验证码，完整认证授权链路',
      ],
      en: [
        '17 complete business modules: project management, binary scanning, SBOM scanning, component inventory, vulnerability management, license compliance, allow/block lists, policy enforcement, security dashboard, search, accounts, system settings, notifications, reports, audit logs, onboarding guide, SSO login',
        'Dual backend API gateway: `/oss-saas` (OpenSCA) + `/oss` (business), Axios interceptor-based intelligent routing with unified error code mapping',
        'AntV G6 dependency graph: force-directed layout, expand/collapse nodes, path highlight tracing, zoom/drag, 5+ layer transitive dependency visualization',
        'ECharts 5 security态势大屏: risk trends + component/vulnerability/license TOP + distribution charts, project/global toggle',
        'SSO + LDAP + slider CAPTCHA, complete authentication and authorization chain',
      ],
    },
    results: {
      zh: [
        '从零搭建覆盖 SBOM 全流程的安全治理平台，直接支撑企业开源组件合规管理',
        'AntV G6 图谱可视化 5+ 层传递依赖，安全风险链路一图呈现',
        '双网关架构稳定运行，Axios 智能路由零切换成本',
        '完成代码清理与错误处理统一，代码可维护性显著提升',
      ],
      en: [
        'Built SBOM full-process security governance platform from scratch, directly supporting enterprise open source compliance',
        'AntV G6 visualizes 5+ layer transitive dependencies — see security risk chains like a map',
        'Dual gateway architecture running stably, Axios intelligent routing with zero switching cost',
        'Code cleanup and unified error handling significantly improved maintainability',
      ],
    },
    architecture: 'Vue 2 + Element UI → Vuex + vuex-along 持久化 → Axios 双网关智能路由 → OpenSCA + OSS 双后端 → ECharts 安全大屏 + AntV G6 依赖图谱',
    gradient: 'linear-gradient(135deg, #0a1628, #0d2137, #0a1a2e)',
  },
  {
    id: 'zhihui',
    name: { zh: '智慧守卫门禁系统', en: 'Smart Guard Access Control' },
    period: '2023',
    techStack: ['Vue 2', 'ElementUI', 'Uniapp', 'WebRTC', '海康威视', 'ColorUi'],
    type: 'hybrid',
    published: false,
    summary: {
      zh: '园区智能安防系统，PC 管理后台 + 移动端 App 全覆盖。核心技术突破——WebRTC 网关将海康摄像头 RTSP 流转码推送到浏览器，实现低延迟实时监控。联动人脸识别开门、访客预约审批、告警实时推送，保安在门口拿手机就能巡逻。',
      en: 'Smart campus security system with PC dashboard + mobile app. Core breakthrough — WebRTC gateway transcodes Hikvision camera RTSP streams to browsers for low-latency live monitoring. Integrated with facial recognition door access, visitor appointment approval, and real-time alert push — guards patrol with just a phone.',
    },
    challenge: {
      zh: '海康摄像头输出 RTSP 协议，但浏览器原生不支持 RTSP——直接播放要么安装插件（Chrome 已不支持 NPAPI），要么服务端转码（延迟过高无法正常使用）。WebRTC 是唯一能同时兼顾低延迟和跨平台的技术路线，但将 RTSP 转 WebRTC 的网关搭建本身就是一个技术难题。而且这不只是一个视频播放项目——还要打通人脸识别、门禁控制、告警系统，多硬件多协议要在统一平台里协同工作。',
      en: 'Hikvision cameras output RTSP, but browsers don\'t understand RTSP — direct playback requires plugins (Chrome dropped NPAPI long ago) or server-side transcoding (unusable latency). WebRTC is the only path that balances low latency and cross-platform support, but building an RTSP-to-WebRTC gateway is itself a technical challenge. And this isn\'t just a video streaming project — it also needs to integrate facial recognition, door access control, and alert systems, with multiple hardware types and protocols working together in one platform.',
    },
    approach: {
      zh: '自建 WebRTC 网关将海康摄像头 RTSP 流转码为 WebRTC 推流，浏览器端原生解码播放，延迟控制在毫秒级。Vue 2 + ElementUI 搭建 PC 管理端——实时监控大屏、门禁权限管理、告警日志追溯。Uniapp + ColorUI 开发移动端——保安在门口拿手机就能看监控、遥控开门。人脸识别联动门禁控制，权限分级管理；访客预约完整链路——申请→审批→临时权限→自动过期。',
      en: 'Self-built WebRTC gateway transcoding Hikvision RTSP to WebRTC, browser-side native decode with millisecond-level latency. Vue 2 + ElementUI for PC management — live monitoring dashboard, access control permissions, alert log history. Uniapp + ColorUI for mobile — guards monitor cameras and control doors from their phones. Facial recognition linked to door access with tiered permissions; complete visitor appointment flow — apply → approve → temporary access → auto-expire.',
    },
    keyPoints: {
      zh: [
        'WebRTC 网关对接海康摄像头 RTSP 流，浏览器低延迟实时播放',
        '人脸识别联动门禁控制，权限分级管理',
        '告警日志实时推送 + 历史追溯',
        'PC 管理后台 + 移动端双端覆盖',
      ],
      en: [
        'WebRTC gateway for Hikvision RTSP streams, low-latency browser playback',
        'Facial recognition linked to door access with tiered permission management',
        'Real-time alert push + historical tracing',
        'PC dashboard + mobile app dual coverage',
      ],
    },
    results: {
      zh: [
        '完成从摄像头到浏览器的低延迟视频播放链路',
        'PC + 移动端全场景覆盖，保安手机即可巡逻',
        '门禁安保全流程数字化',
      ],
      en: [
        'Complete low-latency camera-to-browser video pipeline',
        'PC + mobile full-scenario coverage, phone-based guard patrol',
        'End-to-end digital access control and security',
      ],
    },
    architecture: '海康摄像头 → RTSP 流 → WebRTC 网关转码 → 浏览器 + 移动端播放 | Vue 2 PC + Uniapp 移动端',
    gradient: 'linear-gradient(135deg, #0a0f1e, #1a2332, #0f1a2e)',
  },
  {
    id: 'agriculture',
    name: { zh: '威海智慧农业园', en: 'WeiHai Smart Agriculture' },
    period: '2020 - 2021',
    techStack: ['Vue', 'Vue Router', 'Vuex', 'ECharts', 'Three.js', '天地图'],
    type: 'web',
    published: false,
    summary: {
      zh: '威海西洋参种植基地的数字化管理平台，历时 5 期迭代交付。将 Three.js 3D 建模、天地图 GIS、IoT 传感器数据大屏三种完全不同维度的技术融合在同一平台——3D 园区漫游、地块 GIS 边界标注、温湿度/光照/土壤数据实时跳动，一个屏幕掌握整个种植基地。',
      en: 'Digital management platform for WeiHai ginseng plantation, delivered over 5 iterations. Fuses Three.js 3D modeling, Tianditu GIS, and IoT sensor dashboards — three entirely different technical dimensions — into one platform: 3D campus walkthrough, plot boundary annotation on GIS, real-time temperature/humidity/light/soil data, the entire plantation on one screen.',
    },
    challenge: {
      zh: '农业园区动辄数百亩、数十个地块，管理者需要直观看到"哪块地种的什么、长势如何、土壤数据怎么样"——Excel 和平面图无法承载这种空间信息密度。更大的技术挑战是融合三种完全不同维度的技术：Three.js 3D 场景（空间维度）、天地图 GIS（地理坐标维度）、IoT 传感器实时数据（时间序列维度），三者在坐标系、渲染引擎、数据刷新率上完全不同，要在一个大屏上流畅协作。',
      en: 'Agricultural parks span hundreds of acres with dozens of plots — managers need to intuitively see "what\'s planted where, how\'s it growing, what are the soil readings" — Excel and 2D maps can\'t carry this spatial information density. The bigger technical challenge is fusing three completely different technical dimensions: Three.js 3D scenes (spatial), Tianditu GIS (geographic coordinates), and IoT sensor real-time data (time series) — three different coordinate systems, rendering engines, and refresh rates that must collaborate smoothly on one screen.',
    },
    approach: {
      zh: 'Vue 全家桶搭建整体架构。Three.js 加载园区 3D 模型——GLTF 模型优化压缩，高面数模型在浏览器中流畅渲染，支持视角旋转/缩放/地块点选查看详情。Tianditu API 提供 GIS 底图 + 地块边界精确标注，与 3D 场景坐标对齐。ECharts 大屏看板——IoT 传感器（温湿度/光照/土壤墒情）实时数据曲线，支持历史回溯和异常告警阈值。5 期持续迭代交付，从基础建模逐步叠加 GIS、数据大屏、异常告警。',
      en: 'The Vue ecosystem for overall architecture. Three.js loads campus 3D models — optimized GLTF compression, high-poly models rendering smoothly in browser, supporting rotation, zoom, and plot selection for details. Tianditu API provides GIS basemap with precise plot boundary annotation, aligned with 3D scene coordinates. ECharts dashboards — IoT sensors (temp, humidity, light, soil moisture) real-time data curves with historical history and anomaly alert thresholds. 5 iterative deliveries, layering GIS, data dashboards, and anomaly alerts on top of the base model.',
    },
    keyPoints: {
      zh: [
        'Three.js 3D 园区建模：视角旋转缩放、地块点选查看详情',
        '天地图 GIS 集成：地块边界标注、地理信息图层叠加',
        'ECharts 大屏看板：IoT 传感器（温湿度/光照/土壤）实时数据曲线',
      ],
      en: [
        'Three.js 3D campus modeling: rotation, zoom, plot selection for details',
        'Tianditu GIS integration: plot boundary annotation, geographic layer overlay',
        'ECharts dashboards: IoT sensor (temp, humidity, light, soil) real-time curves',
      ],
    },
    results: {
      zh: [
        '5 期迭代完成，覆盖园区 3D 展示 + GIS + 数据大屏',
        'Three.js + 天地图 + ECharts 三技术栈融合',
        '智慧农业方案数字化落地',
      ],
      en: [
        '5 iterations completed, covering 3D display + GIS + data dashboards',
        'Three.js + Tianditu + ECharts triple-stack integration',
        'Smart agriculture solution delivered',
      ],
    },
    architecture: 'Vue 全家桶 → Three.js 3D + 天地图 GIS → ECharts 大屏看板 → IoT 传感器数据',
    gradient: 'linear-gradient(135deg, #0a1a0f, #0d2818, #0a1a12)',
  },
  {
    id: 'health',
    name: { zh: '象艾益家 & 硬件生态', en: 'Health & Hardware Ecosystem' },
    period: '2022 - 2023',
    techStack: ['Uniapp', 'uEcharts', 'Uview', 'BLE', '微信小程序'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['各大安卓应用市场'],
    summary: {
      zh: '健康养生全生态产品矩阵——一个主 App + 多款设备 App + 微信小程序。主 App 集成了 AI 舌诊拍照分析、养生知识内容、积分商城；多款配套硬件 App（艾灸仪、按摩仪等）通过 BLE 蓝牙连接，手机控制设备、同步健康数据、生成趋势图表。自研 BLE 通信中间件适配多协议硬件，全套已上架各大应用市场。',
      en: 'Full health & wellness product ecosystem — one main app + multiple device apps + WeChat Mini Program. Main app features AI tongue diagnosis, wellness content, and a loyalty mall. Multiple companion hardware apps (moxibustion devices, massagers, etc.) connect via BLE Bluetooth for device control, health data sync, and trend charts. Self-built BLE communication middleware adapts to multi-protocol hardware. All published on major app stores.',
    },
    challenge: {
      zh: '这不是一个 App，而是一个 App 矩阵——一个主 App + 多款设备 App + 微信小程序，每个都有独立的品牌包装和上架流程。更难的是硬件适配：艾灸仪、按摩仪、理疗设备来自不同厂商，蓝牙 BLE 协议各不相同——有的用标准 GATT Profile，有的用私有自定义协议，需要封装统一通信中间层适配所有设备。iOS 和安卓的蓝牙实现差异巨大——尤其是安卓碎片化，不同品牌 BLE 行为不一致，兼容性调试极其耗时。三端代码如何共享核心逻辑而不变成复制粘贴地狱？',
      en: 'This is an app matrix — one main app + multiple device apps + WeChat Mini Program, each with independent branding and publishing process. Hardware adaptation is even harder: moxibustion devices, massagers, therapy equipment from different manufacturers with different BLE protocols — some use standard GATT profiles, some use proprietary custom protocols, requiring a unified communication middleware to adapt to all devices. iOS and Android Bluetooth implementations differ massively — especially Android fragmentation where BLE behavior varies by brand, making compatibility debugging extremely time-consuming. The core question is how to share core logic across three platforms without duplicating code.',
    },
    approach: {
      zh: 'Uniapp 统一跨平台架构——一套核心业务逻辑产出 App（iOS/安卓）+ 微信小程序，UI 层按端适配，业务层高度共享。自研 BLE 通信中间件——抽象统一协议接口，上层业务只需调用 connect()/send()/sync()，底层按设备型号自动匹配 GATT Profile 或私有协议，新设备接入只需新增配置文件。uEcharts 绘制健康数据趋势图表——体重/血压/血糖/设备使用频次，支持周/月/年维度切换。主 App 集内容+商城+积分+AI 舌诊，设备 App 专注硬件控制体验。',
      en: 'Uniapp unified cross-platform architecture — single core business logic produces App (iOS/Android) + WeChat Mini Program, UI adapted per platform, business logic highly shared. Self-built BLE communication middleware — abstracting a unified protocol interface, upper layers call connect()/send()/sync(), the layer underneath auto-matches GATT profiles or proprietary protocols by device model, new devices require only a config file. uEcharts renders health trend charts — weight, blood pressure, blood sugar, device usage frequency, with week/month/year dimension switching. Main app bundles content + mall + loyalty + AI tongue diagnosis, device apps focus on hardware control UX.',
    },
    keyPoints: {
      zh: [
        'BLE 蓝牙统一通信中间件，适配多款健康硬件（艾灸仪/按摩仪等）不同协议',
        'Uniapp 一套代码出 App（iOS/安卓）+ 微信小程序，核心逻辑共享',
        'uEcharts 健康数据趋势图表：体重/血压/血糖/设备使用频次',
        '主 App：AI 舌诊拍照分析 + 养生内容与积分体系',
        '设备 App：蓝牙绑定、控制、固件升级、数据同步',
      ],
      en: [
        'BLE unified communication middleware adapting to multiple health hardware (moxibustion, massagers, etc.) with different protocols',
        'Uniapp single codebase → App (iOS/Android) + WeChat Mini Program, shared core logic',
        'uEcharts health trend charts: weight, blood pressure, blood sugar, device usage frequency',
        'Main app: AI tongue diagnosis + wellness content and loyalty system',
        'Device apps: Bluetooth pairing, control, firmware upgrade, data sync',
      ],
    },
    results: {
      zh: [
        '多款硬件 App 成功上架各大安卓市场',
        'BLE 多协议适配，统一通信层屏蔽硬件差异',
        '主 App + 设备 App + 小程序，健康管理生态闭环',
      ],
      en: [
        'Multiple hardware companion apps published on major Android stores',
        'Multi-protocol BLE adaptation, unified communication layer抽象硬件差异',
        'Main app + device apps + Mini Program, complete health management ecosystem',
      ],
    },
    architecture: 'Uniapp → BLE 通信中间件 → 硬件设备 → uEcharts 数据可视化 → 内容+商城+积分 → 多端上架',
    gradient: 'linear-gradient(135deg, #0a0f1a, #1a1f2e, #0f1a2e)',
  },
  {
    id: 'lingzhi',
    name: { zh: '灵支 NFC 运势小程序', en: 'LingZhi NFC Fortune Mini Program' },
    period: '2022 - 2023',
    techStack: ['uni-app', '微信小程序', 'NFC', 'ColorUI', 'uView', 'ali-oss'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['微信小程序'],
    summary: {
      zh: '"硬件 NFC + 小程序 + AI 内容"的创新产品——用户购买实体灵符，手机 NFC 碰一下自动打开小程序、绑定设备序列号。小程序内提供每日黄历、AI 运势生成、灵支问答。NDEF 数据编码 → URL Scheme 跳转 → 微信小程序直达 → 自动绑定，端到端体验链路。',
      en: '"Physical NFC + Mini Program + AI content" innovative product — users buy physical talismans, tap with phone NFC to auto-open the Mini Program and bind the device serial number. The Mini Program provides daily almanac, AI fortune generation, and fortune Q&A. NDEF data encoding → URL Scheme redirect → directly opening the WeChat Mini Program → auto-binding, a complete end-to-end experience chain.',
    },
    challenge: {
      zh: 'NFC 碰触→小程序打开→设备绑定的全链路涉及 6 个环节——灵符标签写入 NDEF 数据 → 用户手机碰触 → 系统 NFC 控制器识别 → 解析 URL Scheme → 唤醒微信 → 进入小程序指定页面 → 解析参数自动绑定设备序列号。中间任何一步出错——NDEF 编码格式不对、手机 NFC 兼容性问题、URL Scheme 被拦截、小程序冷启动延迟——都会导致用户体验断裂。AI 运势生成并非简单调用接口——生成内容需要可读性强（黄历格式规范、运势分类合理），还需考虑措辞符合产品调性。实体产品的售后绑定场景复杂——设备解绑、重新绑定、多设备管理、设备转移都要平稳处理。',
      en: 'The NFC tap → Mini Program open → device binding chain spans 6 steps — write NDEF data to the talisman tag → user phone tap → system NFC controller recognition → URL Scheme parsing → wake WeChat → enter Mini Program target page → parse params and auto-bind device serial number. Any step failing — wrong NDEF encoding, phone NFC compatibility, URL Scheme intercepted, Mini Program cold start delay — breaks the user experience. AI fortune generation is far from a simple API call — output needs readability (standard almanac formatting, well-designed fortune categories) and wording that matches the product tone. Physical product after-sales binding scenarios are complex — unbind, rebind, multi-device management, and device transfer all require careful handling.',
    },
    approach: {
      zh: 'uni-app 开发微信小程序，uView + ColorUI 搭建国风视觉风格。NFC 标签预写入——NDEF 数据编码小程序跳转 URL + 设备唯一序列号 + 签名校验，碰触后自动跳转绑定页，全链路异常兜底（手动输入序列号作为降级方案）。对接后端 AI 接口——运势生成、黄历查询、灵支问答，内容渲染适配小程序 RichText。ali-oss 存储用户头像等静态资源。设备管理完整流程——绑定/解绑/重新绑定/多设备切换/设备信息编辑。',
      en: 'uni-app development for the WeChat Mini Program, uView + ColorUI for the Chinese aesthetic visual style. NFC tag pre-writing — NDEF data encoding the Mini Program redirect URL, unique device serial, and signature verification, auto-redirecting to the binding page on tap, with full-chain error fallback (manual serial input as degradation). Backend AI integration — fortune generation, almanac lookup, fortune Q&A, with content rendering via Mini Program RichText. Ali-oss for user avatars and static asset storage. Complete device management — bind, unbind, rebind, multi-device switching, device info editing.',
    },
    keyPoints: {
      zh: [
        'NFC 灵符标签：NDEF 数据编码写入，碰触自动打开小程序 + 设备绑定',
        'AI 运势生成：黄历查询、今日运势、灵支问答',
      ],
      en: [
        'NFC talisman tags: NDEF data encoding, tap to auto-open the Mini Program with device binding',
        'AI fortune generation: almanac lookup, daily fortune, fortune Q&A',
      ],
    },
    results: {
      zh: [
        'NFC 碰触 → 小程序打开 → 设备绑定，完整链路跑通',
        'AI 运势 + 黄历内容服务上线',
        '微信小程序成功发布',
      ],
      en: [
        'NFC tap → Mini Program open → device binding, complete chain operational',
        'AI fortune +黄历 content service live',
        'WeChat Mini Program successfully published',
      ],
    },
    architecture: 'NFC 灵符标签 → 微信小程序 → API 后端 → AI 运势 + 黄历数据 → ali-oss 存储',
    gradient: 'linear-gradient(135deg, #1a0f1a, #2d1a30, #1a0f24)',
  },
  {
    id: 'insurance',
    name: { zh: '保险 SaaS 管理平台', en: 'Insurance SaaS Platform' },
    period: '2021 - 2022',
    techStack: ['Vue 2', 'Element UI', 'Vuex', 'Axios', 'Vue Router', 'ali-oss', 'tinymce'],
    type: 'web',
    published: false,
    summary: {
      zh: '保险行业企业级 SaaS 管理后台——销售团队统一管理保险产品、项目进度、供应商协作、佣金结算。亮点功能：Office 文档（Word/Excel/PDF）浏览器在线预览——保单、合同、报价单即时预览，无需下载。双云存储（阿里云 OSS + 腾讯云 COS）智能路由，Jest 单元测试覆盖。',
      en: 'Enterprise SaaS management dashboard for insurance — sales teams manage products, project progress, supplier collaboration, and commission settlement in one place. Highlight feature: Office documents (Word, Excel, PDF) in-browser preview — policies, contracts, and quotes viewable instantly without download. Dual cloud storage (Alibaba OSS + Tencent COS) with intelligent routing, Jest unit test coverage.',
    },
    challenge: {
      zh: '保险行业业务复杂度高——产品配置维度多、佣金计算规则千差万别、供应商协作链路长，一个管理后台需要覆盖销售、供应商、产品、项目、佣金、消息、移民保险等多个业务域。Office 文件在线预览是硬需求——保单、合同、报价单都是 docx/xlsx/pdf，业务人员无需经历下载、打开、删除临时文件的繁琐操作，需要直接在浏览器里即时预览。还要同时对接阿里云 OSS 和腾讯云 COS 两套云存储，根据业务场景路由到不同存储桶，文件上传/下载/预览全流程打通。',
      en: 'Insurance industry business complexity is high — many product configuration dimensions, vastly different commission calculation rules, long supplier collaboration chains. One dashboard must cover sales, suppliers, products, projects, commissions, messaging, and immigration insurance. Office document online preview is a hard requirement — policies, contracts, quotes are all docx/xlsx/pdf; business users don\'t want to download → open → read → delete temp files, they need instant in-browser viewing. Also need to simultaneously connect to both Alibaba OSS and Tencent COS cloud storage, routing to different buckets by business scenario and covering the entire file upload, download, and preview flow.',
    },
    approach: {
      zh: 'Vue 2 + Element UI 技术栈。核心业务模块按领域拆分——销售管理（产品/项目/供应商/佣金结算）、消息通知、移民保险等，模块间低耦合、独立迭代。@vue-office 系列实现 docx/xlsx/pdf 浏览器端在线预览——基于 Office Online 协议解析渲染，无需服务端转码。tinymce 富文本编辑器集成，支持内容发布和信息管理。ali-oss SDK + cos-js-sdk 双云存储统一封装——上层暴露统一 upload() 接口，底层根据业务规则智能路由到 OSS 或 COS。Jest 单元测试 + ESLint 代码规范 + 权限控制，企业级质量标准。',
      en: 'Vue 2 + Element UI stack. Core business modules split by domain — sales management (products, projects, suppliers, commission settlement), messaging, immigration insurance, etc., with low coupling and independent iteration. @vue-office series for docx/xlsx/pdf in-browser preview — Office Online protocol-based parsing and rendering, no server-side transcoding needed. tinymce rich text editor for content publishing. ali-oss SDK + cos-js-sdk dual cloud storage unified encapsulation — exposes a single upload() interface on top, routing intelligently to OSS or COS by business rules underneath. Jest unit tests + ESLint standards + permission control, enterprise-grade quality.',
    },
    keyPoints: {
      zh: [
        '@vue-office 系列：docx/xlsx/pdf 浏览器在线预览，无需下载，保单/合同即时预览',
        'tinymce 富文本编辑器集成，支持内容发布和信息管理',
        '双云存储：阿里云 OSS + 腾讯云 COS，路由分发、统一上传管理',
        'Jest 单元测试 + ESLint 规范 + 权限控制，企业级代码质量',
      ],
      en: [
        '@vue-office series: docx/xlsx/pdf in-browser preview, no download needed, policies and contracts viewable instantly',
        'tinymce rich text editor for content publishing and information management',
        'Dual cloud storage: Alibaba OSS + Tencent COS with routed distribution and unified upload management',
        'Jest unit tests + ESLint standards + permission control, enterprise-grade code quality',
      ],
    },
    results: {
      zh: [
        '覆盖保险销售管理全流程数字化',
        'Office 文档在线预览，保单/合同即时预览',
        '双云存储架构，文件管理灵活可靠',
      ],
      en: [
        'End-to-end digital insurance sales management',
        'Office document online preview, policies/contracts/quotes viewable instantly',
        'Dual cloud storage architecture, flexible and reliable file management',
      ],
    },
    architecture: 'Vue 2 + Element UI → Vuex + Vue Router → 双云存储（OSS + COS） → @vue-office 文档预览 → tinymce 编辑器',
    gradient: 'linear-gradient(135deg, #0a1628, #162840, #0a1a30)',
  },
  {
    id: 'atlas-rss',
    group: 'personal',
    name: {
      zh: 'Atlas RSS 知识库',
      en: 'Atlas RSS Knowledge Base',
    },
    period: '',
    techStack: ['Next.js','TypeScript','Supabase','DeepSeek','Embedding','GitHub Actions'],
    type: 'web',
    published: false,
    url: 'https://github.com/lc19990308/rss-store',
    summary: { zh: '将 RSS 订阅内容转化为可检索知识库，包含采集、清洗、筛选、去重、摘要分类、文本切片与检索 API，并保留原始快照。', en: 'Transforms RSS subscriptions into a searchable knowledge base with collection, cleaning, filtering, deduplication, summaries, classification, text chunking and retrieval APIs, retaining original snapshots.' },
    challenge: {
      zh: 'RSS 内容来源分散、质量不一且存在重复，需要整理可检索内容并保留原始文章依据。',
      en: 'RSS sources vary in quality and contain duplicate content. Searchable material needs to be prepared while preserving original article evidence.',
    },
    approach: {
      zh: '串联订阅采集、正文清洗、质量筛选与跨源去重，使用 DeepSeek 生成中文摘要和分类，进行文本切片并提供检索 API，同时保存原始快照支持文章取证。',
      en: 'Connected feed collection, article cleaning, quality filtering and cross-source deduplication, using DeepSeek for Chinese summaries and classification, chunking text for retrieval APIs and retaining original snapshots for article verification.',
    },
    keyPoints: {
      zh: ['RSS 采集、正文清洗、质量筛选与跨源去重','DeepSeek 中文摘要与分类','文本切片与检索 API','原始快照留存，支持文章取证'],
      en: ['RSS collection, article cleaning, quality filtering and cross-source deduplication','DeepSeek Chinese summaries and classification','Text chunking and retrieval APIs','Original snapshots for article verification'],
    },
    results: {
      zh: ['建立从 RSS 订阅到内容整理、切片检索的处理流程','提供可检索内容并保留原始文章快照','项目代码公开于 GitHub'],
      en: ['Built a pipeline from RSS feeds to content preparation, chunking and retrieval','Provided searchable content with original article snapshots','Project source available on GitHub'],
    },
    architecture: { zh: 'RSS 订阅 → 采集清洗 / 筛选去重 → DeepSeek 摘要分类 → 文本切片 → 检索 API；原始快照留存', en: 'RSS feeds → collection / cleaning / filtering / deduplication → DeepSeek summaries and classification → text chunks → retrieval APIs; retained original snapshots' },
    gradient: 'linear-gradient(135deg, #0a1628, #142c47, #0f1f3a)',
  },
  {
    id: 'xiaozhen-3d',
    group: 'personal',
    name: {
      zh: '交互式 3D 小镇',
      en: 'Interactive 3D Town',
    },
    period: '',
    techStack: ['React','TypeScript','Three.js','Vite','Blender MCP'],
    type: 'web',
    published: false,
    url: 'https://lc19990308.github.io/xiaozhen/',
    summary: { zh: '通过 AI 协作开发构建浏览器端 3D 小镇，结合 Three.js 程序化场景与 Blender MCP / GLB 模型资产，提供多视角及环境交互控制。', en: 'A browser-based 3D town built through AI-assisted development, combining procedural Three.js scenes with Blender MCP / GLB assets and interactive camera and environment controls.' },
    challenge: {
      zh: '需要将程序化场景与模型资产组织到浏览器端体验中，并协调多种观察视角和环境变化。',
      en: 'Procedural scenes and model assets needed to be combined in a browser experience with coordinated camera modes and environmental changes.',
    },
    approach: {
      zh: '使用 React、TypeScript 与 Three.js 组织场景交互，通过 AI 协作及 Blender MCP / GLB 资产构建小镇，加入鸟瞰、街景、第一人称、巡游以及昼夜、天气、季节控制。',
      en: 'Used React, TypeScript and Three.js for scene interactions, building the town with AI collaboration and Blender MCP / GLB assets. Added bird’s-eye, street, first-person and tour views, plus day/night, weather and season controls.',
    },
    keyPoints: {
      zh: ['AI 协作开发与 Three.js 程序化场景','Blender MCP / GLB 模型资产结合','鸟瞰、街景、第一人称与巡游视角','昼夜、天气与季节交互控制'],
      en: ['AI-assisted development and procedural Three.js scenes','Blender MCP / GLB model assets','Bird’s-eye, street, first-person and tour views','Interactive day/night, weather and season controls'],
    },
    results: {
      zh: ['完成浏览器端 3D 小镇交互体验','实现多视角与环境控制','提供可在线访问的作品体验'],
      en: ['Built an interactive browser-based 3D town','Implemented camera modes and environment controls','Made the experience available online'],
    },
    architecture: { zh: 'React + TypeScript → Three.js 程序化场景 + Blender MCP / GLB 资产 → 多视角控制 → 昼夜 / 天气 / 季节交互', en: 'React + TypeScript → procedural Three.js scenes + Blender MCP / GLB assets → camera modes → day/night / weather / season interactions' },
    gradient: 'linear-gradient(135deg, #0a1a1e, #163a38, #0f252e)',
  },
  {
    id: 'ai-toolkit',
    group: 'personal',
    name: {
      zh: 'AI 研发工具与工作台定制',
      en: 'AI Development Tools & Custom Workbenches',
    },
    period: '',
    techStack: ['DSH App','DSH Bot','DeepSeek Harness','TTS','Skill','MCP'],
    type: 'ai',
    published: false,
    summary: { zh: '在 DSH App 中开发 AI 阅读插件，结合 AI 与 TTS 提供朗读、标注、关系图和精读问答；自行搭建 DSH Bot 视频工作台，由不同 Bot 分担视频生成与剪辑，并开展研发工具定制。', en: 'Developed an AI reading plugin in DSH App with AI and TTS for narration, annotations, relationship maps and close-reading Q&A. Built a DSH Bot video workbench with different bots handling generation and editing, alongside development tool customization.' },
    challenge: {
      zh: '阅读场景需要将朗读与内容理解结合，视频制作需要组织不同 Bot 的生成和剪辑任务，研发场景则需要接入工具并编排工作流。',
      en: 'Reading workflows need to combine narration with comprehension, video production needs coordinated generation and editing across bots, and development workflows need tool integration and orchestration.',
    },
    approach: {
      zh: '在 DSH App 开发阅读插件，结合 AI 与 TTS 实现书籍朗读、朗读标注、角色关系图、句段精读、内容补充与问答。基于 DSH Bot 搭建视频工作台，分配视频生成与剪辑任务；使用 Claude Code、Codex 辅助研发，开展 Skill 编排、MCP 接入与 DeepSeek Harness 插件开发。',
      en: 'Built a DSH App reading plugin combining AI and TTS for book narration, narration annotations, character relationship maps, sentence and paragraph close reading, supplementary content and Q&A. Created a DSH Bot video workbench assigning generation and editing tasks to different bots. Used Claude Code and Codex for development, with Skill orchestration, MCP integration and DeepSeek Harness plugin development.',
    },
    keyPoints: {
      zh: ['DSH App 阅读插件：AI + TTS 书籍朗读及朗读标注','角色关系图、句段精读、内容补充与问答','DSH Bot 视频工作台：不同 Bot 分担生成与剪辑','Skill 编排、MCP 接入及 DeepSeek Harness 插件开发'],
      en: ['DSH App reading plugin: AI + TTS book narration and narration annotations','Character relationship maps, close reading, supplementary content and Q&A','DSH Bot video workbench: generation and editing assigned to different bots','Skill orchestration, MCP integration and DeepSeek Harness plugin development'],
    },
    results: {
      zh: ['完成 AI 阅读插件的朗读与内容理解功能实践','搭建多 Bot 协作的视频生成与剪辑工作台','积累插件开发、工具接入与工作流编排实践'],
      en: ['Implemented narration and comprehension features in an AI reading plugin','Built a multi-bot workbench for video generation and editing','Developed practical experience in plugins, tool integration and workflow orchestration'],
    },
    architecture: { zh: 'DSH App 阅读插件 → AI + TTS → 朗读标注 / 关系图 / 精读问答；DSH Bot → 视频生成 / 剪辑；Skill + MCP → 研发工具集成', en: 'DSH App reading plugin → AI + TTS → annotations / relationship maps / close-reading Q&A; DSH Bot → video generation / editing; Skill + MCP → development tool integration' },
    gradient: 'linear-gradient(135deg, #151127, #28203f, #17162e)',
  },
]

export const projectTypes = {
  infrastructure: { zh: '现场部署与运维', en: 'Deployment & Operations' },
  mobile: { zh: '移动端 App', en: 'Mobile App' },
  web: { zh: '桌面端 Web', en: 'Desktop Web' },
  hybrid: { zh: 'PC + 移动端', en: 'PC + Mobile' },
  ai: { zh: 'AI 应用', en: 'AI Application' },
}
