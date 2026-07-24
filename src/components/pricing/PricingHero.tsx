import { Container } from '@/components/ui/Container'

export function PricingHero() {
  return (
    <section className="py-4">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Simple pricing for every team
          </h1>
          <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
      </Container>
    </section>
  )
}
