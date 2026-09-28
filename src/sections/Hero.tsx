import { useEffect, useRef } from 'react'
import { splitWords } from '../animations/reveal'
import { initHeroLoad, initHeroScroll } from '../animations/hero'
import { useReducedMotion } from '../hooks/useReducedMotion'
import MagneticButton from '../components/MagneticButton'

interface HeroProps {
  onNavigate: (id: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (!reduced) root.querySelectorAll('[data-line]').forEach((line) => splitWords(line))
    initHeroLoad(root)
    initHeroScroll(root)
  }, [reduced])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* cinematic media */}
      <div data-hero-media className="absolute inset-0">
        <img
          src="https://picsum.photos/id/1018/1920/1280"
          alt="Alpine ridge at dawn, above the treeline"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      {/* warm scrim keeps the editorial text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/55 to-transparent" aria-hidden="true" />

      <div className="container-x relative z-10 flex flex-1 flex-col justify-end pb-24 pt-[calc(var(--nav-h)+3rem)]">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">
            <span className="eyebrow__index">FIELD SYSTEM / 01</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            <span>ALPS · 3,842 M</span>
          </p>

          <h1 data-hero-heading className="display-hero text-ink">
            <span data-line className="block">
              The field
            </span>
            <span data-line className="block">
              starts here.
            </span>
          </h1>

          <p
            data-hero-copy
            className="mt-6 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted md:text-lg"
          >
            Equipment engineered for uncertain terrain.
          </p>

          <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() => onNavigate('equipment')}
              className="group inline-flex items-center gap-3 bg-signal px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-ink"
            >
              Explore equipment{' '}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </MagneticButton>
            <MagneticButton
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-3 border border-ink px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-signal hover:text-signal"
            >
              Field journal
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* technical metadata */}
      <div
        data-hero-meta
        className="container-x relative z-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line py-4"
      >
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">LAT 46°32'12"</span>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">LON 7°44'20"</span>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">ALT 3,842 M</span>
        <span className="ml-auto inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" /> Field tested
        </span>
      </div>
    </section>
  )
}