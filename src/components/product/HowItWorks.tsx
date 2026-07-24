import { Container } from '@/components/ui/Container'

const STEPS = [
  {
    title: 'Connect your workflows',
    description: 'Bring your existing processes together in one centralized platform.',
  },
  {
    title: 'Automate repetitive tasks',
    description: 'Create intelligent workflows that reduce manual work and improve efficiency.',
  },
  {
    title: 'Monitor performance',
    description: 'Use real-time insights to track results and optimize operations.',
  },
] as const

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            How Digitel works
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
