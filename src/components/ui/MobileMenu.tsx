'use client'

import Link from 'next/link'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { NAV_ITEMS } from '@/lib/constants'

export function MobileMenu() {
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="relative z-50 inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
      >
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 bg-white md:hidden"
        >
          <div className="flex h-full flex-col items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-2xl font-medium text-neutral-700 transition-colors hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
