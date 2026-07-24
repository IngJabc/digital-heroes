import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default function HomePage() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold text-neutral-900">Home</h1>
        <p className="mt-4 text-lg text-neutral-600">Welcome to Digitel.</p>
      </Container>
    </Section>
  )
}
