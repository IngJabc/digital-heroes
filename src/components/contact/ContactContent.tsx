import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const CONTACT_INFO = [
  {
    label: 'Email',
    email: 'hello@digital.com',
  },
  {
    label: 'Sales',
    email: 'sales@digital.com',
  },
  {
    label: 'Support',
    email: 'support@digital.com',
  },
] as const

const inputClasses =
  'w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none'

export function ContactContent() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-4">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-neutral-600">Tell us how we can help.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                Name
              </label>
              <input id="name" type="text" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input id="email" type="email" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
                Company
              </label>
              <input id="company" type="text" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                Message
              </label>
              <textarea id="message" rows={5} className={inputClasses} />
            </div>
            <div>
              <Button type="button">Send message</Button>
            </div>
          </form>
          <div className="flex flex-col gap-6">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <h3 className="text-lg font-semibold text-neutral-900">{item.label}</h3>
                <p className="mt-2">
                  <a
                    href={`mailto:${item.email}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {item.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
