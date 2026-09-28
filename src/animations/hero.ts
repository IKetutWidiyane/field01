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

  // 1. image clip reveal and subtle scale
  if (media) {
    tl.fromTo(
      media,
      { clipPath: 'inset(10% 0% 0% 0%)', scale: 1.06, autoAlpha: 0 },
      { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, autoAlpha: 1, duration: 1.3, ease: 'power3.inOut' },
      0.15
    )
  }

  // 2. title reveal
  if (heading) {
    const words = heading.querySelectorAll('.word')
    if (words.length) {
      tl.fromTo(
        words,
        { yPercent: 110, rotateZ: 1 },
        { yPercent: 0, rotateZ: 0, duration: 0.95, stagger: 0.05, ease: 'power4.out' },
        0.35
      )
    } else {
      tl.fromTo(
        heading,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        0.35
      )
    }
  }

  // 3. copy fade up
  if (copy.length) {
    tl.fromTo(
      copy,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 },
      0.65
    )
  }

  // 4. CTA appear
  if (cta.length) {
    tl.fromTo(
      cta,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 },
      0.8
    )
  }

  // 5. technical metadata staggers
  if (meta.length) {
    tl.fromTo(
      meta,
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 },
      0.9
    )
  }

  return tl
}
