import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EQUIPMENT } from '../data/equipment'
import { horizontalScroll } from '../animations/scroll'
import { initSectionMotion } from '../animations/section'
import MagneticButton from '../components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

interface EquipmentProps {
  onNavigate: (id: string) => void
}

export default function Equipment({ onNavigate }: EquipmentProps) {
  const rootRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (root) initSectionMotion(root)
    const track = trackRef.current
    if (!track) return

    const tween = horizontalScroll(track)
    const panels = Array.from(track.querySelectorAll<HTMLElement>('[data-panel]'))

    /* subtle per-panel reveals as each panel enters */
    panels.forEach((panel) => {
      const fade = Array.from(panel.querySelectorAll('[data-fade]'))
      if (!fade.length) return
      gsap.fromTo(
        fade,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'left 55%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      /* cinematic clip + scale reveal for the product visual */
      const shot = panel.querySelector('[data-shot]')
      if (shot) {
        gsap.fromTo(
          shot,
          { clipPath: 'inset(2% 0% 4% 0%)', scale: 1.05 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'left 55%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })

    /* progress indicator (desktop pinned mode only) */
    const st = tween?.scrollTrigger
    if (tween && st && panels.length > 1) {
      tween.eventCallback('onUpdate', () => {
        if (progBarRef.current) progBarRef.current.style.transform = `scaleX(${st.progress})`
      })
    }

    return () => {
      tween?.scrollTrigger?.kill()
      tween?.kill()
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <section id="equipment" ref={rootRef} className="section overflow-hidden bg-canvas border-t border-line">
      <div className="container-editorial flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
        <div>
          <h2 data-reveal-heading className="display-lg text-ink">
            The equipment
            <br />
            <span className="type-accent">catalog.</span>
          </h2>
        </div>
      </div>

      <div className="mt-8 md:h-screen md:overflow-hidden">
        <div ref={trackRef} className="flex flex-col md:flex-row md:items-stretch">
          {EQUIPMENT.map((product) => (
            <article
              key={product.id}
              data-panel
              className="flex w-full items-center justify-center py-8 md:h-screen md:w-screen md:flex-shrink-0 md:py-0"
            >
              <div className="container-editorial grid items-center gap-10 md:grid-cols-12 md:gap-14">
                <div className="relative border border-line bg-sand p-2 md:col-span-7 overflow-hidden">
                  <div
                    data-shot
                    className="frame aspect-[4/5] w-full md:h-[68vh] overflow-hidden will-change-transform"
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03] will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                      {product.category}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                      FIELD TESTED
                    </span>
                  </div>

                  <h3 className="display-lg mt-6 text-ink">{product.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {product.capacity}
                  </p>

                  <p data-fade className="mt-7 max-w-[40ch] leading-relaxed text-muted">
                    {product.description}
                  </p>

                  <dl data-fade className="mt-8 grid max-w-md grid-cols-3 gap-x-10 gap-y-5 border-t border-line py-6">
                    <div>
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Weight</dt>
                      <dd className="mt-1 font-medium">{product.weight}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Material</dt>
                      <dd className="mt-1 font-medium">{product.material}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">Rating</dt>
                      <dd className="mt-1 font-medium">{product.weatherRating}</dd>
                    </div>
                  </dl>

                  <ul data-fade className="flex flex-wrap gap-3">
                    {product.flags.slice(0, 3).map((flag) => (
                      <li
                        key={flag}
                        className="border border-line px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted"
                      >
                        {flag}
                      </li>
                    ))}
                  </ul>

                  <div data-fade className="mt-9 flex items-center gap-6">
                    <MagneticButton
                      onClick={() => onNavigate('system')}
                      className="group inline-flex items-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:text-signal"
                    >
                      View the system{' '}
                      <span className="text-signal transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                        →
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* progress (desktop pinned mode) — position signal, no counter */}
        <div className="mt-4 hidden items-center gap-4 px-4 md:flex">
          <div className="h-px w-64 bg-line" aria-hidden="true">
            <div ref={progBarRef} className="h-px origin-left bg-signal" style={{ transform: 'scaleX(0)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}