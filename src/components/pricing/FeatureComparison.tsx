import { Container } from '@/components/ui/Container'

const COMPARISON = [
  {
    category: 'Core',
    features: [
      { name: 'Users', starter: 'Up to 5', business: 'Up to 25', enterprise: 'Unlimited' },
      { name: 'Workflows', starter: 'Basic', business: 'Advanced', enterprise: 'Custom' },
      { name: 'Analytics', starter: 'Basic', business: 'Real-time', enterprise: 'Advanced' },
      { name: 'Integrations', starter: '5', business: '25+', enterprise: 'Unlimited' },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', starter: true, business: true, enterprise: true },
      { name: 'Priority support', starter: false, business: true, enterprise: true },
      { name: 'Dedicated account manager', starter: false, business: false, enterprise: true },
    ],
  },
  {
    category: 'Security',
    features: [
      { name: 'SSO', starter: false, business: false, enterprise: true },
      { name: 'Audit logs', starter: false, business: false, enterprise: true },
      { name: 'SLA guarantee', starter: false, business: false, enterprise: true },
    ],
  },
] as const

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="text-primary-600" aria-label="Included">
        ✓
      </span>
    ) : (
      <span className="text-neutral-400" aria-label="Not included">
        —
      </span>
    )
  }
  return <span>{value}</span>
}

export function FeatureComparison() {
  return (
    <section id="comparison" aria-labelledby="comparison-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="comparison-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Compare plans
          </h2>
          <p className="mt-4 text-lg text-neutral-600">See which plan is right for your team.</p>
        </div>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-neutral-200">
                <th scope="col" className="py-3 pr-4 text-sm font-semibold text-neutral-900">
                  Feature
                </th>
                <th scope="col" className="px-4 py-3 text-sm font-semibold text-neutral-900">
                  Starter
                </th>
                <th scope="col" className="px-4 py-3 text-sm font-semibold text-neutral-900">
                  Business
                </th>
                <th scope="col" className="px-4 py-3 text-sm font-semibold text-neutral-900">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((group) => (
                <>
                  <tr key={group.category}>
                    <td colSpan={4} className="pt-6 pb-2 text-sm font-semibold text-neutral-900">
                      {group.category}
                    </td>
                  </tr>
                  {group.features.map((feature) => (
                    <tr key={feature.name} className="border-b border-neutral-100">
                      <td className="py-3 pr-4 text-sm text-neutral-600">{feature.name}</td>
                      <td className="px-4 py-3 text-sm">
                        <CellValue value={feature.starter} />
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <CellValue value={feature.business} />
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <CellValue value={feature.enterprise} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
