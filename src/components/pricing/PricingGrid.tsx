import { Container } from '@/components/ui/Container'
import { PricingCard } from '@/components/pricing/PricingCard'

const PLANS = [
  {
    name: 'Starter',
    description: 'For small teams getting started',
    price: '$29',
    period: '/month',
    cta: { label: 'Get started', href: '/contact', variant: 'secondary' as const },
    features: [
      'Up to 5 users',
      'Workflow automation',
      'Basic analytics',
      'Email support',
      '5 integrations',
    ],
  },
  {
    name: 'Business',
    description: 'For growing teams that need more',
    price: '$79',
    period: '/month',
    cta: { label: 'Get started', href: '/contact', variant: 'primary' as const },
    highlighted: true,
    features: [
      'Up to 25 users',
      'Advanced workflows',
      'Real-time analytics',
      'Priority support',
      '25+ integrations',
      'Custom reports',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For organizations with complex needs',
    price: 'Custom',
    period: '',
    cta: { label: 'Contact sales', href: '/contact', variant: 'secondary' as const },
    features: [
      'Unlimited users',
      'Custom workflows',
      'Advanced analytics',
      'Dedicated support',
      'Unlimited integrations',
      'SSO & audit logs',
      'SLA guarantee',
    ],
  },
] as const

export function PricingGrid() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Choose the right plan
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Every plan includes a 14-day free trial. No credit card required.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
