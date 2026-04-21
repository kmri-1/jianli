"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Users, Briefcase } from "lucide-react"

const stats = [
  {
    icon: Sparkles,
    value: "60+",
    label: "设计项目",
    color: "bg-gradient-to-br from-[#d946ef] to-[#ec4899]",
  },
  {
    icon: Users,
    value: "30%",
    label: "效率提升",
    color: "bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6]",
  },
  {
    icon: Briefcase,
    value: "10年",
    label: "工作经验",
    color: "bg-gradient-to-br from-[#fb923c] to-[#f97316]",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1025] via-[#0d0d14] to-[#0d0d14] opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-[3.75rem] items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                服务用户创造体验
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight title-shimmer">
                携手团队共同成长
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              注重设计价值落地，能以业务目标为导向，优化设计流程、提升团队效率、把控设计质量。擅长从0-1做产品、搭规范、建流程、带团队，具备极强的结果意识、抗压能力与推进能力。
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d946ef] to-[#ec4899] text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#d946ef]/25"
              >
                查看作品集
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2a2a3a] text-white font-medium hover:bg-[#1a1a24] transition-all duration-300"
              >
                联系我
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold bg-gradient-to-r from-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[16.8rem] lg:max-w-[19.2rem]">
              {/* Glow effect */}
              <div className="absolute -inset-[0.6rem] bg-gradient-to-r from-[#d946ef]/20 to-[#8b5cf6]/20 rounded-3xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2a2a3a]">
                <Image
                  src="/images/zhaopian.jpg"
                  alt="步凡 - 设计经理"
                  width={360}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
