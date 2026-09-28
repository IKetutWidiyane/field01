import MagneticButton from '../components/MagneticButton'

interface FooterProps {
  onNavigate: (id: string) => void
}

const INDEX_LINKS = [
  { id: 'equipment', label: 'Equipment' },
  { id: 'field-test', label: 'Field Test' },
  { id: 'journal', label: 'Journal' },
  { id: 'about', label: 'About' },
]

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-ink text-canvas">
      <div className="container-x grid gap-10 border-b border-canvas/15 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-baseline text-2xl font-bold tracking-wide">
            FIELD<span className="text-signal">/</span>01
            <span className="ml-2 inline-block h-1.5 w-1.5 self-center rounded-full bg-signal" aria-hidden="true" />
          </p>
          <p className="mt-5 max-w-[30ch] font-mono text-sm leading-relaxed text-muted">
            A digital field laboratory. Equipment engineered, built and
            field-tested for the unmapped.
          </p>
          <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
            FIELD SYSTEM / 01 · LAT 46°32'12" · LON 7°44'20"
          </p>
        </div>

        <nav aria-label="Index">
          <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">Index</h4>
          <ul className="mt-5 space-y-3">
            {INDEX_LINKS.map((link) => (
              <li key={link.id}>
                <MagneticButton
                  href={`#${link.id}`}
                  onClick={() => onNavigate(link.id)}
                  className="text-sm font-semibold uppercase tracking-[0.1em] text-canvas transition-colors duration-200 hover:text-signal"
                >
                  {link.label}
                </MagneticButton>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">Connect</h4>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('top')
                }}
                className="text-sm font-semibold uppercase tracking-[0.1em] text-canvas transition-colors duration-200 hover:text-signal"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#next"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('next')
                }}
                className="text-sm font-semibold uppercase tracking-[0.1em] text-canvas transition-colors duration-200 hover:text-signal"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-x flex flex-wrap items-center justify-between gap-4 py-7">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
          © 2026 FIELD/01
        </span>
        <span className="hidden font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted md:inline">
          Equipment for the unmapped
        </span>
        <button
          type="button"
          onClick={() => onNavigate('top')}
          className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-canvas transition-colors duration-200 hover:text-signal"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}