"use client"

export function ContactHero() {
  return (
    <section className="relative pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1025] via-[#0d0d14] to-[#0d0d14] opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          联系我
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          我很乐意与你交流设计想法、探讨合作机会或回答任何问题。请随时通过以下方式与我联系。
        </p>
      </div>
    </section>
  )
}
