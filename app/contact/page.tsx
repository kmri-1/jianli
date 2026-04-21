import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d0d14]">
      <Navigation />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  )
}
