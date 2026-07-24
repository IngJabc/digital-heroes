import Link from 'next/link'
import type { ButtonProps } from '@/lib/types'

const variantStyles = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
  secondary:
    'border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus-visible:ring-neutral-400',
  ghost:
    'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-400',
} as const

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
} as const

const baseStyles =
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  type,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type ?? 'button'} className={classes}>
      {children}
    </button>
  )
}
