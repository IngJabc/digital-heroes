import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { NAV_ITEMS, SITE_NAME, FOOTER_CREDIT } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-neutral-900">{SITE_NAME}</span>
            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-2 sm:flex-row sm:gap-4"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2 text-sm text-neutral-500">
            <p>
              &copy; {year} {SITE_NAME}. All rights reserved.
            </p>
            <p>
              <a href={FOOTER_CREDIT.href} className="transition-colors hover:text-neutral-700">
                {FOOTER_CREDIT.text}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
