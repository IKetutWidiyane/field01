import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { revealText, fadeUp } from './reveal'
import { parallaxImage, scaleOnScroll } from './parallax'

gsap.registerPlugin(ScrollTrigger)

/**
 * One-call cinematic section intro (AGENTS.MD §19 / DESIGN.MD §29).
 *
 * Markup contract:
 *   data-reveal-heading → masked word-by-word reveal (use on display headings)
 *   data-reveal         → fade + rise (intro copy / small blocks)
 *   data-parallax       → slow inner-image parallax (image frames)
 *   data-scale          → scale settle 1.08 → 1 (images)
 *
 * Every helper already respects `prefers-reduced-motion`, so calling this on
 * a root is always safe. Multiple invocations on the same section are ignored
 * by GSAP (it overwrites the tween, never duplicates).
 */
export function initSectionMotion(root: HTMLElement) {
  root.querySelectorAll('[data-reveal-heading]').forEach((el) => revealText(el))
  root.querySelectorAll('[data-reveal]').forEach((el) => fadeUp(el))
  root.querySelectorAll('[data-parallax]').forEach((el) => parallaxImage(el))
  root.querySelectorAll('[data-scale]').forEach((el) => scaleOnScroll(el))
}