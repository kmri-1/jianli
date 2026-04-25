"use client"

export function PortfolioHero() {
  return (
    <section className="relative pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1025] via-[#0d0d14] to-[#0d0d14] opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          作品集
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          仅展示近期0-1独立完成的部分设计项目。每个项目都代表了我对用户体验的理解和对设计细节的追求。
        </p>
      </div>
    </section>
  )
}
