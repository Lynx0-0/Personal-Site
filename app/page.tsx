import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { ProblemsSection } from '@/components/home/ProblemsSection'
import { SolutionsSection } from '@/components/home/SolutionsSection'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
