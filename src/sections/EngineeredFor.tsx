import { useEffect, useRef } from 'react'
import { horizontalScroll } from '../animations/scroll'
import SectionLabel from '../components/SectionLabel'

const CONDITIONS = [
  {
    word: 'RAIN',
    info: ['Waterproof construction', 'Sealed seams', 'Weather resistance'],
    img: 'https://picsum.photos/id/1036/1600/1000',
    alt: 'Rain breaking over a forest canopy',
  },
  {
    word: 'WIND',
    info: ['Wind resistant', 'Stabilized structure', 'Field tested'],
    img: 'https://picsum.photos/id/1021/1600/1000',
    alt: 'Wind tearing across a ridgeline',
  },
  {
    word: 'COLD',
    info: ['Thermal insulation', 'Low temperature performance'],
    img: 'https://picsum.photos/id/1024/1600/1000',
    alt: 'Frosted snowfield at low temperature',
  },
  {
    word: 'WEIGHT',
    info: ['Lightweight construction', 'High strength material', 'Load optimization'],
    img: 'https://picsum.photos/id/1032/1600/1000',
    alt: 'Material close-up under technical light',
  },
  {
    word: 'DISTANCE',
    info: ['Long-distance durability', 'Ergonomic load distribution', 'Field tested'],
    img: 'https://picsum.photos/id/1018/1600/1000',
    alt: 'Long expedition landscape at dusk',
  },
]

export default function EngineeredFor() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const tween = horizontalScroll(track, { endPadding: 80 })
    return () => {
      tween?.scrollTrigger?.kill()
      tween?.kill()
    }
  }, [])

  return (
    <section id="engineered" className="section overflow-hidden bg-canvas">
      <div className="container-x flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel index="03" title="Engineered for" />
          <h2 className="display-lg mt-6 text-ink">
            Condition by
            <br />
            <span className="serif-accent">condition.</span>
          </h2>
        </div>
        <p className="max-w-[34ch] leading-relaxed text-muted">
          Five environmental briefs. Every system is designed against a named
          condition, then tested until the failure is somewhere else.
        </p>
      </div>

      <div className="mt-14 md:h-screen md:overflow-hidden">
        <div ref={trackRef} className="flex flex-col md:flex-row md:items-stretch">
          {CONDITIONS.map((c) => (
            <div
              key={c.word}
              className="flex w-full flex-col justify-center py-8 md:h-screen md:w-screen md:flex-shrink-0 md:flex-row md:items-center md:gap-16 md:py-0"
            >
              <div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-16">
                <h3 className="display-hero text-ink">{c.word}</h3>
                <div>
                  <div className="frame aspect-[16/10] rounded-[0.25rem]">
                    <img src={c.img} alt={c.alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <ul className="mt-8 space-y-3 border-t border-line pt-6">
                    {c.info.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.08em] text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}