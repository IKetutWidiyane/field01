import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { TERRAINS } from '../data/terrain'
import { staggerReveal } from '../animations/reveal'
import { parallaxImage } from '../animations/parallax'
import { initSectionMotion } from '../animations/section'

export default function Terrain() {
  const [active, setActive] = useState(0)
  const terrain = TERRAINS[active]

  const rootRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const imgWrapRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLDivElement>(null)
  const condRef = useRef<HTMLUListElement>(null)

  /* GSAP transition when selection changes */
  useEffect(() => {
    const img = imgWrapRef.current
    if (img) {
      gsap.fromTo(
        img,
        { autoAlpha: 0, scale: 1.04 },
        { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'power3.out' }
      )
      parallaxImage(img, 12)
    }
    const word = wordRef.current
    if (word) {
      gsap.fromTo(
        word,
        { autoAlpha: 0, xPercent: -6 },
        { autoAlpha: 1, xPercent: 0, duration: 0.6, ease: 'power3.out' }
      )
    }
    const conds = condRef.current?.querySelectorAll('li') ?? []
    if (conds.length) {
      gsap.fromTo(
        conds,
        { autoAlpha: 0, y: 8 },
        { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08, delay: 0.1 }
      )
    }
  }, [active])

  /* initial staggered reveal & parallax */
  useEffect(() => {
    const root = rootRef.current
    const list = listRef.current
    if (root) initSectionMotion(root)
    if (list) staggerReveal(Array.from(list.querySelectorAll('button')))
    if (imgWrapRef.current) parallaxImage(imgWrapRef.current, 12)
  }, [])

  return (
    <section id="terrain" ref={rootRef} className="section bg-sand/40 border-t border-line">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16 items-start">
          {/* left — heading + selector */}
          <div>
            <h2 data-reveal-heading className="display-lg text-ink">
              Five worlds.
              <br />
              <span className="type-accent">One system.</span>
            </h2>

            <div ref={listRef} className="mt-10 flex flex-col" role="tablist" aria-label="Terrain selection">
              {TERRAINS.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`group flex items-baseline gap-4 border-t border-line py-4 text-left transition-all duration-200 last:border-b ${
                    active === i ? 'bg-canvas px-4' : 'px-0 hover:pl-3'
                  }`}
                >
                  <span
                    className={`h-2 w-2 shrink-0 translate-y-[-2px] rounded-full border transition-colors duration-200 ${
                      active === i ? 'border-signal bg-signal' : 'border-ink/40'
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-[clamp(1.4rem,3vw,2.4rem)] font-medium uppercase leading-none tracking-tight transition-colors duration-200 ${
                      active === i ? 'text-ink' : 'text-muted group-hover:text-ink'
                    }`}
                  >
                    {t.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* right — media + conditions with parallax */}
          <div className="relative">
            <div
              ref={wordRef}
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-6 z-0 select-none text-[16vw] font-bold uppercase leading-none tracking-tighter text-ink/5 lg:text-[10vw]"
            >
              {terrain.name}
            </div>

            <div ref={imgWrapRef} className="relative z-10 border border-line bg-canvas p-2 overflow-hidden shadow-xs">
              {/* Telemetry bar above image */}
              <div className="flex items-center justify-between border-b border-line px-3 py-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-muted">
                <span>{terrain.coords}</span>
                <span className="text-ink font-medium">{terrain.elevation}</span>
                <span className="text-signal">{terrain.tempRange}</span>
              </div>

              {/* Main frame with parallax image */}
              <div className="frame aspect-[4/3] w-full overflow-hidden">
                <img
                  key={terrain.id}
                  src={terrain.image}
                  alt={terrain.alt}
                  className="h-full w-full object-cover will-change-transform"
                  loading="lazy"
                />
              </div>

              {/* Conditions and concise description */}
              <div className="grid gap-6 border-t border-line p-4 md:grid-cols-2">
                <div>
                  <ul ref={condRef} className="space-y-2">
                    {terrain.conditions.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 font-mono text-xs tracking-wide text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted">{terrain.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}