import { Container } from '@/components/ui/Container'

export function ContactHero() {
  return (
    <section className="py-4">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Let&apos;s talk about your operations
          </h1>
          <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
            Have questions about Digital? Our team is ready to help you improve workflows and gain
            operational clarity.
          </p>
        </div>
      </Container>
    </section>
  )
}
