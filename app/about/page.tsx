import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { ExperienceSection } from "@/components/about/experience-section"
import { ToolsSection } from "@/components/about/tools-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d0d14]">
      <Navigation />
      <AboutHero />
      <ExperienceSection />
      <ToolsSection />
      <Footer />
    </main>
  )
}
