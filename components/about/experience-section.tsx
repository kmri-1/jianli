"use client"

const experiences = [
  {
    period: "2022.11 — 至今",
    company: "上海申电云数字科技有限公司",
    role: "UI设计师",
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
    bullets: [
      "负责百度地产、教育两大业务板块的小程序及数据可视化大屏设计，对接外部客户与内部上下游团队，具备复杂业务场景下的设计策略制定能力。",
      "深度参与业务需求沟通、方案输出、视觉规范落地与上线验收，与开发团队高效协作，熟悉大厂协作流程与高标准交付体系。",
    ],
  },
  {
    period: "2017.05 — 2021.02",
    company: "魔码科技有限公司",
    role: "UI设计师/产品经理",
    bullets: [
      "负责无人化健身类产品0-1 产品规划、UI/UX 设计与项目落地，主导 C 端用户 APP、教练端 APP 及管理后台的整体设计与迭代，服务多家健身场馆运营。",
      "需求梳理、原型设计、视觉输出、项目排期，协调前端、后端开发团队推进开发、验收与上线，保证项目按时高质量交付。兼顾产品逻辑与体验优化，具备完整的产品 + 设计 + 项目管理能力与跨团队协作经验。",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-14">工作经历</h2>

        <div className="space-y-12 md:space-y-14">
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.period}
              className="group relative pl-8 md:pl-10 pb-12 md:pb-14 border-l-2 border-[#2a2a3a] last:pb-0 hover:border-[#d946ef]/60 transition-colors duration-300"
            >
              <div
                className={`absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full border-2 border-[#0d0d14] transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#d946ef] to-[#ec4899]"
                    : "bg-[#2a2a3a] group-hover:bg-gradient-to-r group-hover:from-[#d946ef] group-hover:to-[#ec4899]"
                }`}
                aria-hidden
              />

              <header className="space-y-3 mb-5">
                <p className="text-sm md:text-base font-semibold text-[#d946ef] tracking-wide">
                  {exp.period}
                </p>
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 md:gap-x-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                    {exp.company}
                  </h3>
                  <span className="text-sm md:text-base font-medium text-gray-400 shrink-0">
                    {exp.role}
                  </span>
                </div>
              </header>

              <ul className="space-y-3.5 md:space-y-4 text-[15px] md:text-base text-gray-400 leading-relaxed list-none m-0 p-0">
                {exp.bullets.map((item, i) => (
                  <li key={`${exp.period}-${i}`} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#d946ef]/80 to-[#8b5cf6]/80"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
