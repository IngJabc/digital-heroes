import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="py-4">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Operational clarity, built for growing teams
          </h1>
          <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
            Digital gives your team a single platform to automate workflows, track performance, and
            make faster decisions — so you can focus on the work that matters.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get started
            </Button>
            <Button href="/product" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
