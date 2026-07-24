import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}
