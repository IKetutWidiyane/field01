import { useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import { useIsTouch } from '../hooks/useMediaQuery'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface MagneticButtonProps {
  href?: string
  onClick?: () => void
  className?: string
  children: ReactNode
  ariaLabel?: string
}

const EASE = 'transform 0.35s cubic-bezier(0.22,0.61,0.36,1)'

/**
 * Subtle cursor-attraction button (section 27 of AGENTS.MD).
 * Disabled entirely on touch devices and for reduced-motion users.
 */
export default function MagneticButton({
  href,
  onClick,
  className = '',
  children,
  ariaLabel,
}: MagneticButtonProps) {
  const aRef = useRef<HTMLAnchorElement>(null)
  const bRef = useRef<HTMLButtonElement>(null)
  const touch = useIsTouch()
  const reduced = useReducedMotion()
  const magnetic = !touch && !reduced

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = href ? aRef.current : bRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${dx * 0.16}px, ${dy * 0.22}px)`
  }

  const onLeave = () => {
    const el = href ? aRef.current : bRef.current
    if (el) el.style.transform = ''
  }

  if (href) {
    return (
      <a
        ref={aRef}
        href={href}
        aria-label={ariaLabel}
        className={className}
        style={{ transition: EASE }}
        onMouseMove={magnetic ? onMove : undefined}
        onMouseLeave={magnetic ? onLeave : undefined}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      ref={bRef}
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
      style={{ transition: EASE }}
      onMouseMove={magnetic ? onMove : undefined}
      onMouseLeave={magnetic ? onLeave : undefined}
    >
      {children}
    </button>
  )
}