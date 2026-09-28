import { useEffect, useRef } from 'react'
import { splitWords } from '../animations/reveal'
import { initHeroLoad } from '../animations/hero'
import { initHeroCinematicParallax } from '../animations/parallax'
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
    if (!reduced) {
      root.querySelectorAll('[data-line]').forEach((line) => splitWords(line))
      initHeroCinematicParallax(root)
    }
    initHeroLoad(root)
  }, [reduced])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-canvas pt-[calc(var(--nav-h)+1.2rem)]"
    >
      {/* Main asymmetric editorial cover */}
      <div className="container-editorial flex-1 py-10 md:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Pure Clean Typography & Actions */}
          <div className="flex flex-col lg:col-span-7">
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
              className="mt-6 max-w-[38ch] text-[1.15rem] leading-relaxed text-muted md:text-xl font-normal"
            >
              Equipment engineered for uncertain terrain.
            </p>

            <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={() => onNavigate('equipment')}
                className="group inline-flex items-center gap-3 bg-signal px-8 py-4 text-[0.76rem] font-medium uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-ink"
              >
                Explore equipment{' '}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={() => onNavigate('journal')}
                className="inline-flex items-center gap-3 border border-ink/40 px-8 py-4 text-[0.76rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-signal hover:text-signal"
              >
                Field journal
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Editorial Hero Photograph with deep parallax */}
          <div className="lg:col-span-5">
            <div
              data-hero-media
              className="relative overflow-hidden border border-line bg-sand will-change-transform shadow-xs"
            >
              {/* Main photographic composition */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1600&q=85"
                  alt="Alpine mountain ridge in pristine atmospheric mist"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  fetchPriority="high"
                />
              </div>

              {/* Minimal caption */}
              <div className="border-t border-line bg-canvas/90 px-4 py-3 flex items-center justify-between font-mono text-[0.64rem] uppercase tracking-[0.16em] text-muted">
                <span>BERNESE OBERLAND RIDGE</span>
                <span className="text-signal font-medium">ALT 3,842 M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical metadata bottom rail */}
      <div
        data-hero-meta
        className="container-editorial border-t border-line py-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
          <span>LAT 46°32'12" N</span>
          <span>LON 7°44'20" E</span>
          <span className="hidden sm:inline">ALT 3,842 M</span>
          <span className="inline-flex items-center gap-2 text-signal font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            FIELD TESTED
          </span>
        </div>
      </div>
    </section>
  )
}