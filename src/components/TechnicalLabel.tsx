import type { ReactNode } from 'react'

interface TechnicalLabelProps {
  children: ReactNode
  dot?: boolean
  className?: string
}

/** Monospace technical chip, e.g. `LAT 46°32'12"`. */
export default function TechnicalLabel({ children, dot, className = '' }: TechnicalLabelProps) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted ${className}`}>
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  )
}