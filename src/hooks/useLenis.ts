import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Lenis smooth scrolling synced with GSAP ScrollTrigger through a single
 * animation loop (see section 20 of AGENTS.MD):
 *
 *   Lenis → requestAnimationFrame → GSAP ticker → ScrollTrigger
 */
export function useLenis(enabled: boolean) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [enabled])

  return lenisRef
}

/** Smooth-scroll to an anchor id, preferring the Lenis instance. */
export function scrollToId(id: string, lenis: Lenis | null) {
  const target = document.querySelector(id)
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.4 })
  } else {
    ;(target as HTMLElement).scrollIntoView({ behavior: 'smooth' })
  }
}