import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SYSTEM_CALLOUTS } from '../data/system'
import SectionLabel from '../components/SectionLabel'

gsap.registerPlugin(ScrollTrigger)

/** node positions over the product image (viewBox units 0–100) */
const NODES = [
  { x: 22, y: 24 },
  { x: 80, y: 20 },
  { x: 78, y: 42 },
  { x: 18, y: 62 },
  { x: 80, y: 74 },
]

export default function System() {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(SVGLineElement | null)[]>([])

  /* scroll-driven activation */
  useEffect(() => {
    const els = Array.from(listRef.current?.querySelectorAll<HTMLElement>('[data-callout]') ?? [])
    const triggers = els.map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top 62%',
        end: 'bottom 20%',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
    )
    return () => triggers.forEach((t) => t.kill())
  }, [])

  /* SVG line drawing for the active node */
  useEffect(() => {
    lineRefs.current.forEach((line, i) => {
      if (!line) return
      if (i === active) {
        gsap.to(line, { strokeDashoffset: 0, duration: 0.7, ease: 'power3.out' })
      } else {
        gsap.to(line, { strokeDashoffset: 100, duration: 0.25, ease: 'power1.out' })
      }
    })
  }, [active])

  return (
    <section id="system" className="section overflow-hidden bg-canvas">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="05" title="The System" />
            <h2 className="display-lg mt-6 text-ink">
              Built like a
              <br />
              <span className="serif-accent">blueprint.</span>
            </h2>
          </div>
          <p className="max-w-[34ch] leading-relaxed text-muted">
            Five components, one continuous system. Scroll — or select a part —
            to read its engineering brief.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---- callout list ---- */}
          <div ref={listRef}>
            {SYSTEM_CALLOUTS.map((c, i) => (
              <button
                key={c.number}
                type="button"
                data-callout
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`block w-full border-t border-line text-left transition-colors duration-200 last:border-b ${
                  active === i ? 'bg-canvas' : 'hover:bg-canvas/50'
                }`}
              >
                <span className="flex items-center gap-5 py-6">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border font-mono text-[0.72rem] font-semibold transition-all duration-300 ${
                      active === i
                        ? 'border-signal bg-signal text-paper'
                        : 'border-line text-muted'
                    }`}
                  >
                    {c.number}
                  </span>
                  <span
                    className={`text-[clamp(1.05rem,2.2vw,1.5rem)] font-semibold uppercase tracking-[0.04em] transition-colors duration-200 ${
                      active === i ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    {c.name}
                  </span>
                  <span
                    className={`ml-auto font-mono text-signal transition-opacity duration-200 ${
                      active === i ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  >
                    ●
                  </span>
                </span>
                <span
                  className={`grid overflow-hidden transition-all duration-500 ${
                    active === i ? 'grid-rows-[1fr] pb-7 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <span className="min-h-0 pl-15">
                    <p className="max-w-[52ch] leading-relaxed text-muted">{c.body}</p>
                    <span className="mt-6 grid max-w-md grid-cols-2 gap-x-10 gap-y-4 border-t border-line pt-5">
                      {c.metrics.map(([k, v]) => (
                        <span key={k}>
                          <span className="block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                            {k}
                          </span>
                          <span className="mt-1 block font-medium">{v}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* ---- engineering blueprint panel ---- */}
          <div className="relative lg:sticky lg:top-[calc(var(--nav-h)+1rem)] lg:self-start">
            <div className="relative">
              <div className="frame aspect-[4/5] rounded-[0.25rem]">
                <img
                  src="https://picsum.photos/id/1015/1200/1500"
                  alt="Technical backpack photographed as an engineering plat"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* svg connector lines + nodes */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {SYSTEM_CALLOUTS.map((c, i) => {
                  const n = NODES[i]
                  return (
                    <g key={c.number}>
                      <line
                        ref={(el) => {
                          lineRefs.current[i] = el
                        }}
                        x1={50}
                        y1={50}
                        x2={n.x}
                        y2={n.y}
                        stroke={i === active ? '#F15A24' : '#D9D8D3'}
                        strokeWidth={i === active ? 0.7 : 0.3}
                        strokeDasharray={100}
                        strokeDashoffset={100}
                        pathLength={100}
                        style={{ transition: 'stroke 0.3s ease' }}
                      />
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={3.4}
                        fill={i === active ? '#F15A24' : '#F7F6F2'}
                        stroke={i === active ? '#F15A24' : '#D9D8D3'}
                        strokeWidth={0.6}
                        style={{ transition: 'fill 0.3s ease, stroke 0.3s ease' }}
                      />
                      <text
                        x={n.x}
                        y={n.y - 4}
                        textAnchor="middle"
                        fontSize={3.4}
                        fill={i === active ? '#151515' : '#777872'}
                        fontFamily="JetBrains Mono, monospace"
                        style={{ transition: 'fill 0.3s ease' }}
                      >
                        {c.number}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                FIELD SYSTEM / 01
              </p>
              <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                {SYSTEM_CALLOUTS[active].number} · {SYSTEM_CALLOUTS[active].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}