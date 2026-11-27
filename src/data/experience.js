// 工作经历：与简历 docx 对齐的四段经历，按时间倒序展示。
// 字段结构与页面渲染逻辑保持一致，zh/en 双语由页面按需取用。
export const experience = [
  {
    company: { zh: '北京元启汇能科技有限公司', en: 'Beijing YuanQi HuiNeng Tech' },
    role: { zh: '前端开发工程师 / 核心研发', en: 'Frontend Engineer / Core Developer' },
    period: '2024.10 - 至今',
    highlights: {
      zh: [
        '负责金融投研、企业 CRM 及工业级测试协同平台的核心前端架构、测试体系搭建与跨端系统交付',
        '独立承担 YS 投研一期前端从 0 到 1 的架构设计与工程化规范，搭建 GitLab CI 流水线整合 Lint、自动构建与自动化测试',
        '落地 Vitest / Vue Test Utils 组件与单元测试、Playwright 核心链路 E2E，并纳入 CI 构建阻塞门禁',
        '推进团队工程化规范升级：提示词规范、MCP 工具接入与公共业务基建，保障企业级中后台项目高质量交付',
      ],
      en: [
        'Own core frontend architecture, testing systems and cross-platform delivery for financial research, enterprise CRM and industrial test collaboration platforms',
        'Independently built the first phase of the YS research platform from scratch, including architecture and engineering conventions; set up GitLab CI for linting, builds and automated tests',
        'Introduced Vitest / Vue Test Utils unit and component tests plus Playwright E2E for key user flows, wired into CI as blocking gates',
        'Advanced team engineering standards: prompt conventions, MCP tool integration and shared business infrastructure for reliable enterprise delivery',
      ],
    },
  },
  {
    company: { zh: '河南力天大数据有限公司', en: 'Henan LiTian Big Data' },
    role: { zh: '前端开发工程师', en: 'Frontend Engineer' },
    period: '2023.02 - 2024.08',
    highlights: {
      zh: [
        '主导业务系统前端公共组件库设计与规范文档建设，推进前端工程化、组件测试与标准化开发流程',
        '深度参与物联网及大数据可视化大屏、智慧能源调度管理平台的前端性能调优与接口联调',
        '参与电网需求响应与可调节负荷管理平台的后台、可视化与移动端开发，对接视频监控、告警及事件响应流程',
      ],
      en: [
        'Led the design of a shared component library and convention docs, advancing frontend engineering, component testing and standardized workflows',
        'Contributed to performance tuning and API integration for IoT / big-data dashboards and smart energy dispatch platforms',
        'Worked on demand response and flexible-load management consoles, visualizations and mobile features, integrating video monitoring, alerts and event response flows',
      ],
    },
  },
  {
    company: { zh: '河南九嘉信息技术有限公司', en: 'Henan JiuJia IT' },
    role: { zh: '前端开发工程师', en: 'Frontend Engineer' },
    period: '2020.09 - 2023.02',
    highlights: {
      zh: [
        '负责 Web 与移动端项目的核心交付，覆盖智慧农业、智慧农机与健康服务业务',
        '打通低功耗蓝牙（BLE）硬件设备通信协议，实现跨端设备控制、状态监听与数据可视化',
        '使用 ECharts、Three.js 与地图能力实现园区数据可视化和三维展示，完成多款 App 交付',
      ],
      en: [
        'Delivered core Web and mobile projects spanning smart agriculture, smart machinery and health services',
        'Integrated BLE hardware communication protocols for cross-platform device control, state monitoring and data visualization',
        'Built park data visualizations and 3D views with ECharts, Three.js and maps, shipping multiple mobile apps',
      ],
    },
  },
  {
    company: { zh: '河南乐易信息技术有限公司', en: 'Henan LeYi IT' },
    role: { zh: '前端开发工程师', en: 'Frontend Engineer' },
    period: '2019.10 - 2020.09',
    highlights: {
      zh: [
        '负责企业 Web 门户与后台管理系统的基础页面开发、组件复用与前后端数据联调',
        '从零积累业务前端交付经验，形成页面开发、组件沉淀与接口协作的基础工作能力',
      ],
      en: [
        'Built foundational pages for enterprise web portals and admin dashboards, reusing components and integrating frontend with backend APIs',
        'Built a solid foundation in page development, component reuse and API collaboration at the start of a frontend career',
      ],
    },
  },
]
