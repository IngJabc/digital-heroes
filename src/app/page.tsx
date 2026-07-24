import type { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { FeatureGrid } from '@/components/marketing/FeatureGrid'
import { FAQ } from '@/components/marketing/FAQ'
import { CTASection } from '@/components/marketing/CTASection'

export const metadata: Metadata = {
  title: 'Digital — Operational clarity for growing teams',
  description:
    'Digital helps teams automate workflows, improve collaboration, and gain real-time visibility into operations. Start your free trial today.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <FAQ />
      <CTASection />
    </>
  )
}
