import { useEffect, useRef } from 'react'
import { revealText } from '../animations/reveal'
import { useReducedMotion } from '../hooks/useReducedMotion'
import MagneticButton from '../components/MagneticButton'

interface FinalCTAProps {
  onNavigate: (id: string) => void
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const root = rootRef.current
    if (!root) return
    root
      .querySelectorAll('[data-line]')
      .forEach((line) => revealText(line, { start: 'top 88%' }))
  }, [reduced])

  return (
    <section id="next" ref={rootRef} className="section overflow-hidden bg-sand">
      <div className="container-x flex flex-col items-start">
        <p className="eyebrow">
          <span className="eyebrow__index">07</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          <span>Next</span>
        </p>

        <h2 className="display-hero mt-10 text-ink">
          <span data-line className="block">
            Where will
          </span>
          <span data-line className="block">
            you go next?
          </span>
        </h2>

        <div className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:gap-14">
          <MagneticButton
            onClick={() => onNavigate('equipment')}
            className="group inline-flex items-center gap-4 bg-signal px-8 py-5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-ink"
          >
            Explore the equipment{' '}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </MagneticButton>
          <p className="max-w-[30ch] font-mono text-sm leading-relaxed text-muted">
            EQUIPMENT FOR THE UNMAPPED. FIELD/01 ships to 34 countries — the
            tracking code lands before the coffee goes cold.
          </p>
        </div>

        <div className="mt-16 flex w-full flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
            LAT 46°32'12" N
          </span>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
            LON 7°44'20" E
          </span>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
            ALT 3,842 M
          </span>
        </div>
      </div>
    </section>
  )
}