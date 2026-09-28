import { useEffect, useState } from 'react'
import MagneticButton from './MagneticButton'

const DESKTOP_LINKS = [
  { id: 'equipment', label: 'EQUIPMENT' },
  { id: 'field-test', label: 'FIELD TEST' },
  { id: 'journal', label: 'JOURNAL' },
]

const MENU_LINKS = [
  { id: 'equipment', label: 'Equipment' },
  { id: 'field-test', label: 'Field Test' },
  { id: 'journal', label: 'Journal' },
  { id: 'about', label: 'About' },
]

const SPY_IDS = ['equipment', 'terrain', 'engineered', 'field-test', 'system', 'journal']

interface NavbarProps {
  onNavigate: (id: string) => void
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  /* compact header on scroll */
  useEffect(() => {
    const onScroll = () =>
      setScrolled((window.scrollY || document.documentElement.scrollTop) > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* scroll-spy */
  useEffect(() => {
    const sections = SPY_IDS.map((id) => document.getElementById(id)).filter(
      (s): s is HTMLElement => Boolean(s)
    )
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  /* lock scroll while the menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[80] border-b border-line bg-canvas transition-shadow duration-300">
      <div
        className="container-x flex items-center justify-between"
        style={{ height: scrolled ? '3.75rem' : 'var(--nav-h)' }}
      >
        <MagneticButton
          href="#top"
          onClick={() => go('top')}
          className="flex items-baseline font-bold tracking-wide text-ink"
        >
          FIELD<span className="text-signal">/</span>01
          <span className="ml-2 inline-block h-1.5 w-1.5 self-center rounded-full bg-signal" aria-hidden="true" />
        </MagneticButton>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {DESKTOP_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                go(link.id)
              }}
              className={`relative text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                active === link.id ? 'text-signal' : 'text-muted hover:text-signal'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
              open ? 'text-signal' : 'text-ink hover:text-signal'
            }`}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center text-2xl font-light leading-none md:hidden"
        >
          {open ? <span aria-hidden>×</span> : <span aria-hidden>−</span>}
        </button>
      </div>

      {/* ---- fullscreen menu ---- */}
      <div
        className={`fixed inset-0 top-[var(--nav-h)] z-[70] flex flex-col justify-between overflow-y-auto bg-canvas transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-x flex flex-1 flex-col justify-center gap-1 py-10">
          {MENU_LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                go(link.id)
              }}
              className="group flex items-baseline gap-5 border-b border-line py-3"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(14px)',
                transition: `opacity 0.5s cubic-bezier(0.22,0.61,0.36,1) ${
                  open ? 0.05 + i * 0.06 : 0
                }s, transform 0.5s cubic-bezier(0.22,0.61,0.36,1) ${
                  open ? 0.05 + i * 0.06 : 0
                }s`,
              }}
            >
              <span className="font-mono text-[0.72rem] text-signal">0{i + 1}</span>
              <span className="text-[clamp(1.8rem,6vw,3.4rem)] font-semibold uppercase leading-none tracking-tight text-ink transition-colors duration-200 group-hover:text-signal">
                {link.label}
              </span>
              <span className="ml-auto font-mono text-lg text-signal opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="container-x flex flex-wrap items-center justify-between gap-4 pb-8">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
            FIELD SYSTEM / 01
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
            LAT 46°32'12" N · LON 7°44'20" E
          </span>
          <a
            href="#next"
            onClick={(e) => {
              e.preventDefault()
              go('next')
            }}
            className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink hover:text-signal"
          >
            Contact →
          </a>
        </div>
      </div>
    </header>
  )
}