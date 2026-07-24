import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function ProductHero() {
  return (
    <section className="py-4">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            A smarter way to manage your operations
          </h1>
          <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
            Digital gives teams the tools they need to automate workflows, improve collaboration,
            and make better decisions with real-time data.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get started
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              View pricing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
