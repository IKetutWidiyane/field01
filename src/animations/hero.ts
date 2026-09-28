import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './utils'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hero load sequence (section 10 of AGENTS.MD):
 * heading reveals → copy fades up → image scales 1.05 → 1 →
 * metadata staggers → CTA appears.
 */
export function initHeroLoad(root: HTMLElement) {
  const q = gsap.utils.selector(root)
  const heading = q('[data-hero-heading]')[0]
  const copy = q('[data-hero-copy]')
  const media = q('[data-hero-media]')[0]
  const meta = q('[data-hero-meta] > *')
  const cta = q('[data-hero-cta]')

  if (prefersReducedMotion()) return null

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  if (heading) {
    tl.fromTo(
      heading.querySelectorAll('.word'),
      { yPercent: 120 },
      { yPercent: 0, duration: 1, stagger: 0.06, ease: 'power4.out' },
      0.1
    )
  }
  if (copy.length) {
    tl.fromTo(
      copy,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 },
      0.5
    )
  }
  if (cta.length) {
    tl.fromTo(
      cta,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 },
      0.65
    )
  }
  if (media) {
    tl.fromTo(media, { scale: 1.05 }, { scale: 1, duration: 1.4, ease: 'power2.out' }, 0.2)
  }
  if (meta.length) {
    tl.fromTo(
      meta,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
      0.8
    )
  }

  return tl
}

/** Hero scroll — image grows, heading drifts up, metadata shifts. */
export function initHeroScroll(root: HTMLElement) {
  const q = gsap.utils.selector(root)
  const media = q('[data-hero-media]')[0]
  const heading = q('[data-hero-heading]')[0]
  const meta = q('[data-hero-meta]')

  if (prefersReducedMotion()) return

  if (media) {
    gsap.to(media, {
      yPercent: 12,
      scale: 1.08,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    })
  }
  if (heading) {
    gsap.to(heading, {
      yPercent: -20,
      autoAlpha: 0.55,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    })
  }
  if (meta.length) {
    gsap.to(meta, {
      yPercent: -35,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    })
  }
}