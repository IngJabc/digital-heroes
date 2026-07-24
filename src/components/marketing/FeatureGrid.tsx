import { Container } from '@/components/ui/Container'

const FEATURES = [
  {
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks and design custom workflows that adapt to how your team works.',
  },
  {
    title: 'Real-Time Analytics',
    description:
      'Track performance metrics across departments with live dashboards and exportable reports.',
  },
  {
    title: 'Team Collaboration',
    description:
      'Centralize communication, assign tasks, and keep everyone aligned with shared workspaces.',
  },
  {
    title: 'Integrations',
    description:
      'Connect the tools you already use — Slack, Jira, Salesforce, and 50+ other platforms.',
  },
  {
    title: 'Security Controls',
    description:
      'Enterprise-grade permissions, audit logs, and SOC 2 compliance built in from day one.',
  },
  {
    title: 'Operational Visibility',
    description:
      'Get a single source of truth for every project, process, and team across your organization.',
  },
] as const

export function FeatureGrid() {
  return (
    <section id="features" aria-labelledby="features-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Everything you need to run smarter
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Powerful tools that scale with your organization — no complexity, no compromise.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mt-2 text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
