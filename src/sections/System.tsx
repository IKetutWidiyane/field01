import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SYSTEM_CALLOUTS } from '../data/system'
import { initSectionMotion } from '../animations/section'

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
  const rootRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(SVGLineElement | null)[]>([])

  /* heading reveal + image parallax */
  useEffect(() => {
    if (rootRef.current) initSectionMotion(rootRef.current)
  }, [])

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
    <section id="system" ref={rootRef} className="section overflow-hidden bg-canvas border-t border-line">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <h2 data-reveal-heading className="display-lg text-ink">
              Built like a
              <br />
              <span className="type-accent">blueprint.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* ---- callout list (span 6) ---- */}
          <div ref={listRef} className="lg:col-span-6 flex flex-col">
            {SYSTEM_CALLOUTS.map((c, i) => (
              <button
                key={c.number}
                type="button"
                data-callout
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`block w-full border-t border-line text-left transition-all duration-200 last:border-b ${
                  active === i ? 'bg-sand/30 pl-4' : 'hover:bg-sand/15 pl-0'
                }`}
              >
                <div className="flex items-center gap-5 py-5">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-none border font-mono text-xs font-medium transition-all duration-200 ${
                      active === i
                        ? 'border-signal bg-signal text-paper'
                        : 'border-line text-muted bg-canvas'
                    }`}
                  >
                    {c.number}
                  </span>
                  <div>
                    <span
                      className={`text-[clamp(1.05rem,2vw,1.35rem)] font-medium uppercase tracking-[0.04em] transition-colors duration-200 block ${
                        active === i ? 'text-ink' : 'text-muted'
                      }`}
                    >
                      {c.name}
                    </span>
                  </div>
                  <span
                    className={`ml-auto font-mono text-xs text-signal transition-opacity duration-200 ${
                      active === i ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  >
                    ●
                  </span>
                </div>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    active === i ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 pl-15">
                    <p className="max-w-[48ch] leading-relaxed text-ink/80 text-sm">{c.body}</p>
                    <div className="mt-5 grid max-w-md grid-cols-2 gap-3 border-t border-line pt-4">
                      {c.metrics.map(([k, v]) => (
                        <div key={k} className="bg-canvas border border-line p-2.5">
                          <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                            {k}
                          </span>
                          <span className="mt-0.5 block font-mono text-xs font-semibold text-ink">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ---- engineering blueprint panel (span 6) ---- */}
          <div className="lg:col-span-6 relative lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)]">
            <div className="relative border border-line bg-sand p-2.5 shadow-xs">
              {/* Corner crosshair registration markers */}
              <div className="pointer-events-none absolute left-4 top-4 z-20 font-mono text-xs text-ink/70">+</div>
              <div className="pointer-events-none absolute right-4 top-4 z-20 font-mono text-xs text-ink/70">+</div>
              <div className="pointer-events-none absolute bottom-4 left-4 z-20 font-mono text-xs text-ink/70">+</div>
              <div className="pointer-events-none absolute bottom-4 right-4 z-20 font-mono text-xs text-ink/70">+</div>

              {/* Blueprint frame */}
              <div data-parallax className="frame aspect-[4/5] w-full blueprint-grid relative">
                <img
                  src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1600&q=85"
                  alt="Technical backpack photographed as an engineering schematic"
                  className="h-full w-full object-cover mix-blend-multiply opacity-90"
                  loading="lazy"
                />

                {/* svg connector lines + nodes */}
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-auto"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {SYSTEM_CALLOUTS.map((c, i) => {
                    const n = NODES[i]
                    return (
                      <g key={c.number} className="cursor-pointer" onClick={() => setActive(i)}>
                        <line
                          ref={(el) => {
                            lineRefs.current[i] = el
                          }}
                          x1={50}
                          y1={50}
                          x2={n.x}
                          y2={n.y}
                          stroke={i === active ? '#F15A24' : '#D9D8D3'}
                          strokeWidth={i === active ? 0.8 : 0.4}
                          strokeDasharray={100}
                          strokeDashoffset={100}
                          pathLength={100}
                          style={{ transition: 'stroke 0.3s ease' }}
                        />
                        <circle
                          cx={n.x}
                          cy={n.y}
                          r={3.8}
                          fill={i === active ? '#F15A24' : '#F7F6F2'}
                          stroke={i === active ? '#F15A24' : '#777872'}
                          strokeWidth={0.8}
                          style={{ transition: 'fill 0.3s ease, stroke 0.3s ease' }}
                        />
                        <text
                          x={n.x}
                          y={n.y - 4}
                          textAnchor="middle"
                          fontSize={3.2}
                          fontWeight="bold"
                          fill={i === active ? '#151515' : '#777872'}
                          fontFamily="Geist Mono, monospace"
                          style={{ transition: 'fill 0.3s ease' }}
                        >
                          {c.number}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>

              </div>
          </div>
        </div>
      </div>
    </section>
  )
}