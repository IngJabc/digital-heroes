import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default function PricingPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold text-neutral-900">Pricing</h1>
        <p className="mt-4 text-lg text-neutral-600">Simple, transparent pricing.</p>
      </Container>
    </Section>
  )
}
