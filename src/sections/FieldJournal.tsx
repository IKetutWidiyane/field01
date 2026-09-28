import { useEffect, useRef } from 'react'
import { JOURNAL } from '../data/journal'
import { staggerReveal } from '../animations/reveal'
import SectionLabel from '../components/SectionLabel'
import ImageReveal from '../components/ImageReveal'
import MagneticButton from '../components/MagneticButton'

interface FieldJournalProps {
  onNavigate: (id: string) => void
}

export default function FieldJournal({ onNavigate }: FieldJournalProps) {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    staggerReveal(Array.from(root.querySelectorAll('[data-fade]')))
  }, [])

  return (
    <section id="journal" ref={rootRef} className="section overflow-hidden bg-canvas">
      <div className="container-x flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel index="06" title="Field Journal" />
          <h2 className="display-lg mt-6 text-ink">
            Notes from
            <br />
            the <span className="serif-accent">field.</span>
          </h2>
        </div>
        <MagneticButton
          href="#journal"
          onClick={() => onNavigate('journal')}
          className="inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-signal"
        >
          All entries →
        </MagneticButton>
      </div>

      <div className="container-x mt-14 flex flex-col gap-20">
        {JOURNAL.map((a, i) => {
          const flip = i % 2 === 1
          return (
            <article key={a.id} className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
              <div className={`relative md:col-span-5 ${flip ? 'md:order-2' : ''}`}>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 select-none font-mono text-6xl font-semibold text-line md:-left-4 md:text-8xl"
                >
                  0{i + 1}
                </span>
                <ImageReveal
                  src={a.image}
                  alt={a.alt}
                  className="aspect-[4/3] rounded-[0.25rem]"
                />
              </div>

              <div data-fade className={`md:col-span-7 ${flip ? 'md:order-1' : ''}`}>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    {a.date}
                  </span>
                  <span className="border border-line px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-signal">
                    {a.category}
                  </span>
                </div>
                <h3 className="display-lg mt-5 text-ink">{a.title}</h3>
                <p className="mt-5 max-w-[46ch] leading-relaxed text-muted">{a.description}</p>
                <div className="mt-7">
                  <MagneticButton
                    href="#journal"
                    onClick={() => onNavigate('journal')}
                    className="group inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:text-signal"
                  >
                    Read the note{' '}
                    <span
                      className="text-signal transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}