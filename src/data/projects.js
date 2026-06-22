export const projects = [
  {
    id: 'xingyuan',
    name: { zh: '星源 CRM 移动端', en: 'XingYuan CRM Mobile' },
    period: '2024',
    techStack: ['uni-app', 'Vue 3', 'Vite', 'MQTT', 'lime-mqtt', 'Android 原生', 'uview-plus', 'ColorUI'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['华为应用市场', '小米应用商店', '应用宝'],
    summary: {
      zh: '电销行业的效率革命——让业务员告别手动拨号，系统通过 MQTT 实时推送任务到手机，Android 无障碍服务自动拨号、自动录音、自动上报，日均处理能力从百通跃升至千通级别。已上架华为、小米、应用宝。',
      en: 'Efficiency revolution for telesales — eliminating manual dialing. MQTT pushes tasks in real-time, Android Accessibility Service auto-dials, records, and reports. Daily throughput jumped from hundreds to thousands of calls. Published on Huawei, Xiaomi, and Tencent app stores.',
    },
    challenge: {
      zh: '电话销售真正的瓶颈不是话术，而是"拨号"这个机械动作——人工拨号、等接通、记结果，重复劳动吞噬了 70% 的有效工作时间。传统 HTTP 轮询方案延迟高、耗电快，几十台设备同时轮询直接压垮服务器。更难的是通话数据可靠性——断网、死机、信号差，任何一步丢失都意味着客户线索的永久丢失。',
      en: 'The real bottleneck in telesales isn\'t the script — it\'s the mechanical act of dialing. Manual dialing, waiting, and logging eat 70% of productive time. HTTP polling causes high latency and battery drain, crushing servers with dozens of concurrent devices. Even harder: call data reliability — network drops, crashes, or poor signal mean permanently lost leads.',
    },
    approach: {
      zh: '自研 MQTT 长连接任务分发架构，替代 HTTP 轮询，任务推送延迟 < 500ms，断线自动重连、心跳保活。深度集成 Android AccessibilityService 实现全自动拨号，绕过系统电话权限限制。自研原生通话状态监听插件——拨号→接通→挂断全生命周期精准捕获，联动录音启停。Provider 离线调度器 + LocalStorage 双保险——断网缓存本地、恢复批量上传，确保通话记录零丢失。',
      en: 'Built MQTT persistent connection architecture replacing HTTP polling — task push latency < 500ms with auto-reconnect and heartbeat. Deep Android AccessibilityService integration for fully automated dialing, bypassing system call permissions. Custom native call state listener plugin captures the full lifecycle (dial → connect → hangup), triggering recording start/stop. Provider offline scheduler + LocalStorage dual safety net — local caching during outages, batch upload on recovery, zero data loss.',
    },
    keyPoints: {
      zh: [
        'MQTT 长连接实时任务分发，延迟 < 500ms，支持断线自动重连和心跳保活',
        'Android 无障碍服务实现自动拨号，日均处理千次通话，全程无人值守',
        '原生通话状态监听插件：拨号 → 接通 → 挂断全状态捕获，联动录音启停',
        'Provider + LocalStorage 离线同步：断网本地缓存，恢复批量上传，零数据丢失',
        '双日志系统（任务日志 + 通话日志），完整记录每次外呼全链路',
      ],
      en: [
        'MQTT persistent connection for real-time task dispatch, < 500ms latency, auto-reconnect and heartbeat',
        'Android Accessibility Service for auto-dialing, 1000+ daily calls, fully unattended',
        'Native call state listener: dial → connect → hangup full lifecycle capture with recording control',
        'Provider + LocalStorage offline sync: local cache during outage, batch upload on recovery, zero data loss',
        'Dual logging system (task log + call log) for complete outbound call traceability',
      ],
    },
    results: {
      zh: [
        '日均稳定处理千次通话，效率相比人工提升 10 倍以上',
        '任务延迟 < 500ms，断网零丢数据',
        '成功上架华为、小米、应用宝等主流应用市场',
      ],
      en: [
        '1000+ stable daily calls, 10x efficiency gain over manual dialing',
        '< 500ms task latency, zero data loss during network outages',
        'Published on Huawei, Xiaomi, and Tencent app stores',
      ],
    },
    architecture: 'MQTT 设备任务 → 本地任务日志 → 无障碍自动拨号 → 通话状态监听 → 录音上传 → Provider 离线同步',
    gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  },
  {
    id: 'yingshi',
    name: { zh: 'YS 投研金融数据平台', en: 'YS Investment Research Platform' },
    period: '2025 - 至今',
    techStack: ['Vue 3', 'Composition API', 'Vite 6', 'Element Plus', 'ECharts 6', 'Pinia', 'SSE', 'Vue Query', 'Figma'],
    type: 'web',
    published: false,
    summary: {
      zh: '金融数据一站式中台——整合 17 个业务领域（股票/期货/外汇/债券/基金/宏观/产业链/AI 对话），对接 185+ API。研究员不再在十几个系统间来回切换，直接在平台里搜索、分析、用 AI 自然语言提问，AI 实时流式回答。390+ 源文件、76,000+ 行代码的企业级前端工程。',
      en: 'All-in-one financial data platform — 17 business domains (stocks, futures, forex, bonds, funds, macro, supply chain, AI chat), 185+ API endpoints. Analysts search, analyze, and query AI in natural language with real-time streaming responses. 390+ source files, 76,000+ lines of code.',
    },
    challenge: {
      zh: '证券公司研究员每天面对十几个离散系统——股票终端、期货行情、外汇看盘、债券数据、基金净值、宏观指标、产业链图谱、公告检索……数据分散、格式各异，大量时间浪费在"切窗口找数据"上。更棘手的是：185+ API 端点没有统一数据层标准，团队多人协作时每个人都在重复造轮子——loading、error、缓存逻辑各写各的，代码膨胀失控，一个文件冲到 3000 行。AI 对话体验不能等——传统的"请求→等 5 秒→出结果"在对话场景下完全不可接受。',
      en: 'Securities analysts juggle a dozen disconnected systems — stock terminals, futures tickers, forex, bonds, fund NAVs, macro indicators, supply chain graphs, announcements... Data scattered across formats, wasting hours on context-switching. Worse: 185+ APIs with no unified data layer meant every team member reinvented loading, error, and caching logic. A single file ballooned to 3,000 lines. AI chat couldn\'t use the old "request → wait 5s → result" pattern — completely unacceptable for conversational UX.',
    },
    approach: {
      zh: '从 Figma 高保真设计稿出发，Vue 3 + Pinia + Element Plus 从零搭建。自研 5 行 CSS Grid 布局系统（Header-Sidebar-Tabs-Main-Footer），17 个模块统一骨架。深入调研 @tanstack/vue-query 源码后封装 5 个通用 hooks——createQueryKey / useRequestQuery / useListQuery / useDetailQuery / useSubmitMutation，统一整个平台的数据缓存、staleTime、重试策略，减少 60% 样板代码。SSE 协议对接 Hermes AI Agent 实现流式逐字输出，延迟 < 200ms，支持 Markdown 实时渲染。将 3000 行单体文件拆解为 16+ 独立模块，CSS / 数据 / 工具函数完全解耦，构建产物体积缩减 30%。',
      en: 'Built from Figma designs with Vue 3 + Pinia + Element Plus. Created a 5-line CSS Grid layout system (Header-Sidebar-Tabs-Main-Footer) for all 17 modules. Deep-dived @tanstack/vue-query source code to build 5 reusable hooks — createQueryKey, useRequestQuery, useListQuery, useDetailQuery, useSubmitMutation — unifying caching, staleTime, and retry strategies, cutting 60% boilerplate. SSE protocol integration with Hermes AI Agent for real-time streaming responses at < 200ms latency with Markdown rendering. Decomposed a 3,000-line monolith into 16+ independent modules, fully decoupling CSS, data, and utilities — 30% smaller build output.',
    },
    keyPoints: {
      zh: [
        'Vue 3 + Pinia + Element Plus 从零搭建，Figma 高保真还原，390+ 源文件、76,000+ 行代码',
        '封装 5 个通用 Vue Query hooks 统一全站数据层，减少 60% 样板代码，新成员接入效率提升 3x',
        '对接 Hermes AI Agent，SSE 流式协议实现 AI 实时问答，延迟 < 200ms，支持 Markdown 渲染',
        '封装 ECharts 6 图表工厂：K 线图/走势图/对比图/饼图/柱状图，统一主题 tooltip legend，按需注册',
        '自研两层骨架屏系统（App 级全局占位 + 页面级独立骨架），自定义 v-skeleton 指令',
        '主导超标文件重构：3000 行单体 → 16+ 独立模块，构建产物体积缩减 30%',
      ],
      en: [
        'Vue 3 + Pinia + Element Plus built from scratch, 390+ source files, 76,000+ lines of code',
        '5 reusable Vue Query hooks unifying data layer, 60% less boilerplate, 3x faster onboarding',
        'Hermes AI Agent via SSE streaming at < 200ms latency with Markdown rendering',
        'ECharts 6 chart factory: candlestick, trend, comparison, pie, bar — unified theme, tooltip, and legend',
        'Two-tier skeleton screen system (app-level + page-level) with custom v-skeleton directive',
        'Led monolith decomposition: 3,000 lines → 16+ modules, 30% smaller build output',
      ],
    },
    results: {
      zh: [
        '覆盖 17 个业务领域，对接 185+ API 端点，日均超千次投研查询',
        '统一数据层后重复代码减少 60%，团队新成员接入效率提升 3 倍',
        'AI 流式问答延迟 < 200ms，体验对标 ChatGPT',
        '构建产物体积缩减 30%，首屏加载明显提速',
      ],
      en: [
        '17 business domains, 185+ APIs, 1000+ daily research queries',
        '60% less duplicate code, 3x faster team onboarding after data layer unification',
        'AI streaming Q&A at < 200ms latency, ChatGPT-level experience',
        '30% smaller build output, noticeably faster first paint',
      ],
    },
    architecture: 'Figma 设计规范 → Vue 3 + Pinia 状态管理 → Vue Query 数据缓存层 → ECharts 6 图表引擎 → SSE 流式 AI Agent',
    gradient: 'linear-gradient(135deg, #0c0c1d, #1a1a3e, #16213e)',
  },
  {
    id: 'mbse',
    name: { zh: 'MBSE 数据接口测试平台', en: 'MBSE Interface Testing Platform' },
    period: '2025',
    techStack: ['Vue 3', 'TypeScript', 'Vite 7', 'Element Plus', 'Pinia', 'Tailwind CSS', 'ECharts 6', 'WebSocket'],
    type: 'web',
    published: false,
    summary: {
      zh: '航空航天 & 汽车工业级仿真测试平台。对接 CATIA（达索系统，飞机/汽车结构仿真）和 OpenModelica（热仿真/控制仿真），将仿真接口测试从人工验证升级为全流程自动化——接口定义→用例生成→自动执行→实时监控→需求追溯→报告导出，接入 AI 批量生成测试用例。240+ 文件、12 个完整业务模块。',
      en: 'Aerospace & automotive industrial-grade simulation testing platform. Integrates with CATIA (Dassault Systèmes, aircraft/vehicle structural simulation) and OpenModelica (thermal/control simulation). Upgrades simulation interface testing from manual verification to full automation — interface definition → case generation → auto-execution → real-time monitoring → requirement traceability → report export, with AI-powered batch test case generation. 240+ files, 12 complete business modules.',
    },
    challenge: {
      zh: '这不是普通的 Web 测试平台——对接的是 CATIA（达索系统，航空/汽车结构仿真）和 OpenModelica（热力学/控制仿真）这类工业级仿真软件，每种软件的接口协议、调用方式完全不同，需要插件化架构灵活适配。执行引擎复杂度高：同时支持同步执行（开发调试）和异步批量执行（Celery + RabbitMQ，生产环境），还需要定时调度 + 分布式锁防止重复执行。AI 批量生成用例不是简单调个 API——上传接口定义 JSON，AI 要一次性生成几十上百条测试用例和对应的 Python 验证脚本，生成后还要走人工审核流程才能入库，整个链路涉及 AI 生成+人工审核+版本管理。',
      en: 'This isn\'t a generic web testing tool — it interfaces with CATIA (Dassault, aerospace/automotive structural simulation) and OpenModelica (thermodynamics/control simulation), industrial-grade software with completely different protocols and invocation methods, requiring a plugin architecture for flexible adaptation. The execution engine is complex: supporting both synchronous execution (dev/debug) and asynchronous batch execution (Celery + RabbitMQ, production), plus scheduled dispatch with distributed locking to prevent duplicates. AI batch generation isn\'t a simple API call — upload interface JSON, AI generates dozens of test cases with Python validation scripts, then goes through human review before入库. The full pipeline spans AI generation → human review → version management.',
    },
    approach: {
      zh: 'Vue 3 + TypeScript + Vite 7 + Element Plus + Tailwind CSS 技术栈，122 个 Vue 组件 + 120 个 TS 模块。WebSocket 对接后端 Redis Pub/Sub，执行结果毫秒级实时推送到前端，进度、日志、结果一站式展示。ECharts 6 自建多项可视化看板——项目仪表板、执行趋势、性能指标（响应时间/QPS/成功率）。完整的需求追溯链路（需求→用例→执行结果→缺陷）前端可视化，支持向上追溯和向下钻取。',
      en: 'Vue 3 + TypeScript + Vite 7 + Element Plus + Tailwind CSS stack, 122 Vue components + 120 TS modules. WebSocket connects to backend Redis Pub/Sub for millisecond-level real-time execution results pushed to the frontend — progress, logs, results in one view. ECharts 6 powers multiple dashboards — project仪表板, execution trends, performance metrics (response time, QPS, success rate). Complete requirement traceability chain (requirement → case → execution result → defect) with forward trace and drill-down.',
    },
    keyPoints: {
      zh: [
        'Vue 3 + TypeScript 企业级架构，122 个 Vue 组件 + 120 个 TS 模块，代码规模 240+ 文件',
        '12 个完整业务模块：项目管理/插件注册/接口定义/需求管理/用例设计/场景计划/执行监控/结果查看/性能分析/报告导出/AI 辅助/系统管理',
        'WebSocket 实时推送执行进度，Redis Pub/Sub → 前端毫秒级状态更新',
        'ECharts 6 多个可视化看板：项目仪表板、执行趋势、性能指标（响应时间/QPS/成功率）',
        'AI 批量生成测试用例：上传接口 JSON → AI 生成用例 + Python 验证脚本 → 审核入库',
        'Tailwind CSS 原子化样式 + Element Plus 组件，统一视觉规范',
      ],
      en: [
        'Vue 3 + TypeScript enterprise architecture, 122 Vue components + 120 TS modules, 240+ files',
        '12 complete business modules: project management, plugin registration, interface definition, requirement management, case design, scenario planning, execution monitoring, result viewing, performance analysis, report export, AI assistance, system administration',
        'WebSocket real-time execution progress via Redis Pub/Sub → millisecond frontend updates',
        'ECharts 6 dashboards: project仪表板, execution trends, performance metrics (response time, QPS, success rate)',
        'AI batch test case generation: upload interface JSON → AI generates cases + Python validation scripts → review入库',
        'Tailwind CSS utility-first styles + Element Plus components, unified design system',
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
      zh: '核心体验在"实时"两个字——AI 和客户的对话必须像打字机一样逐字呈现在屏幕上，任何卡顿都会让用户觉得"机器人卡壳了"。两条协议一个 App：WebSocket 管消息推送（任务完成/余额不足/告警），SSE 管 AI 对话流式传输，两套长连接要在一个 App 里和平共处、互不干扰。三条支付通道（微信支付、支付宝、企业钱包）SDK 差异悬殊——签名方式、回调机制、错误码各不相同，需要统一支付流程。最硬核的挑战是 iOS 上架——App Store 审核之严众所周知，隐私政策、权限说明、证书签名，一步出错直接打回。',
      en: 'The core experience hinges on real-time — AI conversations must render word-by-word like a typewriter; any lag makes users think "the bot froze." Two protocols, one app: WebSocket for push notifications (task complete, low balance, alerts), SSE for AI conversation streaming — two persistent connections that must coexist without interference. Three payment channels (WeChat Pay, Alipay, enterprise wallet) with vastly different SDKs — signatures, callbacks, error codes all differ, requiring a unified payment flow. The hardest challenge: iOS App Store submission — notoriously strict review, privacy policy, permission descriptions, certificate signing — one misstep means rejection.',
    },
    approach: {
      zh: 'uni-app 跨平台架构，一套核心代码同时产出 iOS + 安卓，业务逻辑高度复用。SSE 流式请求实现 AI 对话实时逐字渲染，WebSocket 独立通道处理消息推送，两协议各司其职。Pinia 全局状态管理 + 统一支付中间层，屏蔽微信/支付宝/钱包三种 SDK 差异，上层业务只需调用统一的 pay() 接口。完整的 iOS 上架流程——证书签名、隐私协议撰写、App Store 审核材料准备、被打回后快速定位问题重新提交。',
      en: 'uni-app cross-platform architecture, single codebase producing iOS + Android with high business logic reuse. SSE streaming for real-time AI conversation rendering, WebSocket dedicated channel for push notifications — each protocol with clear responsibilities. Pinia global state management + unified payment middleware abstracting away three SDK differences, upper layers call a single pay() interface. Complete iOS publishing流程 — certificate signing, privacy policy drafting, App Store review preparation, rapid issue diagnosis and resubmission on rejection.',
    },
    keyPoints: {
      zh: [
        'SSE 流式 AI 对话实时逐字渲染，WebSocket 独立消息推送通道',
        '集成微信支付、支付宝支付、企业钱包三种支付渠道，统一支付流程',
        '完整任务管理闭环：创建任务 → AI 自动呼叫 → 实时对话展示 → 结果反馈',
        'iOS App Store + 安卓应用市场双端上架全流程',
      ],
      en: [
        'SSE streaming AI conversation with real-time word-by-word rendering, WebSocket dedicated push channel',
        'Three payment channels (WeChat Pay, Alipay, enterprise wallet) behind a unified payment interface',
        'Complete task management loop: create task → AI auto-dial → real-time conversation display → result feedback',
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
      zh: '支撑 500+ 坐席同时在线的大型呼叫中心后台。最大亮点——浏览器内直接集成 SIP 软电话，无需安装任何软件，打开网页就能打接电话。线索中心支持批量搜索、区域筛选、拨打状态全链路追踪，ECharts + AntV G2 双引擎可视化报表，充值续费完整闭环。',
      en: 'Large call center backend supporting 500+ concurrent agents. Key highlight — browser-native SIP softphone, no software install needed, make and receive calls directly in the browser. Lead center with batch search, regional filtering, full call status tracking. ECharts + AntV G2 dual-engine analytics dashboards, complete recharge and billing loop.',
    },
    challenge: {
      zh: '浏览器内跑 SIP 软电话——远不止"能打电话"这么简单。完整的分机注册流程、实时状态监控（空闲/通话中/离线）、回音测试、通话记录同步，还要在浏览器这个沙箱环境里保持长连接稳定。线索数据量庞大——几千行的表格，批量搜索、筛选、编辑操作卡顿是不可接受的。管理层需要看到区域维度的转化漏斗和经营分析，要求多维度、可下钻的数据可视化。',
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
        '表格列宽自适应、汇总卡片等多项 UX 优化',
      ],
      en: [
        'SIP.js browser softphone: extension registration, status monitoring (idle/in-call/offline), echo testing',
        'Lead center: batch search, regional filtering, call status editing, missed-call marking, high-performance tables',
        'Regional analytics: ECharts + AntV G2 dual-engine multi-dimensional visualization',
        'Recharge & billing: Alipay integration, complete payment/renewal/balance management',
        'Table column auto-width, summary cards, and multiple UX optimizations',
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
      zh: '企业级开源组件安全治理平台——Log4j 级别的漏洞再也不怕。上传软件制品（支持 jar/war/apk/exe 等几十种二进制格式），自动扫描识别内部所有开源组件，匹配 CVE 漏洞库、检查许可证合规风险，用 AntV G6 力导向图谱将 5 层以上传递依赖关系可视化呈现。双后端网关架构 + 17 个业务模块，从零搭建完成。',
      en: 'Enterprise-grade open source component security governance — never fear another Log4j. Upload software artifacts (supporting dozens of binary formats: jar, war, apk, exe, etc.), auto-scan to identify all embedded open source components, match against CVE database, check license compliance risks. AntV G6 force-directed graph visualizes 5+ layers of transitive dependencies. Dual backend gateway architecture + 17 business modules, built from scratch.',
    },
    challenge: {
      zh: '2021 年 Log4j 核弹级漏洞让全球数百万企业连夜排查，很多公司花了数周都搞不清"我的系统到底用了 Log4j 没有"。这个平台要解决的根本问题：二进制文件（jar/war/apk/exe 等几十种格式）自动拆解→识别成百上千个开源组件→逐一匹配 CVE 漏洞库→标注许可证法律风险。组件依赖关系像俄罗斯套娃——A 依赖 B、B 依赖 C、C 又依赖 D……5 层以上的传递依赖很常见，光看列表根本理不清，必须用图谱可视化。后端拆成两个独立服务——SBOM 扫描引擎（OpenSCA）和主业务后端，两套网关、两套错误码，前端要无缝衔接。',
      en: 'The 2021 Log4j vulnerability sent millions of enterprises scrambling — many spent weeks just figuring out "does our system even use Log4j?" This platform solves the fundamental problem: auto-decompose binaries (jar/war/apk/exe and dozens of formats) → identify hundreds of open source components → match each against CVE database → flag license legal risks. Component dependencies are like nesting dolls — A depends on B, B on C, C on D... 5+ layers of transitive dependencies are common, impossible to understand from a flat list, must visualize as a graph. The backend is split into two services — SBOM scanning engine (OpenSCA) and main business backend — two gateways, two error code systems, the frontend must bridge them seamlessly.',
    },
    approach: {
      zh: '从零搭建 Vue 2 + Element UI 企业级后台。设计双后端代理架构——`/oss-saas`（OpenSCA 扫描引擎）+ `/oss`（主业务后端），Axios 拦截器根据 URL 前缀智能路由分发，统一错误码映射（0=成功/401=超时/410001=资源不存在），业务代码零感知。AntV G6 力导向布局实现组件依赖图谱——节点展开/收起、路径高亮追溯、缩放拖拽，5+ 层传递依赖一目了然。ECharts 5 自建安全态势大屏——风险趋势 + 组件/漏洞/许可证 TOP 排名 + 分布饼图，项目级与全局级一键切换。Vuex + vuex-along 全局状态持久化，刷新不丢上下文。',
      en: 'Built Vue 2 + Element UI enterprise backend from scratch. Designed dual backend proxy architecture — `/oss-saas` (OpenSCA scanning engine) + `/oss` (main business backend), Axios interceptors intelligently route by URL prefix with unified error code mapping (0=success, 401=timeout, 410001=resource not found), zero awareness needed in business code. AntV G6 force-directed layout for component dependency graph — node expand/collapse, path highlight tracing, zoom and drag, 5+ layers of transitive dependencies at a glance. ECharts 5 powers the security态势大屏 — risk trends + component/vulnerability/license TOP rankings + distribution pie charts, toggle between project-level and global views. Vuex + vuex-along for persistent global state across page refreshes.',
    },
    keyPoints: {
      zh: [
        '17 个完整业务模块：项目管理/二进制扫描/SBOM 扫描/组件资产/漏洞管理/许可证合规/黑白名单/阻断策略/安全态势大屏/搜索/账号/系统设置/消息通知/报告/审计日志/帮助引导/SSO 登录',
        '双后端 API 网关：`/oss-saas`（OpenSCA 扫描引擎）+ `/oss`（主业务），Axios 拦截器智能路由分发，统一错误码映射',
        'AntV G6 组件依赖图谱：力导向布局，节点展开/收起、路径高亮追溯、缩放拖拽，支持 5+ 层传递依赖可视化',
        'ECharts 5 安全态势大屏：风险趋势 + 组件/漏洞/许可证 TOP 排名 + 分布饼图，项目级与全局级一键切换',
        'SSO 单点登录 + LDAP + 滑块验证码，完整认证授权链路',
        'Cyber Teal 深青科技主题定制；代码重构清理冗余、统一错误处理',
      ],
      en: [
        '17 complete business modules: project management, binary scanning, SBOM scanning, component inventory, vulnerability management, license compliance, allow/block lists, policy enforcement, security态势大屏, search, accounts, system settings, notifications, reports, audit logs, onboarding guide, SSO login',
        'Dual backend API gateway: `/oss-saas` (OpenSCA) + `/oss` (business), Axios interceptor智能路由 with unified error code mapping',
        'AntV G6 dependency graph: force-directed layout, expand/collapse nodes, path highlight tracing, zoom/drag, 5+ layer transitive dependency visualization',
        'ECharts 5 security态势大屏: risk trends + component/vulnerability/license TOP + distribution charts, project/global toggle',
        'SSO + LDAP + slider CAPTCHA, complete authentication and authorization chain',
        'Cyber Teal custom theme; code cleanup removing redundancy, unified error handling',
      ],
    },
    results: {
      zh: [
        '从零搭建覆盖 SBOM 全流程的安全治理平台，直接支撑企业开源组件合规管理',
        'AntV G6 图谱可视化 5+ 层传递依赖，像看地图一样看清安全风险链路',
        '双网关架构稳定运行，Axios 智能路由零切换成本',
        '完成代码清理与错误处理统一，代码可维护性显著提升',
      ],
      en: [
        'Built SBOM full-process security governance platform from scratch, directly supporting enterprise open source compliance',
        'AntV G6 visualizes 5+ layer transitive dependencies — see security risk chains like a map',
        'Dual gateway architecture running stably, Axios智能路由 with zero切换成本',
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
      zh: '海康摄像头输出 RTSP 协议，但浏览器不认识 RTSP——直接播放要么装插件（Chrome 早不支持 NPAPI）、要么服务端转码（延迟高到没法看）。WebRTC 是唯一能同时兼顾低延迟和跨平台的技术路线，但将 RTSP 转 WebRTC 的网关搭建本身就是一个技术难题。而且这不只是一个视频播放项目——还要打通人脸识别、门禁控制、告警系统，多硬件多协议要在统一平台里协同工作。',
      en: 'Hikvision cameras output RTSP, but browsers don\'t understand RTSP — direct playback requires plugins (Chrome dropped NPAPI long ago) or server-side transcoding (unusable latency). WebRTC is the only path that balances low latency and cross-platform support, but building an RTSP-to-WebRTC gateway is itself a technical challenge. And this isn\'t just a video streaming project — it also needs to integrate facial recognition, door access control, and alert systems, with multiple hardware types and protocols working together in one platform.',
    },
    approach: {
      zh: '自建 WebRTC 网关将海康摄像头 RTSP 流转码为 WebRTC 推流，浏览器端原生解码播放，延迟控制在毫秒级。Vue 2 + ElementUI 搭建 PC 管理端——实时监控大屏、门禁权限管理、告警日志追溯。Uniapp + ColorUI 开发移动端——保安在门口拿手机就能看监控、遥控开门。人脸识别联动门禁控制，权限分级管理；访客预约完整链路——申请→审批→临时权限→自动过期。',
      en: 'Self-built WebRTC gateway transcoding Hikvision RTSP to WebRTC, browser-side native decode with millisecond-level latency. Vue 2 + ElementUI for PC management — live monitoring大屏, access control permissions, alert log追溯. Uniapp + ColorUI for mobile — guards monitor cameras and control doors from their phones. Facial recognition linked to door access with tiered permissions; visitor appointment完整链路 — apply → approve → temporary access → auto-expire.',
    },
    keyPoints: {
      zh: [
        'WebRTC 网关对接海康摄像头 RTSP 流，浏览器低延迟实时播放',
        '人脸识别联动门禁控制，权限分级管理',
        '告警日志实时推送 + 历史追溯',
        '访客预约管理：申请 → 审批 → 临时权限 → 自动过期',
        'PC 管理后台 + 移动端双端覆盖',
      ],
      en: [
        'WebRTC gateway for Hikvision RTSP streams, low-latency browser playback',
        'Facial recognition linked to door access with tiered permission management',
        'Real-time alert push + historical追溯',
        'Visitor management: apply → approve → temporary access → auto-expire',
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
      en: 'Digital management platform for WeiHai ginseng plantation, delivered over 5 iterations. Fuses Three.js 3D modeling,天地图 GIS, and IoT sensor dashboards — three entirely different technical dimensions — into one platform: 3D campus漫游, plot GIS boundary标注, real-time temperature/humidity/light/soil data, the entire plantation on one screen.',
    },
    challenge: {
      zh: '农业园区动辄数百亩、数十个地块，管理者需要直观看到"哪块地种的什么、长势如何、土壤数据怎么样"——Excel 和平面图完全承载不了这种空间信息密度。更大的技术挑战是融合三种完全不同维度的技术：Three.js 3D 场景（空间维度）、天地图 GIS（地理坐标维度）、IoT 传感器实时数据（时间序列维度），三者在坐标系、渲染引擎、数据刷新率上完全不同，要在一个大屏上流畅协作。',
      en: 'Agricultural parks span hundreds of acres with dozens of plots — managers need to intuitively see "what\'s planted where, how\'s it growing, what are the soil readings" — Excel and 2D maps can\'t carry this spatial information density. The bigger technical challenge is fusing three completely different technical dimensions: Three.js 3D scenes (spatial),天地图 GIS (geographic coordinates), and IoT sensor real-time data (time series) — three different coordinate systems, rendering engines, and refresh rates that must collaborate smoothly on one screen.',
    },
    approach: {
      zh: 'Vue 全家桶搭建整体架构。Three.js 加载园区 3D 模型——GLTF 模型优化压缩，高面数模型在浏览器中流畅渲染，支持视角旋转/缩放/地块点选查看详情。天地图 API 提供 GIS 底图 + 地块边界精确标注，与 3D 场景坐标对齐。ECharts 大屏看板——IoT 传感器（温湿度/光照/土壤墒情）实时数据曲线，支持历史回溯和异常告警阈值。5 期持续迭代交付，从基础建模逐步叠加 GIS、数据大屏、异常告警。',
      en: 'Vue全家桶 for overall architecture. Three.js loads campus 3D models — optimized GLTF compression, high-poly models rendering smoothly in browser, supporting rotation, zoom, and plot selection for details.天地图 API provides GIS basemap + precise plot boundary标注, aligned with 3D scene coordinates. ECharts dashboards — IoT sensors (temp, humidity, light, soil moisture) real-time data curves with historical回溯 and anomaly alert thresholds. 5 iterative deliveries, layering GIS, data大屏, and anomaly alerts on top of the base model.',
    },
    keyPoints: {
      zh: [
        'Three.js 3D 园区建模：视角旋转缩放、地块点选查看详情',
        '天地图 GIS 集成：地块边界标注、地理信息图层叠加',
        'ECharts 大屏看板：IoT 传感器（温湿度/光照/土壤）实时数据曲线',
        '5 期迭代持续交付，从园区建模到大屏监控逐步完善',
      ],
      en: [
        'Three.js 3D campus modeling: rotation, zoom, plot selection for details',
        '天地图 GIS integration: plot boundary标注, geographic layer overlay',
        'ECharts dashboards: IoT sensor (temp, humidity, light, soil) real-time curves',
        '5-iteration continuous delivery, progressively building from modeling to大屏 monitoring',
      ],
    },
    results: {
      zh: [
        '5 期迭代完成，覆盖园区 3D 展示 + GIS + 数据大屏',
        'Three.js + 天地图 + ECharts 三技术栈融合',
        '智慧农业方案数字化落地',
      ],
      en: [
        '5 iterations completed, covering 3D display + GIS + data大屏',
        'Three.js +天地图 + ECharts三栈融合',
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
      en: 'Full health & wellness product ecosystem — one main app + multiple device apps + WeChat Mini Program. Main app features AI tongue diagnosis, wellness content, and loyalty商城. Multiple companion hardware apps (moxibustion devices, massagers, etc.) connect via BLE Bluetooth for device control, health data sync, and trend charts. Self-built BLE communication middleware adapts to multi-protocol hardware. All published on major app stores.',
    },
    challenge: {
      zh: '这不是一个 App，而是一个 App 矩阵——一个主 App + 多款设备 App + 微信小程序，每个都有独立的品牌包装和上架流程。更难的是硬件适配：艾灸仪、按摩仪、理疗设备来自不同厂商，蓝牙 BLE 协议各不相同——有的用标准 GATT Profile，有的用私有自定义协议，需要封装统一通信中间层适配所有设备。iOS 和安卓的蓝牙实现差异巨大——尤其是安卓碎片化，不同品牌 BLE 行为不一致，兼容性调试极其耗时。三端代码如何共享核心逻辑而不变成复制粘贴地狱？',
      en: 'This isn\'t one app — it\'s an app matrix: one main app + multiple device apps + WeChat Mini Program, each with independent branding and publishing流程. Hardware adaptation is even harder: moxibustion devices, massagers, therapy equipment from different manufacturers with different BLE protocols — some use standard GATT profiles, some use proprietary custom protocols, requiring a unified communication middleware to adapt to all devices. iOS and Android Bluetooth implementations differ massively — especially Android fragmentation where BLE behavior varies by brand, making compatibility debugging extremely time-consuming. How to share core logic across three platforms without copy-paste hell?',
    },
    approach: {
      zh: 'Uniapp 统一跨平台架构——一套核心业务逻辑产出 App（iOS/安卓）+ 微信小程序，UI 层按端适配，业务层高度共享。自研 BLE 通信中间件——抽象统一协议接口，上层业务只需调用 connect()/send()/sync()，底层按设备型号自动匹配 GATT Profile 或私有协议，新设备接入只需新增配置文件。uEcharts 绘制健康数据趋势图表——体重/血压/血糖/设备使用频次，支持周/月/年维度切换。主 App 集内容+商城+积分+AI 舌诊，设备 App 专注硬件控制体验。',
      en: 'Uniapp unified cross-platform architecture — single core business logic produces App (iOS/Android) + WeChat Mini Program, UI adapted per platform, business logic highly shared. Self-built BLE communication middleware — abstracting a unified protocol interface, upper layers call connect()/send()/sync(),底层 auto-matches GATT profiles or proprietary protocols by device model, new devices只需要 a config file. uEcharts renders health trend charts — weight, blood pressure, blood sugar, device usage frequency, with week/month/year dimension切换. Main app bundles content +商城 + loyalty + AI tongue diagnosis, device apps focus on hardware control UX.',
    },
    keyPoints: {
      zh: [
        'BLE 蓝牙统一通信中间件，适配多款健康硬件（艾灸仪/按摩仪等）不同协议',
        'Uniapp 一套代码出 App（iOS/安卓）+ 微信小程序，核心逻辑共享',
        'uEcharts 健康数据趋势图表：体重/血压/血糖/设备使用频次',
        '主 App：AI 舌诊拍照分析 + 养生知识内容 + 积分商城',
        '设备 App：蓝牙绑定/控制/固件升级/数据同步，独立品牌包装',
      ],
      en: [
        'BLE unified communication middleware adapting to multiple health hardware (moxibustion, massagers, etc.) with different protocols',
        'Uniapp single codebase → App (iOS/Android) + WeChat Mini Program, shared core logic',
        'uEcharts health trend charts: weight, blood pressure, blood sugar, device usage frequency',
        'Main app: AI tongue diagnosis + wellness content + loyalty商城',
        'Device apps: Bluetooth pairing, control, firmware upgrade, data sync, independent branding',
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
    id: 'short-video',
    name: { zh: '短剧短视频 App', en: 'Short Drama Video App' },
    period: '2022',
    techStack: ['uni-app', 'Vue', 'WalletConnect', 'Web3', 'web3.js', 'crypto-js', 'uni-pay'],
    type: 'mobile',
    published: true,
    badge: { zh: '已上架', en: 'Published' },
    platforms: ['微信小程序', 'H5', 'App'],
    summary: {
      zh: '抖音式短视频短剧平台，上下滑动切换、双击点赞、评论分享，体验流畅。最大亮点是国内外支付双通道——集成 WalletConnect + web3.js 实现 USDT/ETH 等加密货币链上支付，同时对接微信/支付宝/第三方支付渠道，同一支付弹窗内无缝切换。H5 + 微信小程序 + App 三端发布。',
      en: 'TikTok-style short drama video platform with smooth swipe navigation, double-tap likes, and comments. Core highlight — dual payment channels: WalletConnect + web3.js for USDT/ETH on-chain crypto payments, alongside WeChat Pay, Alipay, and third-party channels, seamlessly switcheable in one payment dialog. Published across H5, WeChat Mini Program, and native App.',
    },
    challenge: {
      zh: 'Web3 链上支付和传统支付是两套完全不同的世界——数字货币走链上交易，需要集成 WalletConnect 协议连接用户钱包（MetaMask 等）、构造交易、发送上链、等待区块确认；传统支付走微信/支付宝/第三方渠道。两套体系的签名方式、回调机制、错误处理截然不同，却要在同一支付弹窗里无缝切换，用户体验不能有割裂感。短视频性能是硬指标——小程序端支持 10 万条数据、3 个 item 节点循环复用、首尾自动停止滚动，任何卡顿都是流失。三端适配更头疼——H5、微信小程序、App nvue 各有一套渲染机制，视频播放器的实现也各不相同。',
      en: 'Web3 on-chain payments and traditional payments are two completely different worlds — crypto goes through on-chain transactions requiring WalletConnect protocol to connect user wallets (MetaMask, etc.), construct transactions, submit to chain, wait for block confirmation; traditional payments go through WeChat/Alipay/third-party channels. These two systems differ in signing methods, callback mechanisms, and error handling, yet must switch seamlessly in one payment dialog without breaking UX. Video performance is a hard metric — Mini Program端 supports 100K records, 3-item node recycling, and auto-stop scrolling at boundaries; any lag means user churn. Three-platform adaptation is even trickier — H5, Mini Program, and App nvue each have different rendering engines, and video player implementations vary per platform.',
    },
    approach: {
      zh: 'uni-app 跨平台开发，一套核心代码覆盖 H5 + 微信小程序 + App 三端。自研统一支付中间层——上层露出统一 pay(amount, method) 接口，底层自动路由：传统支付走 uni-pay（微信/支付宝），Web3 走 WalletConnect + web3.js（USDT/ETH/BSC/Polygon/BASE 多链多代币），第三方渠道并行接入。高性能短视频滑动组件——3 个 item 节点循环复用渲染，自动定位预览播放，自定义进度条，首尾边界自动停止滚动。',
      en: 'uni-app cross-platform, single codebase covering H5 + WeChat Mini Program + App. Self-built unified payment middleware — exposes a single pay(amount, method) interface on top,底层 auto-routes: traditional payments via uni-pay (WeChat/Alipay), Web3 via WalletConnect + web3.js (USDT/ETH/BSC/Polygon/BASE multi-chain, multi-token), third-party channels in parallel. High-performance video swipe component — 3-item node recycling render, auto-positioned preview playback, custom progress bar, boundary auto-stop scrolling.',
    },
    keyPoints: {
      zh: [
        '钱包连接支付：WalletConnect + web3.js 集成 MetaMask 等钱包，支持 USDT/ETH 等多种代币',
        '多链支持：BSC、Polygon、BASE 等多条区块链，用户可按需切换网络和代币',
        '统一支付中间层：传统支付（微信/支付宝）+ Web3 链上支付 + 第三方渠道，一个弹窗切换',
        '高性能短视频滑动：3 item 节点循环复用，小程序端支持 10 万条数据不卡顿',
        '多端覆盖：H5 + 微信小程序 + App（nvue）三端发布',
      ],
      en: [
        'Wallet payments: WalletConnect + web3.js integrating MetaMask and other wallets, supporting USDT/ETH and multiple tokens',
        'Multi-chain support: BSC, Polygon, BASE, and more — users switch networks and tokens on demand',
        'Unified payment middleware: traditional (WeChat/Alipay) + Web3 on-chain + third-party, one dialog切换',
        'High-performance video swipe: 3-item node recycling, 100K records on Mini Program without lag',
        'Multi-platform: H5 + WeChat Mini Program + App (nvue)三端发布',
      ],
    },
    results: {
      zh: [
        '完成 Web3 + 传统支付双通道集成，覆盖国内外支付场景',
        '短视频滑动体验流畅，多端适配发布',
      ],
      en: [
        'Web3 + traditional payment dual-channel integration, covering domestic and international payment scenarios',
        'Smooth video swipe experience, multi-platform publishing',
      ],
    },
    architecture: 'uni-app → WalletConnect + web3.js 链上支付 + uni-pay 传统支付 → 高性能视频滑动组件 → H5 + 小程序 + App',
    gradient: 'linear-gradient(135deg, #1a1028, #2d1a3e, #1a0f2e)',
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
      zh: '"硬件 NFC + 小程序 + AI 内容"的创新产品——用户购买实体灵符，手机 NFC 碰一下自动打开小程序、绑定设备序列号。小程序内提供每日黄历、AI 运势生成、灵支问答。NDEF 数据编码 → URL Scheme 跳转 → 微信小程序直达 → 自动绑定，完整的端到端体验链路。',
      en: '"Physical NFC + Mini Program + AI content" innovative product — users buy physical灵符, tap with phone NFC to auto-open the Mini Program and bind the device serial number. The Mini Program provides daily黄历, AI fortune generation, and灵支 Q&A. NDEF data encoding → URL Scheme redirect → WeChat Mini Program直达 → auto-binding, a complete end-to-end experience chain.',
    },
    challenge: {
      zh: 'NFC 碰触→小程序打开→设备绑定的全链路涉及 6 个环节——灵符标签写入 NDEF 数据 → 用户手机碰触 → 系统 NFC 控制器识别 → 解析 URL Scheme → 唤醒微信 → 进入小程序指定页面 → 解析参数自动绑定设备序列号。中间任何一步出错——NDEF 编码格式不对、手机 NFC 兼容性问题、URL Scheme 被拦截、小程序冷启动延迟——都会导致用户体验断裂。AI 运势不是随便调个接口——生成内容需要可读性强（黄历格式规范、运势分类合理），还要考虑措辞的玄学调性。实体产品的售后绑定场景复杂——设备解绑、重新绑定、多设备管理、设备转移都要平稳处理。',
      en: 'The NFC tap → Mini Program open → device binding chain spans 6 steps — write NDEF data to灵符 tag → user phone tap → system NFC controller recognition → URL Scheme parsing → wake WeChat → enter Mini Program target page → parse params and auto-bind device serial number. Any step failing — wrong NDEF encoding, phone NFC compatibility, URL Scheme intercepted, Mini Program cold start delay — breaks the user experience. AI fortune generation isn\'t just calling an API — output needs readability (黄历 format standards, fortune category logic) and appropriate玄学 tone. Physical product after-sales binding scenarios are complex — unbind, rebind, multi-device management, device transfer all need smooth handling.',
    },
    approach: {
      zh: 'uni-app 开发微信小程序，uView + ColorUI 搭建国风视觉风格。NFC 标签预写入——NDEF 数据编码小程序跳转 URL + 设备唯一序列号 + 签名校验，碰触后自动跳转绑定页，全链路异常兜底（手动输入序列号作为降级方案）。对接后端 AI 接口——运势生成、黄历查询、灵支问答，内容渲染适配小程序 RichText。ali-oss 存储用户头像等静态资源。设备管理完整流程——绑定/解绑/重新绑定/多设备切换/设备信息编辑。',
      en: 'uni-app开发 WeChat Mini Program, uView + ColorUI for Chinese aesthetic visual style. NFC tag pre-writing — NDEF data encoding Mini Program redirect URL + unique device serial + signature verification, auto-redirect to binding page on tap, with full-chain error fallback (manual serial input as degradation). Backend AI integration — fortune generation,黄历 lookup,灵支 Q&A, content rendering via Mini Program RichText. ali-oss for user avatar and static asset storage. Complete device management — bind, unbind, rebind, multi-device switching, device info editing.',
    },
    keyPoints: {
      zh: [
        'NFC 灵符标签：NDEF 数据编码写入，碰触自动打开小程序 + 设备绑定',
        'AI 运势生成：黄历查询、今日运势、灵支问答',
        '设备管理：绑定/解绑/多设备/信息编辑',
        'uView + ColorUI 视觉风格，符合玄学/国风调性',
      ],
      en: [
        'NFC灵符 tags: NDEF data encoding, tap to auto-open Mini Program + device binding',
        'AI fortune generation:黄历 lookup, daily fortune,灵支 Q&A',
        'Device management: bind, unbind, multi-device, info editing',
        'uView + ColorUI visual style matching玄学/Chinese aesthetic',
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
      zh: '保险行业企业级 SaaS 管理后台——销售团队统一管理保险产品、项目进度、供应商协作、佣金结算。亮点功能：Office 文档（Word/Excel/PDF）浏览器在线预览——保单、合同、报价单即点即看，无需下载。双云存储（阿里云 OSS + 腾讯云 COS）智能路由，Jest 单元测试覆盖，企业级代码质量。',
      en: 'Enterprise SaaS management dashboard for insurance — sales teams manage products, project progress, supplier collaboration, and commission settlement in one place. Highlight feature: Office documents (Word, Excel, PDF) in-browser preview — policies, contracts, quotes, view instantly without download. Dual cloud storage (Alibaba OSS + Tencent COS) with智能路由, Jest unit test coverage, enterprise-grade code quality.',
    },
    challenge: {
      zh: '保险行业业务复杂度高——产品配置维度多、佣金计算规则千差万别、供应商协作链路长，一个管理后台需要覆盖销售、供应商、产品、项目、佣金、消息、移民保险等多个业务域。Office 文件在线预览是硬需求——保单、合同、报价单都是 docx/xlsx/pdf，业务人员不想下载→打开→看完删临时文件，需要直接在浏览器里即点即看。还要同时对接阿里云 OSS 和腾讯云 COS 两套云存储，根据业务场景路由到不同存储桶，文件上传/下载/预览全流程打通。',
      en: 'Insurance industry business complexity is high — many product configuration dimensions, vastly different commission calculation rules, long supplier collaboration chains. One dashboard must cover sales, suppliers, products, projects, commissions, messaging, and immigration insurance. Office document online preview is a hard requirement — policies, contracts, quotes are all docx/xlsx/pdf; business users don\'t want to download → open → read → delete temp files, they need instant in-browser viewing. Also need to simultaneously connect to both Alibaba OSS and Tencent COS cloud storage, routing to different buckets by business scenario,打通 file upload/download/preview the entire flow.',
    },
    approach: {
      zh: 'Vue 2 + Element UI 技术栈。核心业务模块按领域拆分——销售管理（产品/项目/供应商/佣金结算）、消息通知、移民保险等，模块间低耦合、独立迭代。@vue-office 系列实现 docx/xlsx/pdf 浏览器端在线预览——基于 Office Online 协议解析渲染，无需服务端转码。tinymce 富文本编辑器集成，支持内容发布和信息管理。ali-oss SDK + cos-js-sdk 双云存储统一封装——上层暴露统一 upload() 接口，底层根据业务规则智能路由到 OSS 或 COS。Jest 单元测试 + ESLint 代码规范 + 权限控制，企业级质量标准。',
      en: 'Vue 2 + Element UI stack. Core business modules split by domain — sales management (products, projects, suppliers, commission settlement), messaging, immigration insurance, etc., with low coupling and independent iteration. @vue-office series for docx/xlsx/pdf in-browser preview — Office Online protocol-based parsing and rendering, no server-side transcoding needed. tinymce rich text editor for content publishing. ali-oss SDK + cos-js-sdk dual cloud storage unified封装 — exposes a single upload() interface on top,底层智能路由s to OSS or COS by business rules. Jest unit tests + ESLint standards + permission control, enterprise-grade quality.',
    },
    keyPoints: {
      zh: [
        '核心业务模块：销售管理（产品/项目/供应商/佣金结算）、消息通知、移民保险',
        '@vue-office 系列：docx/xlsx/pdf 浏览器在线预览，无需下载，保单/合同即点即看',
        'tinymce 富文本编辑器集成，支持内容发布和信息管理',
        '双云存储：阿里云 OSS + 腾讯云 COS，路由分发、统一上传管理',
        'Jest 单元测试 + ESLint 规范 + 权限控制，企业级代码质量',
      ],
      en: [
        'Core business modules: sales management (products, projects, suppliers, commission), messaging, immigration insurance',
        '@vue-office series: docx/xlsx/pdf in-browser preview, no download needed, policies/contracts viewable instantly',
        'tinymce rich text editor for content publishing and information management',
        'Dual cloud storage: Alibaba OSS + Tencent COS,路由分发, unified upload management',
        'Jest unit tests + ESLint standards + permission control, enterprise-grade code quality',
      ],
    },
    results: {
      zh: [
        '覆盖保险销售管理全流程数字化',
        'Office 文档在线预览，保单/合同/报价单即点即看',
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
]

export const projectTypes = {
  mobile: { zh: '移动端 App', en: 'Mobile App' },
  web: { zh: '桌面端 Web', en: 'Desktop Web' },
  hybrid: { zh: 'PC + 移动端', en: 'PC + Mobile' },
}
