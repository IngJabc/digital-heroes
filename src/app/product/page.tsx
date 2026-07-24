import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default function ProductPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold text-neutral-900">Product</h1>
        <p className="mt-4 text-lg text-neutral-600">Our product offerings.</p>
      </Container>
    </Section>
  )
}
