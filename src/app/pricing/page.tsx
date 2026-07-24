import type { Metadata } from 'next'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingGrid } from '@/components/pricing/PricingGrid'
import { FeatureComparison } from '@/components/pricing/FeatureComparison'
import { CTASection } from '@/components/marketing/CTASection'

export const metadata: Metadata = {
  title: 'Digital Pricing — Simple plans for every team',
  description:
    'Compare Digital pricing plans. Start free with a 14-day trial, scale as your team grows. No hidden fees.',
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <FeatureComparison />
      <CTASection />
    </>
  )
}
