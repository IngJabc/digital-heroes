import { Container } from '@/components/ui/Container'

const QUESTIONS = [
  {
    id: 'faq-who',
    question: 'Who is Digital for?',
    answer:
      'Digital is built for mid-market and enterprise teams that need operational visibility across departments — from engineering to operations to customer success.',
  },
  {
    id: 'faq-implementation',
    question: 'How does implementation work?',
    answer:
      'Most teams are fully onboarded within two weeks. We provide a dedicated implementation specialist, data migration support, and custom workflow setup.',
  },
  {
    id: 'faq-integrations',
    question: 'Does Digital integrate with existing tools?',
    answer:
      'Yes. Digital connects with 50+ platforms including Slack, Jira, Salesforce, HubSpot, and Google Workspace. Custom API integrations are also available on enterprise plans.',
  },
  {
    id: 'faq-trial',
    question: 'Is there a free trial?',
    answer:
      'Yes. Every plan includes a 14-day free trial with full access — no credit card required.',
  },
  {
    id: 'faq-support',
    question: 'What kind of support does Digital offer?',
    answer:
      'All plans include email and chat support. Business and Enterprise plans get priority support with dedicated account managers and SLA-backed response times.',
  },
] as const

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Everything you need to know about getting started.
          </p>
        </div>
        <dl className="mx-auto mt-12 max-w-3xl divide-y divide-neutral-200">
          {QUESTIONS.map((q) => (
            <div key={q.id} className="py-6">
              <dt>
                <h3 className="text-base font-semibold text-neutral-900">{q.question}</h3>
              </dt>
              <dd className="mt-2 text-neutral-600">{q.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
