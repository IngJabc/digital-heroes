import { Container } from '@/components/ui/Container'

const USE_CASES = [
  {
    title: 'Operations Teams',
    description: 'Streamline processes and improve daily execution.',
  },
  {
    title: 'Engineering Teams',
    description: 'Automate workflows and track technical operations.',
  },
  {
    title: 'Customer Success Teams',
    description: 'Manage customer processes with better visibility.',
  },
] as const

export function UseCases() {
  return (
    <section id="use-cases" aria-labelledby="use-cases-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="use-cases-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Built for teams that need clarity
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{useCase.title}</h3>
              <p className="mt-2 text-neutral-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
