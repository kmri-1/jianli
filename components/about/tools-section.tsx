"use client"

const tools = [
  { name: "Sketch", level: 95 },
  { name: "Master Go", level: 90 },
  { name: "Axure", level: 85 },
  { name: "Figma", level: 90 },
  { name: "Photoshop", level: 85 },
  { name: "After Effects", level: 75 },
]

export function ToolsSection() {
  return (
    <section className="py-20 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">设计工具</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{tool.name}</span>
                <span className="text-gray-400 text-sm">{tool.level}%</span>
              </div>
              <div className="h-2 bg-[#1a1a24] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d946ef] to-[#ec4899] rounded-full transition-all duration-1000"
                  style={{ width: `${tool.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
