import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/constants'

export function Navigation() {
  return (
    <nav aria-label="Main navigation" className="hidden md:flex md:items-center md:gap-1">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
