import { Button } from '@/components/ui/Button'

type PricingCardProps = {
  name: string
  description: string
  price: string
  period: string
  cta: { label: string; href: string; variant: 'primary' | 'secondary' }
  features: readonly string[]
  highlighted?: boolean
}

export function PricingCard({
  name,
  description,
  price,
  period,
  cta,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl bg-white p-6 sm:p-8 ${
        highlighted ? 'border-primary-600 border-2' : 'border border-neutral-200'
      }`}
    >
      {highlighted && (
        <span className="bg-primary-600 mb-4 self-start rounded-full px-3 py-1 text-sm font-medium text-white">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
      <p className="mt-2 text-neutral-600">{description}</p>
      <div className="mt-6">
        <span className="text-4xl font-bold text-neutral-900">{price}</span>
        {period && <span className="ml-1 text-neutral-600">{period}</span>}
      </div>
      <div className="mt-6">
        <Button href={cta.href} variant={cta.variant} className="w-full">
          {cta.label}
        </Button>
      </div>
      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-neutral-600">
            <span aria-hidden="true" className="text-primary-600 mt-0.5">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
