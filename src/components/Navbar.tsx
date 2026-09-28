import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import type Lenis from 'lenis'
import MagneticButton from './MagneticButton'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useScrollLock } from '../hooks/useScrollLock'

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

/**
 * The hamburger is three hairlines stacked in a 22 × 12 box. Closed they sit at
 * their offsets; open they travel to the same centre point before rotating, so
 * the X crosses on one axis instead of producing two parallel slashes.
 */
const HAIRLINES: { offset: number; angle: number; fades?: boolean }[] = [
  { offset: -5, angle: 45 },
  { offset: 0, angle: 0, fades: true },
  { offset: 5, angle: -45 },
]

interface NavbarProps {
  onNavigate: (id: string) => void
  lenisRef?: RefObject<Lenis | null>
}

export default function Navbar({ onNavigate, lenisRef }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  const headerRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  const isDesktop = useMediaQuery('(min-width: 768px)')
  const headerHeight = scrolled ? '3.75rem' : 'var(--nav-h)'

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

  /* the page behind the open menu must not scroll */
  useScrollLock(open, lenisRef)

  /* the menu is a modal surface: keep focus inside, Escape closes it */
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      const header = headerRef.current
      if (!header) return
      const items = Array.from(
        header.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      ).filter((el) => el.getClientRects().length > 0)
      if (!items.length) return

      const first = items[0]
      const last = items[items.length - 1]
      const current = document.activeElement
      if (event.shiftKey && (current === first || !header.contains(current))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && current === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus({ preventScroll: true })
    }, 80)

    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  /* hand focus back to the trigger when the menu closes */
  useEffect(() => {
    if (open) {
      wasOpen.current = true
      return
    }
    if (!wasOpen.current) return
    wasOpen.current = false
    triggerRef.current?.focus({ preventScroll: true })
  }, [open])

  /* never leave a fullscreen menu stranded behind the desktop layout */
  useEffect(() => {
    if (isDesktop) setOpen(false)
  }, [isDesktop])

  const go = useCallback(
    (id: string) => {
      setOpen(false)
      onNavigate(id)
    },
    [onNavigate]
  )

  const toggle = useCallback(() => setOpen((v) => !v), [])

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-[80] border-b border-line bg-canvas transition-shadow duration-300"
      style={{ paddingRight: 'var(--scroll-lock-gutter, 0px)' }}
    >
      {/* the bar keeps its own layer so it stays reachable above the open menu */}
      <div
        className="container-x relative z-[75] flex items-center justify-between"
        style={{ height: headerHeight }}
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
            onClick={toggle}
            aria-controls="field-menu"
            aria-expanded={open}
            className={`text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
              open ? 'text-signal' : 'text-ink hover:text-signal'
            }`}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>

        {/* mobile trigger — three hairlines folding into an X */}
        <button
          ref={triggerRef}
          type="button"
          onClick={toggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="field-menu"
          className="group -mr-[11px] flex items-center gap-3 md:hidden"
        >
          <span
            aria-hidden="true"
            className="font-mono text-[0.62rem] font-light uppercase tracking-[0.22em] text-muted transition-colors duration-300 group-hover:text-ink"
          >
            {open ? 'Close' : 'Menu'}
          </span>
          <span aria-hidden="true" className="grid h-11 w-11 place-items-center">
            <span className="relative block h-3 w-[22px]">
              {HAIRLINES.map((line, i) => (
                <span
                  key={i}
                  className={`absolute left-0 top-1/2 h-px w-full origin-center transition-[transform,opacity,background-color] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                    open ? 'bg-signal' : 'bg-ink group-hover:bg-signal'
                  }`}
                  style={
                    line.fades
                      ? { opacity: open ? 0 : 1, transform: `scaleX(${open ? 0.3 : 1})` }
                      : {
                          transform: open
                            ? `rotate(${line.angle}deg)`
                            : `translateY(${line.offset}px)`,
                        }
                  }
                />
              ))}
            </span>
          </span>
        </button>
      </div>

      {/* ---- fullscreen menu ---- */}
      <div
        ref={panelRef}
        id="field-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
        data-lenis-prevent
        style={{ paddingTop: headerHeight, paddingRight: 'var(--scroll-lock-gutter, 0px)' }}
        className={`fixed inset-0 z-[70] flex flex-col justify-between overflow-y-auto overscroll-contain bg-canvas transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
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