import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion, isDesktop } from './utils'

gsap.registerPlugin(ScrollTrigger)

/**
 * Pinned horizontal scroll (desktop only).
 * `track` is the element that translates; `track.parentElement` is the pinned scroller.
 */
export function horizontalScroll(track: HTMLElement, opts: { endPadding?: number } = {}) {
  const { endPadding = 0 } = opts
  if (prefersReducedMotion() || !isDesktop()) return null

  const scroller = track.parentElement
  if (!scroller) return null

  const getAmount = () => Math.max(0, track.scrollWidth - scroller.clientWidth)

  const tween = gsap.to(track, {
    x: () => -getAmount(),
    ease: 'none',
    scrollTrigger: {
      trigger: scroller,
      pin: true,
      scrub: 1,
      end: () => `+=${getAmount() + endPadding}`,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  })
  return tween
}