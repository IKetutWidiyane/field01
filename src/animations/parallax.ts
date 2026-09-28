import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './utils'

gsap.registerPlugin(ScrollTrigger)

/** Subtle vertical parallax on the inner image of `.frame`. */
export function parallaxImage(el: Element, amount = 10) {
  if (prefersReducedMotion()) return
  const img = el.querySelector('img')
  if (!img) return
  gsap.fromTo(
    img,
    { yPercent: -amount, scale: 1.12 },
    {
      yPercent: amount,
      scale: 1.12,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
    }
  )
}

/** Image settle — zooms in slightly, then returns to 1 as you scroll. */
export function scaleOnScroll(
  el: Element,
  opts: { from?: number; to?: number; start?: string; end?: string } = {}
) {
  const { from = 1.14, to = 1, start = 'top bottom', end = 'top 45%' } = opts
  if (prefersReducedMotion()) return
  gsap.fromTo(
    el,
    { scale: from },
    {
      scale: to,
      ease: 'none',
      scrollTrigger: { trigger: el, start, end, scrub: 0.6 },
    }
  )
}