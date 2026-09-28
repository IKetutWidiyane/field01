import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { TERRAINS } from '../data/terrain'
import { staggerReveal } from '../animations/reveal'
import SectionLabel from '../components/SectionLabel'

export default function Terrain() {
  const [active, setActive] = useState(0)
  const terrain = TERRAINS[active]

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
        { autoAlpha: 0, scale: 1.05 },
        { autoAlpha: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
    }
    const word = wordRef.current
    if (word) {
      gsap.fromTo(
        word,
        { autoAlpha: 0, xPercent: -8 },
        { autoAlpha: 1, xPercent: 0, duration: 0.7, ease: 'power3.out' }
      )
    }
    const conds = condRef.current?.querySelectorAll('li') ?? []
    if (conds.length) {
      gsap.fromTo(
        conds,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.09, delay: 0.12 }
      )
    }
  }, [active])

  /* initial staggered reveal */
  useEffect(() => {
    const list = listRef.current
    if (list) staggerReveal(Array.from(list.querySelectorAll('button')))
  }, [])

  return (
    <section id="terrain" className="section bg-sand">
      <div className="container-x">
        <SectionLabel index="01" title="The Terrain" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* left — heading + selector */}
          <div>
            <h2 className="display-lg text-ink">
              Five worlds.
              <br />
              <span className="serif-accent">One system.</span>
            </h2>

            <p className="mt-6 max-w-[36ch] leading-relaxed text-muted">
              FIELD/01 is drawn and tested across five terrains. Each one changes
              the brief — the equipment has to follow.
            </p>

            <div ref={listRef} className="mt-10 flex flex-col" role="tablist" aria-label="Terrain selection">
              {TERRAINS.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`group flex items-baseline gap-4 border-t border-line py-4 text-left transition-colors duration-200 last:border-b ${
                    active === i ? 'bg-canvas/60 px-3' : 'px-0 hover:pl-3'
                  }`}
                >
                  <span
                    className={`h-2 w-2 shrink-0 translate-y-[-2px] rounded-full border transition-colors duration-200 ${
                      active === i ? 'border-signal bg-signal' : 'border-ink'
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`font-mono text-[0.68rem] tracking-[0.14em] text-muted ${
                      active === i ? 'text-signal' : ''
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`text-[clamp(1.5rem,3.4vw,2.6rem)] font-semibold uppercase leading-none tracking-tight transition-colors duration-200 ${
                      active === i ? 'text-signal' : 'text-ink group-hover:text-signal'
                    }`}
                  >
                    {t.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* right — media + conditions */}
          <div className="relative">
            <div
              ref={wordRef}
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 top-0 z-0 select-none text-[16vw] font-semibold uppercase leading-none tracking-tighter text-canvas mix-blend-multiply lg:text-[9vw]"
            >
              {terrain.name}
            </div>

            <div ref={imgWrapRef} className="relative z-10">
              <div className="frame aspect-[4/3] rounded-[0.25rem]">
                <img
                  key={terrain.id}
                  src={terrain.image}
                  alt={terrain.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative z-10 mt-6 grid gap-8 border-t border-line pt-6 md:grid-cols-2">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">Conditions</p>
                <ul ref={condRef} className="mt-3 space-y-2">
                  {terrain.conditions.map((c) => (
                    <li key={c} className="flex items-center gap-3 font-mono text-sm tracking-wide text-ink">
                      <span className="h-1 w-1 rounded-full bg-signal" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="max-w-[34ch] leading-relaxed text-ink/80">{terrain.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}