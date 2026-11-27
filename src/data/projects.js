export const projects = [
  {
    id: 'yingshi',
    name: { zh: 'YS 金融智能投研平台（Web 端）', en: 'YS Financial Intelligence Research Platform (Web)' },
    period: '2025.10 - 至今',
    techStack: ['Vue 3', 'JavaScript', 'Vite', 'Pinia', 'Element Plus', 'ECharts', 'SSE', 'Vitest', 'Playwright', 'CI/CD'],
    type: 'web',
    published: false,
    summary: {
      zh: '面向专业投资者的金融智能投研终端，集成个股基本面、行情走势、成交量与资金流向多维图表，并内嵌 AI 投研交互助手提供实时问答与历史会话追问。前端一期由本人独立开发。',
      en: 'A financial intelligence research terminal for professional investors, combining fundamentals, price charts, volume and capital-flow views with an embedded AI research assistant for streaming Q&A and follow-up questions. The first frontend phase was independently developed.',
    },
    challenge: {
      zh: '一期工程需要从 0 到 1 建立架构与质量门禁；百万级时序行情数据带来首屏加载与拖拽卡顿；AI 问答需要在流式响应、异常重连与历史会话恢复之间保持稳定体验。',
      en: 'Phase one required building the architecture and quality gates from scratch; large time-series market data caused slow first paint and laggy dragging; AI chat needed stable streaming responses, reconnects and session restoration.',
    },
    approach: {
      zh: '独立承担一期前端架构与工程化规范，搭建 GitLab CI 流水线整合 Lint、自动构建与自动化测试；基于 fetch 与 ReadableStream 封装 SSE 分帧解析与增量渲染，设计本地缓存与服务端快照双重会话恢复机制；针对 K 线引入数据窗口抽稀与按需切片加载；用 Vitest + Vue Test Utils 覆盖指标计算、Pinia 状态与公共图表组件，用 Playwright 覆盖「登录 → 搜索选股 → 图表联动 → AI 流式追问」核心链路并纳入 CI 阻塞门禁。',
      en: 'Owned the phase-one architecture and engineering conventions, setting up GitLab CI with lint, builds and automated tests. Built a production SSE parser on fetch and ReadableStream with incremental rendering, plus local and server-side snapshot session recovery. Applied data-window downsampling and on-demand slicing for K-line charts. Used Vitest and Vue Test Utils for indicator utilities, Pinia stores and shared chart components, and Playwright for the core login → search → chart interaction → AI follow-up flow as a blocking CI gate.',
    },
    keyPoints: {
      zh: [
        '一期前端从 0 到 1 独立架构，搭建 GitLab CI 自动化门禁',
        'SSE 分帧解析、Markdown 增量渲染与双重会话快照恢复',
        '数据窗口抽稀 + 按需切片加载，改善海量 K 线渲染与拖拽体验',
        'Vitest / Vue Test Utils 单测 + Playwright 核心链路 E2E，纳入 CI 阻塞门禁',
        '分时、K 线、MACD、成交量与资金流多图十字光标联动',
      ],
      en: [
        'Independently architected phase one and set up GitLab CI quality gates',
        'SSE frame parsing, incremental Markdown rendering and dual session snapshot recovery',
        'Data-window downsampling and on-demand slicing for large K-line rendering and dragging',
        'Vitest / Vue Test Utils unit tests plus Playwright E2E for the core flow as a blocking CI gate',
        'Cross-chart crosshair sync across time-sharing, K-line, MACD, volume and capital flow',
      ],
    },
    results: {
      zh: [
        '完成一期前端架构与自动化质量门禁建设',
        '核心逻辑单测覆盖率达 85%+',
        '缩放拖拽交互稳定维持在 55~60 FPS',
        '核心用户研究链路纳入 E2E 防回归体系',
      ],
      en: [
        'Delivered phase-one frontend architecture and automated quality gates',
        '85%+ unit test coverage on core logic',
        'Zoom and drag interactions hold steadily at 55–60 FPS',
        'Core research flow covered by E2E regression protection',
      ],
    },
    architecture: 'Vue 3 + Pinia 业务页面 → ECharts 多维图表 → SSE 解析器与会话恢复 → 业务 API；GitLab CI 串联 Lint / 单测 / E2E / 多环境部署',
    gradient: 'linear-gradient(135deg, #0c0c1d, #1a1a3e, #16213e)',
  },
  {
    id: 'xingyuan',
    name: { zh: '星源企业级电销 CRM（Web + App 跨端）', en: 'XingYuan Enterprise Telesales CRM (Web + App)' },
    period: '2025.05 - 2026.06',
    techStack: ['Vue 3', 'JavaScript', 'uni-app', 'JsSIP', 'MQTT', 'ECharts', 'Jest', 'Cypress', 'CI/CD'],
    type: 'hybrid',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['华为应用市场', '小米应用商店', '应用宝'],
    summary: {
      zh: '支撑 500+ 在线坐席高频外呼与线索生命周期管理的企业级系统，涵盖公海池流转、动态分配、实时软电话外呼、录音质检回放及支付结算全链路闭环。Web 与 App 由本人核心参与开发。',
      en: 'An enterprise system supporting 500+ concurrent agents for high-frequency outbound calling and lead lifecycle management, covering pool rotation, dynamic assignment, real-time softphone calling, recording playback and payment settlement. Core contributor across Web and App.',
    },
    challenge: {
      zh: 'Web 端需要在浏览器中稳定运行 SIP 软电话，并把呼叫任务 ID 与业务话单准确关联；App 端依赖 MQTT 长连接接收呼叫信令，需对接 Android 原生双卡通道，并在弱网或异常中断下保证话单与录音不丢失。线索状态流转复杂，历史逻辑缺陷拦截也是测试重点。',
      en: 'The Web dashboard needed a stable in-browser SIP softphone with call task IDs linked to business call records. The App relied on MQTT for signaling, an Android native dual-SIM channel, and reliable call-record and recording delivery under weak networks. Complex lead-state transitions made regression protection a priority.',
    },
    approach: {
      zh: '基于 Vue 3 + uni-app 统一双端核心业务模型，实现个人/团队/公司/公海线索的批量流转、动态权重分配与跟进转客。Web 端深度封装 JsSIP 构建软电话呼叫面板，打通呼叫任务 ID 与话单，支持状态监听、静音/保持与录音在线回放；用 Cypress 覆盖线索流转核心 E2E，用 Jest 为状态机与话单转换纯函数编写单测。App 端通过 MQTT 保持呼叫信令长连接，开发 uni-app 扩展插件对接 Android 原生双卡通道，构建「录音异步上传 + 话单状态事务跟踪 + 离线静默重试」机制；用 ECharts 搭建呼叫接通率、外呼量与转化漏斗看板，并接入微信、支付宝支付流程。',
      en: 'Unified the dual-platform business model on Vue 3 and uni-app, covering personal / team / company / public-pool lead rotation, weighted assignment and lead-to-customer conversion. On Web, deep JsSIP integration powers a softphone panel linked to call records by task ID, with status monitoring, mute / hold and recording playback; Cypress covers core lead-flow E2E and Jest covers state-machine and call-record transformation utilities. On App, MQTT keeps signaling connections alive and a uni-app native plugin enables dual-SIM outbound calling, with a recording-upload + call-record transaction + silent offline retry mechanism. ECharts drives connection-rate, outbound-volume and conversion dashboards, alongside WeChat and Alipay payment flows.',
    },
    keyPoints: {
      zh: [
        '线索流转：个人/团队/公司/公海批量流转、动态分配、跟进转客',
        'JsSIP 软电话：呼叫任务 ID 关联话单，状态监听、静音/保持、录音回放',
        'MQTT 信令长连接 + Android 原生双卡选卡外呼插件',
        '录音异步上传 + 话单状态事务跟踪 + 离线静默重试，弱网下 0 丢失',
        'Cypress E2E + Jest 单测拦截 90%+ 历史状态逻辑缺陷',
        'ECharts 多维 BI 看板与微信 / 支付宝支付结算前端流程',
      ],
      en: [
        'Lead rotation: personal / team / company / public pool, batch assignment and lead-to-customer conversion',
        'JsSIP softphone linked to call records by task ID, with status, mute / hold and recording playback',
        'MQTT signaling connection and Android native dual-SIM outbound plugin',
        'Async recording upload + call-record transaction + silent offline retry for zero loss on weak networks',
        'Cypress E2E and Jest unit tests catching 90%+ of historical state-logic defects',
        'ECharts BI dashboards and WeChat / Alipay payment flows',
      ],
    },
    results: {
      zh: [
        '双端线索生命周期闭环与呼叫中心能力落地',
        'CI/CD 打通 Web 自动发布与 Android 测试包编译分发',
        '弱网与异常中断场景下的话单与录音可靠性保障',
        '项目已上架华为、小米、应用宝等应用市场',
      ],
      en: [
        'Delivered end-to-end lead lifecycle and call-center capabilities on both platforms',
        'CI/CD automates Web releases and Android test-build distribution',
        'Reliable call records and recordings under weak networks and interruptions',
        'Published on Huawei, Xiaomi and Tencent app stores',
      ],
    },
    architecture: 'Web：Vue 3 → JsSIP 软电话 → ECharts 看板 → 业务 API；App：uni-app → MQTT 信令 → Android 原生双卡插件 → 话单/录音状态跟踪与静默重试；Cypress / Jest 覆盖核心链路并接入 CI',
    gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  },
  {
    id: 'mooring-check',
    name: { zh: '船舶系泊动力学自动化仿真测试平台', en: 'Ship Mooring Dynamics Automated Simulation Testing Platform' },
    period: '2026.09 - 2026.11',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Naive UI', 'ECharts', 'Python PyAutoGUI', 'CI/CD'],
    type: 'web',
    published: false,
    summary: {
      zh: '面向船舶海上运动与系泊受力仿真软件的验收级测试协同平台，打通 Web 管理端与 Windows 桌面客户端（MAS）仿真环境之间的协同与自动化执行。本人参与前端与 GUI 自动化相关工作。',
      en: 'An acceptance-level testing collaboration platform for ship motion and mooring-force simulation software, connecting a Web management console with the Windows desktop MAS simulation environment. Contributed to frontend and GUI automation work.',
    },
    challenge: {
      zh: '平台需要衔接 Web 任务操作与 Windows MAS 桌面执行环境；大量历史用例缺乏 API 暴露、依赖桌面软件人工操作，回归测试耗时长。',
      en: 'The platform needed to connect Web task operations with the Windows MAS desktop environment. Many legacy cases lacked API exposure and relied on manual desktop operations, making regression slow.',
    },
    approach: {
      zh: '负责项目基线对比、用例矩阵、测试批次规划与多维动力学受力曲线（ECharts）的前端呈现与交互封装；打通 Web 测试平台与 Windows MAS 桌面执行节点的状态通信与日志回传链路；针对缺乏 API 的复杂用例编写 GUI 自动化脚本，覆盖 200 余条中的 180+ 条，并串联接入定时自动化回归任务。',
      en: 'Built frontend views and interactions for baseline comparison, case matrices, batch planning and multi-dimensional force curves with ECharts. Connected Web tasks with Windows MAS execution nodes for status and log feedback. Wrote GUI automation scripts for cases without APIs, covering 180+ of 200+ cases, and wired them into scheduled regression jobs.',
    },
    keyPoints: {
      zh: [
        '项目基线、用例矩阵与测试批次规划前端建设',
        '多维动力学受力曲线（ECharts）呈现与交互封装',
        'Web 平台与 Windows MAS 执行节点状态通信与日志回传',
        'GUI 自动化脚本覆盖 180+ / 200+ 条复杂用例，接入定时回归流水线',
      ],
      en: [
        'Frontend for project baselines, case matrices and test batch planning',
        'Multi-dimensional force curve rendering and interactions with ECharts',
        'Status and log feedback between Web platform and Windows MAS nodes',
        'GUI scripts covering 180+ of 200+ complex cases in scheduled regression',
      ],
    },
    results: {
      zh: [
        'Web 管理端与桌面仿真执行环境形成协同链路',
        '回归测试耗时大幅缩短',
        '复杂桌面软件用例获得自动化覆盖口径',
      ],
      en: [
        'Web console and desktop simulation execution linked into one workflow',
        'Regression cycle time significantly reduced',
        'Automation coverage established for complex desktop-software cases',
      ],
    },
    architecture: 'Vue 3 + TypeScript → ECharts 曲线与用例矩阵 → Web 平台任务 → Windows MAS 执行节点 → 状态/日志回传；PyAutoGUI 脚本补充 GUI 自动化 → 定时回归任务',
    gradient: 'linear-gradient(135deg, #0c1a24, #16303f, #0f2231)',
  },
  {
    id: 'short-video',
    name: { zh: '天涯同行app', en: 'Tianya Tongxing App' },
    period: '2022',
    techStack: ['uni-app', 'Vue', 'WalletConnect', 'web3.js'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['H5', '微信小程序', 'App', 'iOS App Store'],
    summary: { zh: '参与天涯同行app前端开发，完成视频浏览、支付页面对接与 H5、小程序、App 适配。使用 WalletConnect 接入 ETH、USDC、USDT 多钱包支付，项目已上架 App Store。', en: 'Contributed to a short drama video app, integrating video browsing and payment pages across H5, WeChat Mini Program and App. Used WalletConnect for multi-wallet ETH, USDC and USDT payments. The app is published on the App Store.' },
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
    name: { zh: 'MBSE 工业数据接口自动化测试平台', en: 'MBSE Industrial Data Interface Automated Testing Platform' },
    period: '2026.03 - 2026.08',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Element Plus', 'JSON Schema', 'Prompt Engineering', 'Vitest'],
    type: 'web',
    published: false,
    summary: {
      zh: '面向工业复杂仿真软件的数据接口自动化集成校验平台，打通接口定义、Schema 校验、用例生成、测试脚本执行与 AI 辅助生成全流程。本人参与平台整体前端开发。',
      en: 'An automated integration-verification platform for industrial simulation software interfaces, covering interface definition, schema validation, case generation, test-script execution and AI-assisted generation. Contributed to the overall frontend development.',
    },
    challenge: {
      zh: '接口定义与请求/响应 Schema 结构复杂，手工编写测试用例与边界断言成本高；大模型生成结果需要结构化约束与人工审核才能安全入库；异构数据结构的解析容错也是前端稳定性的关键。',
      en: 'Complex interface and schema definitions made hand-written cases and boundary assertions costly. Model output needed structured constraints and human review before entering the system, and tolerant parsing of heterogeneous data was key to frontend stability.',
    },
    approach: {
      zh: '基于接口定义、请求与响应 Schema、必填字段和关联测试需求组装提示词，通过 Few-Shot 与 JSON Schema 强约束引导模型批量生成符合规范的测试用例与边界断言；构建「大模型生成 → 差异高亮对比 → 人工交互式审核/微调 → 自动化入库」的 HITL 工作流；针对接口 Schema 转换引擎与 JSON 校验解析器编写高覆盖率 Vitest 单测；支持 pytest 断言脚本可视化解析与动态高亮预览，联动后端执行容器回显结果与拓扑定位。',
      en: 'Assembled prompts from interface definitions, request / response schemas, required fields and linked test requirements, using few-shot examples and JSON Schema constraints to guide batch generation of compliant cases and boundary assertions. Built a HITL workflow of model generation → highlighted diff → interactive human review and tuning → automated commit. Wrote high-coverage Vitest tests for the schema conversion engine and JSON validators, and added visual parsing and highlighting of pytest assertion scripts with execution feedback from backend containers.',
    },
    keyPoints: {
      zh: [
        '参与平台整体前端开发，覆盖接口定义、用例、脚本与 AI 辅助模块',
        '基于 JSON Schema 强约束与 Few-Shot 的结构化提示词工程',
        '大模型生成 → 差异对比 → 人工审核/微调 → 入库的 HITL 闭环',
        'Vitest 高覆盖单测保障 Schema 转换与 JSON 解析器稳定性',
        'pytest 断言脚本可视化预览与执行结果回显',
      ],
      en: [
        'Contributed to overall frontend across interface definition, cases, scripts and AI-assist modules',
        'Structured prompt engineering with JSON Schema constraints and few-shot examples',
        'HITL loop: model generation → diff → human review / tuning → commit',
        'High-coverage Vitest tests for schema conversion and JSON parsing stability',
        'Visual preview of pytest assertion scripts with execution feedback',
      ],
    },
    results: {
      zh: [
        'AI 辅助生成与人工审核流程落地，降低手写用例成本',
        '用例入库合规率显著提升',
        '复杂 Schema 解析器边界数据解析与容错渲染稳定',
      ],
      en: [
        'AI-assisted generation with human review shipped, reducing manual case authoring cost',
        'Improved compliance rate of committed test cases',
        'Stable parsing and tolerant rendering for edge-case schemas',
      ],
    },
    architecture: 'Vue 3 + TypeScript 业务页面 → Schema 转换与 JSON 校验引擎 → 提示词构造（JSON Schema 约束）→ 模型生成 → 人工审核入库 → 后端执行容器 → pytest 断言结果回显',
    gradient: 'linear-gradient(135deg, #0a1628, #0d2847, #0a1a30)',
  },
  {
    id: 'ai-call',
    name: { zh: '星源Ai', en: 'XingYuan AI' },
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
