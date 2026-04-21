"use client"

import Image from "next/image"
import { Download } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1025] via-[#0d0d14] to-[#0d0d14] opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              关于我
            </h1>
            
            <div className="max-w-3xl space-y-10 text-[15px] md:text-base leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight border-b border-[#2a2a3a] pb-3">
                  团队搭建与管理
                </h2>
                <ul className="space-y-3.5 md:space-y-4 text-gray-400 list-none m-0 p-0">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#d946ef] to-[#ec4899]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">人才体系：</strong>
                      独立撰写UI招聘标准，制定设计岗位考核表及评分机制，建立从招聘到绩效的完整人才管理闭环。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#d946ef] to-[#ec4899]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">团队领导：</strong>
                      管理外包设计团队，通过设计规范体系把控质量、推动进度，实现设计交付周期缩短30%。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#d946ef] to-[#ec4899]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">组织影响力：</strong>
                      直接向高管汇报年终总结，推动设计价值被组织认可并获得资源支持。
                    </span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight border-b border-[#2a2a3a] pb-3">
                  设计体系化建设
                </h2>
                <ul className="space-y-3.5 md:space-y-4 text-gray-400 list-none m-0 p-0">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">标准化流程：</strong>
                      独立搭建公司级UI组件库及完整设计规范文档，编制设计执行流程图，建立可复用的设计工作流。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">技术协同：</strong>
                      深度配合前端团队基于组件库搭建技术架构，推动设计与代码组件同源，实现设计开发一体化。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">效率提升：</strong>
                      协同AI设计工具优化工作流程，探索AI在界面生成、素材处理等场景的应用。
                    </span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight border-b border-[#2a2a3a] pb-3">
                  跨职能协作与产品管理
                </h2>
                <ul className="space-y-3.5 md:space-y-4 text-gray-400 list-none m-0 p-0">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#f97316] to-[#eab308]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">产品决策：</strong>
                      兼任产品经理期间，带领前后端团队完成健身房系统从0到1落地，具备技术沟通与项目统筹能力。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#f97316] to-[#eab308]" aria-hidden />
                    <span>
                      <strong className="font-semibold text-gray-200">业务理解：</strong>
                      深耕房地产、教育、智慧城市（地铁数字化）等多个垂直领域，能将业务需求转化为设计策略。
                    </span>
                  </li>
                </ul>
              </section>
            </div>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d946ef] to-[#ec4899] text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#d946ef]/25"
            >
              <Download size={18} />
              下载简历
            </a>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d946ef]/20 to-[#8b5cf6]/20 rounded-3xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2a2a3a]">
                <Image
                  src="/images/about-profile.jpg"
                  alt="步凡 - 设计经理"
                  width={600}
                  height={700}
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
