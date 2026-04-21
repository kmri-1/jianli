import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0d0d14]">
      <Navigation />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
