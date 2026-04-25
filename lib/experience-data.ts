export type ExperienceItem = {
  period: string
  company: string
  role: string
  prefixLogo?: string
  logo: string
  bullets: string[]
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: "2022.11 — 至今",
    company: "上海申电云数字科技有限公司",
    role: "UI设计师",
    prefixLogo: "/images/company-logos/wechatimg16.png",
    logo: "/images/company-logos/shendianyun-logo.png",
    bullets: [
      "负责公司全线产品 0-1 UI/UX 全流程设计与落地，完成需求评审、视觉输出、交互优化、开发走查与上线复盘，统筹多项目并行及进度管控。",
      "带领UI外包团队完成数据可视化大屏项目，负责需求拆解、任务分工、进度把控、视觉统一与质量验收，保障项目高质量按时交付。",
      "独立搭建后台组件库、设计规范与执行流程，统一视觉语言，沉淀可复用设计资产，配合前端基于组件库搭建技术架构，大幅提升设计与研发协作效率。",
      "对接产品、研发、业务等多部门，负责需求对齐、方案沟通、冲突协调与落地推进，具备成熟的项目统筹、质量把控与设计管理思维。",
    ],
  },
  {
    period: "2021.03 — 2022.09",
    company: "百度（上海）",
    role: "UI/UX设计师",
    logo: "/images/company-logos/baidu-logo.png",
    bullets: [
      "负责百度地产、教育两大业务板块的小程序及数据可视化大屏设计，对接外部客户与内部上下游团队，具备复杂业务场景下的设计策略制定能力。",
      "深度参与业务需求沟通、方案输出、视觉规范落地与上线验收，与开发团队高效协作，熟悉大厂协作流程与高标准交付体系。",
    ],
  },
  {
    period: "2017.05 — 2021.02",
    company: "魔码科技有限公司",
    role: "UI设计师/产品经理",
    logo: "/images/company-logos/moma-logo.png",
    bullets: [
      "负责无人化健身类产品0-1 产品规划、UI/UX 设计与项目落地，主导 C 端用户 APP、教练端 APP 及管理后台的整体设计与迭代，服务多家健身场馆运营。",
      "需求梳理、原型设计、视觉输出、项目排期，协调前端、后端开发团队推进开发、验收与上线，保证项目按时高质量交付。兼顾产品逻辑与体验优化，具备完整的产品 + 设计 + 项目管理能力与跨团队协作经验。",
    ],
  },
]
