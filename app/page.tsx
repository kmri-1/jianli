import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SkillsSection } from "@/components/home/skills-section"
import { FeaturedWorksSection } from "@/components/home/featured-works-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0d0d14]">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <FeaturedWorksSection />
      <Footer />
    </main>
  )
}
