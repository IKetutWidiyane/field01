import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EQUIPMENT } from '../data/equipment'
import { horizontalScroll } from '../animations/scroll'
import SectionLabel from '../components/SectionLabel'
import MagneticButton from '../components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

interface EquipmentProps {
  onNavigate: (id: string) => void
}

export default function Equipment({ onNavigate }: EquipmentProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const progLabelRef = useRef<HTMLSpanElement>(null)
  const progBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
    })

    /* progress indicator (desktop pinned mode only) */
    const st = tween?.scrollTrigger
    if (tween && st && panels.length > 1) {
      tween.eventCallback('onUpdate', () => {
        const idx = Math.min(panels.length - 1, Math.round(st.progress * (panels.length - 1)))
        if (progLabelRef.current) progLabelRef.current.textContent = `0${idx + 1} / 0${panels.length}`
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
    <section id="equipment" className="section overflow-hidden bg-canvas">
      <div className="container-x flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel index="02" title="Equipment" />
          <h2 className="display-lg mt-6 text-ink">
            The equipment
            <br />
            <span className="serif-accent">system.</span>
          </h2>
        </div>
        <p className="max-w-[34ch] leading-relaxed text-muted">
          A digital technical catalog. Three systems, one rule — the field
          decides what survives. Scroll to rotate the catalogue.
        </p>
      </div>

      <div className="mt-14 md:h-screen md:overflow-hidden">
        <div ref={trackRef} className="flex flex-col md:flex-row md:items-stretch">
          {EQUIPMENT.map((product, i) => (
            <article
              key={product.id}
              data-panel
              className="flex w-full items-center justify-center py-6 md:h-screen md:w-screen md:flex-shrink-0 md:py-0"
            >
              <div className="container-x grid items-center gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16">
                <div className="frame aspect-[4/5] rounded-[0.25rem] md:aspect-auto md:h-[74vh]">
                  <img src={product.image} alt={product.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[0.72rem] tracking-[0.16em] text-muted">
                      0{i + 1} / PRODUCT
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] ${
                        i < 2 ? 'text-signal' : 'text-muted'
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                      {i < 2 ? 'Field tested' : 'In revision'}
                    </span>
                  </div>

                  <h3 className="display-lg mt-6 text-ink">{product.name}</h3>
                  <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                    {product.category} · {product.capacity}
                  </p>

                  <p data-fade className="mt-7 max-w-[40ch] leading-relaxed text-muted">
                    {product.description}
                  </p>

                  <dl data-fade className="mt-8 grid max-w-md grid-cols-2 gap-x-10 gap-y-5 border-t border-line py-6">
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
                    <div>
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">System</dt>
                      <dd className="mt-1 font-medium">FIELD/0{i + 1}</dd>
                    </div>
                  </dl>

                  <ul data-fade className="flex flex-wrap gap-3">
                    {product.flags.map((flag) => (
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

        {/* progress (desktop pinned mode) */}
        <div className="mt-4 hidden items-center gap-4 px-4 md:flex">
          <span ref={progLabelRef} className="font-mono text-[0.68rem] tracking-[0.16em] text-muted">
            01 / 03
          </span>
          <div className="h-px w-40 bg-line">
            <div ref={progBarRef} className="h-px origin-left bg-signal" style={{ transform: 'scaleX(0)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}