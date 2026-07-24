import type { Metadata } from 'next'
import { ProductHero } from '@/components/product/ProductHero'
import { HowItWorks } from '@/components/product/HowItWorks'
import { CapabilitiesGrid } from '@/components/product/CapabilitiesGrid'
import { UseCases } from '@/components/product/UseCases'
import { CTASection } from '@/components/marketing/CTASection'

export const metadata: Metadata = {
  title: 'Digital Product — Automate workflows and improve operations',
  description:
    'Discover how Digital helps teams automate workflows, collaborate better, and gain operational visibility.',
}

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <HowItWorks />
      <CapabilitiesGrid />
      <UseCases />
      <CTASection />
    </>
  )
}
