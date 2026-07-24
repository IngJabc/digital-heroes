import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Navigation } from '@/components/layout/Navigation'
import { MobileMenu } from '@/components/ui/MobileMenu'
import { SITE_NAME } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-neutral-900 transition-colors hover:text-neutral-700"
          >
            {SITE_NAME}
          </Link>
          <Navigation />
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}
