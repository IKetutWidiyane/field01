import { useEffect, useRef } from 'react'
import { FIELD_TESTS } from '../data/fieldTests'
import { horizontalScroll } from '../animations/scroll'
import SectionLabel from '../components/SectionLabel'

export default function FieldTest() {
  const trackRef = useRef<HTMLDivElement>(null)
  const progLabelRef = useRef<HTMLSpanElement>(null)
  const progBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const tween = horizontalScroll(track, { endPadding: 80 })
    const st = tween?.scrollTrigger
    const total = FIELD_TESTS.length
    if (tween && st && total > 1) {
      tween.eventCallback('onUpdate', () => {
        const idx = Math.min(total - 1, Math.round(st.progress * (total - 1)))
        if (progLabelRef.current) progLabelRef.current.textContent = `TEST 0${idx + 1} / 0${total}`
        if (progBarRef.current) progBarRef.current.style.transform = `scaleX(${st.progress})`
      })
    }
    return () => {
      tween?.scrollTrigger?.kill()
      tween?.kill()
    }
  }, [])

  return (
    <section id="field-test" className="section overflow-hidden bg-sand">
      <div className="container-x flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel index="04" title="Field Test" />
          <h2 className="display-lg mt-6 text-ink">
            Expedition
            <br />
            <span className="serif-accent">reports.</span>
          </h2>
        </div>
        <p className="max-w-[34ch] leading-relaxed text-muted">
          Technical field logs from three seasons of real testing. Raw data,
          no retouching, nothing anonymised.
        </p>
      </div>

      <div className="mt-14 md:h-screen md:overflow-hidden">
        <div ref={trackRef} className="flex flex-col md:flex-row md:items-stretch">
          {FIELD_TESTS.map((t) => {
            const rows: [string, string][] = [
              ['Location', t.location],
              ['Altitude', t.altitude],
              ['Temperature', t.temperature],
              ['Wind', t.wind],
              ['Duration', t.duration],
            ]
            return (
              <div
                key={t.id}
                className="flex w-full flex-col justify-center py-8 md:h-screen md:w-screen md:flex-shrink-0 md:py-0"
              >
                <div className="container-x grid items-center gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-16">
                  <div className="frame aspect-[16/11] rounded-[0.25rem]">
                    <img src={t.image} alt={t.alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>

                  <div>
                    <p className="text-[clamp(1.1rem,2.6vw,1.8rem)] font-mono font-semibold text-signal">
                      {t.report}
                    </p>
                    <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                      Test series · Season 04
                    </p>

                    <dl className="mt-8 border-t border-line">
                      {rows.map(([k, v]) => (
                        <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                          <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">{k}</dt>
                          <dd className="font-mono text-sm font-medium tracking-wide text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-7 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                      Status / Field tested
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 hidden items-center gap-4 px-4 md:flex">
          <span ref={progLabelRef} className="font-mono text-[0.68rem] tracking-[0.16em] text-muted">
            TEST 01 / 03
          </span>
          <div className="h-px w-40 bg-line">
            <div ref={progBarRef} className="h-px origin-left bg-signal" style={{ transform: 'scaleX(0)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}