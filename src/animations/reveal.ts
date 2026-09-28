import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './utils'

gsap.registerPlugin(ScrollTrigger)

export interface RevealOpts {
  delay?: number
  duration?: number
  y?: number
  stagger?: number
  start?: string
}

/** Scroll-triggered fade + rise. */
export function fadeUp(el: Element, opts: RevealOpts = {}) {
  if (prefersReducedMotion()) return
  const { delay = 0, duration = 0.9, y = 34, start = 'top 86%' } = opts
  gsap.fromTo(
    el,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start },
    }
  )
}

/** Staggered fade + rise for a group of elements. */
export function staggerReveal(elements: Element[], opts: RevealOpts = {}) {
  if (!elements.length || prefersReducedMotion()) return
  const { delay = 0, stagger = 0.09, duration = 0.9, y = 36, start = 'top 88%' } = opts
  const trigger = elements[0].parentElement ?? elements[0]
  gsap.fromTo(
    elements,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: { trigger, start },
    }
  )
}

/** Vertical clip-path reveal. */
export function clipReveal(el: Element, opts: RevealOpts = {}) {
  if (prefersReducedMotion()) return
  const { delay = 0, duration = 1.1, start = 'top 84%' } = opts
  gsap.fromTo(
    el,
    { clipPath: 'inset(0% 0% 100% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration,
      delay,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start },
    }
  )
}

/** Image reveal: clip-path + scale settle (section 28 of AGENTS.MD). */
export function revealImage(el: Element, opts: RevealOpts = {}) {
  const img = el.querySelector('img')
  if (prefersReducedMotion()) {
    if (img) gsap.set(img, { scale: 1 })
    return
  }
  const { delay = 0, duration = 1.1, start = 'top 85%' } = opts
  gsap.fromTo(
    el,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration,
      delay,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start },
    }
  )
  if (img) {
    gsap.fromTo(
      img,
      { scale: 1.08 },
      {
        scale: 1,
        duration: duration + 0.3,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start },
      }
    )
  }
}

/** Split an element's text into `.word-mask > .word` spans (no animation). */
export function splitWords(el: Element) {
  const text = el.textContent?.replace(/\s+/g, ' ').trim()
  if (!text) return
  el.textContent = ''
  el.setAttribute('aria-label', text)
  const frag = document.createDocumentFragment()
  text.split(' ').forEach((word, i) => {
    const mask = document.createElement('span')
    mask.className = 'word-mask'
    if (i > 0) mask.style.marginLeft = '0.24em'
    const inner = document.createElement('span')
    inner.className = 'word'
    inner.textContent = word
    mask.appendChild(inner)
    frag.appendChild(mask)
  })
  el.appendChild(frag)
}

/** Word-by-word masked text reveal. */
export function revealText(el: Element, opts: RevealOpts = {}) {
  splitWords(el)
  if (prefersReducedMotion()) return
  const { delay = 0, stagger = 0.055, start = 'top 88%' } = opts
  gsap.fromTo(
    el.querySelectorAll('.word'),
    { yPercent: 120 },
    {
      yPercent: 0,
      duration: 0.95,
      delay,
      stagger,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start },
    }
  )
}