import { useEffect, useRef } from 'react'
import { JOURNAL } from '../data/journal'
import { staggerReveal } from '../animations/reveal'
import { parallaxImage } from '../animations/parallax'
import { initSectionMotion } from '../animations/section'
import MagneticButton from '../components/MagneticButton'

interface FieldJournalProps {
  onNavigate: (id: string) => void
}

export default function FieldJournal({ onNavigate }: FieldJournalProps) {
  const rootRef = useRef<HTMLElement>(null)
  const leadImgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    initSectionMotion(root)
    staggerReveal(Array.from(root.querySelectorAll('[data-fade]')))
    if (leadImgRef.current) parallaxImage(leadImgRef.current, 12)
  }, [])

  const [lead, item1, item2, item3] = JOURNAL

  return (
    <section id="journal" ref={rootRef} className="section overflow-hidden bg-canvas border-t border-line">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <h2 data-reveal-heading className="display-lg text-ink">
              Notes from
              <br />
              the <span className="type-accent">field.</span>
            </h2>
          </div>
        </div>

        {/* Lead Editorial Feature Article */}
        <div className="mt-12 border-b border-line pb-16">
          <article className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            {/* Visual with parallax */}
            <div ref={leadImgRef} className="lg:col-span-7 relative border border-line bg-sand p-2 overflow-hidden shadow-xs">
              <div className="aspect-[16/10] w-full overflow-hidden frame">
                <img
                  src={lead.image}
                  alt={lead.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03] will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Typography & Editorial Summary */}
            <div data-fade className="lg:col-span-5 flex flex-col justify-center">
              <span className="self-start border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-signal font-semibold">
                {lead.category}
              </span>

              <h3 className="display-lg mt-5 text-ink leading-none">
                {lead.title}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-muted font-normal max-w-[42ch]">
                {lead.description}
              </p>

              <div className="mt-8">
                <MagneticButton
                  onClick={() => onNavigate('journal')}
                  className="group inline-flex items-center gap-3 bg-canvas border border-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:border-signal hover:text-signal"
                >
                  Read full dispatch{' '}
                  <span className="text-signal transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </MagneticButton>
              </div>
            </div>
          </article>
        </div>

        {/* Secondary Asymmetric Split: Material Study & Field Nutrition */}
        <div className="mt-14 grid gap-12 md:grid-cols-12 lg:gap-14 border-b border-line pb-16">
          {/* Article 2: 7 cols */}
          <article data-fade className="md:col-span-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-line pb-10 md:pb-0 md:pr-10">
            <div>
              <div className="border border-line bg-sand p-2">
                <div data-parallax className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={item1.image}
                    alt={item1.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-6 font-mono text-xs">
                <span className="text-signal font-medium uppercase tracking-[0.14em]">{item1.category}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-ink mt-3">
                {item1.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted max-w-[46ch]">
                {item1.description}
              </p>
            </div>
          </article>

          {/* Article 3: 5 cols */}
          <article data-fade className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="border border-line bg-sand p-2">
                <div data-parallax className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item2.image}
                    alt={item2.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-6 font-mono text-xs">
                <span className="text-signal font-medium uppercase tracking-[0.14em]">{item2.category}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-ink mt-3">
                {item2.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted max-w-[40ch]">
                {item2.description}
              </p>
            </div>
          </article>
        </div>

        {/* Lower Archival Dispatch: Panoramic Horizontal Layout */}
        <div className="mt-14">
          <article data-fade className="grid gap-8 lg:grid-cols-12 items-center border border-line bg-sand/20 p-6 sm:p-8">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="self-start font-mono text-xs text-signal font-semibold uppercase tracking-[0.16em]">
                {item3.category}
              </span>
              <h4 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-ink mt-3">
                {item3.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item3.description}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div data-parallax className="aspect-[21/9] w-full overflow-hidden border border-line bg-sand">
                <img
                  src={item3.image}
                  alt={item3.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}