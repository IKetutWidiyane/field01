import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './utils'

gsap.registerPlugin(ScrollTrigger)

/** Subtle vertical parallax on the inner image of `.frame`. */
export function parallaxImage(el: Element, amount = 14) {
  if (prefersReducedMotion()) return
  const img = el.querySelector('img')
  if (!img) return
  gsap.fromTo(
    img,
    { yPercent: -amount, scale: 1.15 },
    {
      yPercent: amount,
      scale: 1.15,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
    }
  )
}

/** Parallax floating on any element (shifts at rate relative to scroll). */
export function parallaxElement(el: Element, yPercent = 20, scrub = 1) {
  if (prefersReducedMotion()) return
  gsap.fromTo(
    el,
    { yPercent: -yPercent / 2 },
    {
      yPercent: yPercent / 2,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub },
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
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start, end, scrub: 0.8 },
    }
  )
}

/** Multi-layer cinematic hero parallax */
export function initHeroCinematicParallax(root: HTMLElement) {
  if (prefersReducedMotion()) return
  const q = gsap.utils.selector(root)
  const media = q('[data-hero-media]')[0]
  const heading = q('[data-hero-heading]')[0]
  const copy = q('[data-hero-copy]')[0]
  const meta = q('[data-hero-meta]')[0]

  if (media) {
    gsap.to(media, {
      yPercent: 18,
      scale: 1.05,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 1.2 },
    })
  }

  if (heading) {
    gsap.to(heading, {
      yPercent: -28,
      opacity: 0.4,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 0.8 },
    })
  }

  if (copy) {
    gsap.to(copy, {
      yPercent: -15,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 0.8 },
    })
  }

  if (meta) {
    gsap.to(meta, {
      yPercent: -35,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 1 },
    })
  }
}