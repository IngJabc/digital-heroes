import { Container } from '@/components/ui/Container'

const CAPABILITIES = [
  {
    title: 'Workflow Automation',
    description: 'Build repeatable processes that reduce manual effort.',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Understand performance with real-time operational insights.',
  },
  {
    title: 'Team Collaboration',
    description: 'Keep teams aligned with shared tools and centralized information.',
  },
  {
    title: 'Integrations',
    description: 'Connect Digital with the platforms your team already uses.',
  },
  {
    title: 'Security Controls',
    description: 'Manage permissions and protect sensitive business data.',
  },
  {
    title: 'Reporting Tools',
    description: 'Create reports that help teams make informed decisions.',
  },
] as const

export function CapabilitiesGrid() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="capabilities-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Powerful capabilities for modern teams
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <div
              key={capability.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{capability.title}</h3>
              <p className="mt-2 text-neutral-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
