import { useEffect, useRef, useState } from 'react'
import { parallaxImage } from '../animations/parallax'
import { initSectionMotion } from '../animations/section'

interface ConditionItem {
  id: string
  word: string
  subtitle: string
  info: string[]
  metrics: [string, string][]
  img: string
  alt: string
  protocol: string
}

const CONDITIONS: ConditionItem[] = [
  {
    id: 'rain',
    word: 'RAIN',
    subtitle: 'HYDRAULIC RESISTANCE',
    info: ['Waterproof construction', 'Sealed seams', 'Weather resistance'],
    metrics: [
      ['HYDROSTATIC HEAD', '28,000 MM'],
      ['SEAM TAPE', '13MM 3-LAYER'],
      ['SURFACE DWR', 'C0 PFC-FREE'],
      ['LAB TEST', '8-HOUR RAIN ROOM'],
    ],
    img: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1600&q=85',
    alt: 'Driving rain cascading over dark mountain forest',
    protocol: 'FIELD PROTOCOL / HYDRO-01',
  },
  {
    id: 'wind',
    word: 'WIND',
    subtitle: 'AERODYNAMIC INTEGRITY',
    info: ['Wind resistant', 'Stabilized structure', 'Field tested'],
    metrics: [
      ['WIND RATING', '100 KM/H'],
      ['STRUCTURE', 'GEODESIC DAC POLES'],
      ['GUY-LINE', 'DYNEEMA® 2.5MM'],
      ['AIR PERMEABILITY', '0.05 CFM'],
    ],
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    alt: 'Severe high alpine gales blowing across glacial ridge',
    protocol: 'FIELD PROTOCOL / AERO-02',
  },
  {
    id: 'cold',
    word: 'COLD',
    subtitle: 'THERMAL PRESERVATION',
    info: ['Thermal insulation', 'Low temperature performance', 'Anti-freeze closures'],
    metrics: [
      ['TEMP LIMIT', '-32°C'],
      ['ZIPPER COATING', 'FREEZE-RESISTANT PU'],
      ['FABRIC HARDENING', 'TESTED TO -40°C'],
      ['INSULATION MATRIX', 'HYDROPHOBIC DOWN'],
    ],
    img: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1600&q=85',
    alt: 'Sub-zero frosted snowfield under harsh mountain winter sky',
    protocol: 'FIELD PROTOCOL / CRYO-03',
  },
  {
    id: 'weight',
    word: 'WEIGHT',
    subtitle: 'GRAVIMETRIC OPTIMIZATION',
    info: ['Lightweight construction', 'High strength material', 'Load optimization'],
    metrics: [
      ['FRAME MASS', '1,240 GRAMS'],
      ['TENSILE STRENGTH', '1,850 N / 5CM'],
      ['BASE MATERIAL', 'CORDURA® 500D TPU'],
      ['HARDWARE', 'AEROSPACE 7075-T6'],
    ],
    img: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=1600&q=85',
    alt: 'Microscopic ripstop technical textile weave structure',
    protocol: 'FIELD PROTOCOL / MASS-04',
  },
  {
    id: 'distance',
    word: 'DISTANCE',
    subtitle: 'ENDURANCE ERGONOMICS',
    info: ['Long-distance durability', 'Ergonomic load distribution', 'Field tested'],
    metrics: [
      ['CYCLE RATING', '1,200 KM TRAVERSE'],
      ['PRESSURE PROFILE', '3.2 PSI PEAK'],
      ['ABRASION RESISTANCE', '100,000 RUBS'],
      ['PELVIC LOAD TRANSFER', '84% CARRIED ON HIPS'],
    ],
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85',
    alt: 'Rugged wilderness trail stretching towards distant mountain passes',
    protocol: 'FIELD PROTOCOL / ENDUR-05',
  },
]

export default function EngineeredFor() {
  const [active, setActive] = useState(0)
  const current = CONDITIONS[active]
  const rootRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  /* one-time section intro (heading word reveal) */
  useEffect(() => {
    if (rootRef.current) initSectionMotion(rootRef.current)
  }, [])

  /* refresh image parallax when the active condition changes */
  useEffect(() => {
    if (imgRef.current) {
      parallaxImage(imgRef.current, 10)
    }
  }, [active])

  return (
    <section id="engineered" ref={rootRef} className="section overflow-hidden bg-canvas border-t border-line">
      <div className="container-editorial">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <h2 data-reveal-heading className="display-lg text-ink">
              Condition by
              <br />
              <span className="type-accent">condition.</span>
            </h2>
          </div>
        </div>

        {/* Condition selector tab bar */}
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-4 border-b border-line pb-4" role="tablist">
          {CONDITIONS.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] transition-all duration-200 border ${
                active === i
                  ? 'border-signal bg-canvas text-ink font-medium shadow-xs'
                  : 'border-transparent text-muted hover:border-line hover:text-ink'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  active === i ? 'bg-signal' : 'bg-line'
                }`}
                aria-hidden="true"
              />
              <span>{c.word}</span>
            </button>
          ))}
        </div>

        {/* Monumental Typographic & Environmental Stage */}
        <div ref={imgRef} className="mt-10 relative overflow-hidden border border-line bg-sand">
          <div className="relative aspect-[16/9] w-full min-h-[460px] md:min-h-[580px] overflow-hidden">
            <img
              key={current.id}
              src={current.img}
              alt={current.alt}
              className="h-full w-full object-cover transition-opacity duration-700 ease-in-out will-change-transform"
              loading="lazy"
            />
            {/* Scrim for readability without killing photographic character */}
            <div className="absolute inset-0 bg-ink/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

            {/* Monumental Typographic Word dominating the space */}
            <div className="absolute inset-x-6 bottom-8 md:bottom-12 z-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal font-medium">
                {current.subtitle}
              </p>
              <h3 className="text-[14vw] lg:text-[11vw] font-bold uppercase leading-none tracking-tighter text-paper select-none">
                {current.word}
              </h3>

              {/* Technical Specifications Grid inside the environmental viewport */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-paper/20 pt-5">
                {current.metrics.slice(0, 2).map(([label, val]) => (
                  <div key={label} className="bg-ink/60 backdrop-blur-xs p-3 border border-paper/10">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-paper/70">
                      {label}
                    </p>
                    <p className="mt-1 font-mono text-sm font-medium tracking-wide text-paper">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}