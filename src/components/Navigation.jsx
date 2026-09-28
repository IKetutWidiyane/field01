import { useEffect, useState } from 'react'
import './Navigation.css'

const LINKS = [
  { id: 'equipment', label: 'Equipment' },
  { id: 'field-test', label: 'Field Test' },
  { id: 'system', label: 'The System' },
  { id: 'journal', label: 'Journal' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || document.documentElement.scrollTop) > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* scroll-spy: highlight the section currently in view */
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
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

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__logo" href="#top" onClick={close}>
          FIELD<span className="nav__logo-slash">/</span>01
          <span className="nav__logo-dot" aria-hidden="true" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
            >
              {l.label}
            </a>
          ))}
          <a href="#equipment" className="btn btn--primary nav__cta" onClick={close}>
            Explore <span className="btn__arrow">→</span>
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="nav__mobile-link" onClick={close}>
            {l.label} <span className="btn__arrow">→</span>
          </a>
        ))}
        <a href="#equipment" className="btn btn--primary" onClick={close}>
          Explore Equipment <span className="btn__arrow">→</span>
        </a>
      </div>
    </header>
  )
}