import { useEffect, useRef } from 'react'
import { revealText } from '../animations/reveal'
import { initSectionMotion } from '../animations/section'
import { useReducedMotion } from '../hooks/useReducedMotion'
import MagneticButton from '../components/MagneticButton'

interface FinalCTAProps {
  onNavigate: (id: string) => void
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (reduced) return
    root
      .querySelectorAll('[data-line]')
      .forEach((line) => revealText(line, { start: 'top 88%' }))
    initSectionMotion(root)
  }, [reduced])

  return (
    <section id="next" ref={rootRef} className="section overflow-hidden bg-sand/60 border-t border-line">
      <div className="container-editorial flex flex-col items-start py-12 md:py-24">
        <h2 className="display-hero text-ink max-w-[14ch]">
          <span data-line className="block">
            Where
          </span>
          <span data-line className="block">
            will you
          </span>
          <span data-line className="block">
            go next?
          </span>
        </h2>

        <div className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:gap-14">
          <MagneticButton
            onClick={() => onNavigate('equipment')}
            className="group inline-flex items-center gap-4 bg-signal px-9 py-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-ink"
          >
            Explore the equipment{' '}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </MagneticButton>

          <p data-reveal className="max-w-[34ch] font-mono text-sm leading-relaxed text-ink/80">
            Equipment for the unmapped.
          </p>
        </div>
      </div>
    </section>
  )
}