import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '@/components/site/Hero'
import {
  CtaBand,
  IntroSection,
  ServicesOverview,
  WhySection,
} from '@/components/site/HomeSections'
import { ReadinessExplorer } from '@/components/site/ReadinessExplorer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ServicesOverview />
      <WhySection />
      <ReadinessExplorer />
      <CtaBand />
    </main>
  )
}
