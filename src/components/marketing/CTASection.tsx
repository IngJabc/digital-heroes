import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="py-4">
      <Container>
        <div className="rounded-2xl bg-neutral-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 id="cta-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your operations?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
            Join hundreds of teams using Digital to automate workflows and gain clarity.
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              size="lg"
              variant="secondary"
              className="border-white bg-white text-neutral-900 hover:bg-neutral-100"
            >
              Start your free trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
