import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { AnimatedSection } from '@/components/animated-section'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}

