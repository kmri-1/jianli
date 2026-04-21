"use client"

import { Clapperboard, Brush, Star, Award } from "lucide-react"

const skills = [
  {
    icon: Clapperboard,
    title: "多媒体应用设计师",
    description: "设计 + 技术 + 多媒体内容制作，完整的项目落地能力",
  },
  {
    icon: Brush,
    title: "中级工艺美术工程师",
    description: "具备扎实的美学基础与视觉设计功底，深耕 UI 设计，不断学习提升审美",
  },
  {
    icon: Star,
    title: "百度2022年Q1优秀之星",
    description: "注重效率与质量，工作表现突出，曾获季度优秀个人评定",
  },
  {
    icon: Award,
    title: "百度2021 年度优秀设计师",
    description: "工作成果优异，责任心强，表现出色获得团队与公司肯定",
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">证书及荣誉</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            持续学习提升专业，多次获奖，不断突破自我
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-2xl bg-[#1a1a24] border border-[#2a2a3a] hover:border-[#d946ef]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#d946ef]/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d946ef] to-[#ec4899] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
