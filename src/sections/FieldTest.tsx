import { useEffect, useRef, useState } from 'react'
import { FIELD_TESTS } from '../data/fieldTests'
import { parallaxImage } from '../animations/parallax'
import { initSectionMotion } from '../animations/section'

export default function FieldTest() {
  const [active, setActive] = useState(0)
  const report = FIELD_TESTS[active]
  const rootRef = useRef<HTMLElement>(null)
  const imgFrameRef = useRef<HTMLDivElement>(null)

  /* one-time section intro (heading word reveal) */
  useEffect(() => {
    if (rootRef.current) initSectionMotion(rootRef.current)
  }, [])

  /* refresh image parallax when the active report changes */
  useEffect(() => {
    if (imgFrameRef.current) {
      parallaxImage(imgFrameRef.current, 12)
    }
  }, [active])

  return (
    <section id="field-test" ref={rootRef} className="section overflow-hidden bg-sand/35 border-t border-line">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <h2 data-reveal-heading className="display-lg text-ink">
              Expedition
              <br />
              <span className="type-accent">reports.</span>
            </h2>
          </div>
        </div>

        {/* Report index selector */}
        <div className="mt-8 flex flex-wrap gap-3 border-b border-line pb-4" role="tablist">
          {FIELD_TESTS.map((t, i) => (
            <button
              key={t.id}
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
              <span>{t.location}</span>
            </button>
          ))}
        </div>

        {/* Main Expedition Dossier Display */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left / Documentary Photography Frame with Parallax */}
          <div className="lg:col-span-7">
            <div ref={imgFrameRef} className="relative border border-line bg-canvas p-2.5 overflow-hidden shadow-xs">
              <div className="aspect-[16/11] w-full overflow-hidden frame">
                <img
                  key={report.id}
                  src={report.image}
                  alt={report.alt}
                  className="h-full w-full object-cover transition-opacity duration-500 ease-out will-change-transform"
                  loading="lazy"
                />
              </div>

              {/* Minimal caption */}
              <div className="border-t border-line bg-canvas p-3 flex items-center justify-between font-mono text-[0.66rem] uppercase text-muted">
                <span>{report.location}</span>
                <span className="text-ink font-medium">{report.gearTested}</span>
              </div>
            </div>
          </div>

          {/* Right / Technical Logbook Table & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="border border-line bg-canvas p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal font-semibold">
                  {report.report}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {report.gps}
                </p>
              </div>

              {/* Telemetry rows */}
              <dl className="mt-4 divide-y divide-line">
                <div className="flex items-center justify-between py-2.5">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Location</dt>
                  <dd className="font-mono text-xs font-medium text-ink">{report.location}</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Altitude</dt>
                  <dd className="font-mono text-xs font-medium text-ink">{report.altitude}</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Temperature</dt>
                  <dd className="font-mono text-xs font-medium text-signal">{report.temperature}</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Peak Wind</dt>
                  <dd className="font-mono text-xs font-medium text-ink">{report.wind}</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Duration</dt>
                  <dd className="font-mono text-xs font-medium text-ink">{report.duration}</dd>
                </div>
              </dl>

              {/* Field Observation Transcript */}
              <div className="mt-6 border-t border-line pt-5">
                <blockquote className="text-sm leading-relaxed text-ink/80 italic border-l-2 border-signal pl-4 py-1">
                  "{report.fieldLog}"
                </blockquote>
              </div>
            </div>

            {/* Quick switcher buttons */}
            <div className="mt-6 flex items-center justify-between font-mono text-xs text-muted">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : FIELD_TESTS.length - 1))}
                  className="border border-line px-3 py-1.5 hover:border-ink hover:text-ink transition-colors"
                  aria-label="Previous report"
                >
                  ← PREV
                </button>
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev < FIELD_TESTS.length - 1 ? prev + 1 : 0))}
                  className="border border-line px-3 py-1.5 hover:border-ink hover:text-ink transition-colors"
                  aria-label="Next report"
                >
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}