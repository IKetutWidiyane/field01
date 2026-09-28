import { useEffect } from 'react'
import type { RefObject } from 'react'
import type Lenis from 'lenis'

/**
 * Freezes page scrolling while `locked` is true.
 *
 * Three layers, because one is never enough:
 *   1. `lenis.stop()`      — halts the smooth-scroll engine (Lenis keeps
 *                            scrolling on wheel/touch even when
 *                            `overflow: hidden` is set on the page).
 *   2. `overflow: hidden`  — blocks native scroll on html + body, and the
 *                            lost scrollbar is compensated with padding-right
 *                            so the fixed header does not shift.
 *   3. iOS freeze          — Safari ignores `overflow: hidden` on body, so on
 *                            coarse-pointer devices the body is pinned with
 *                            `position: fixed` at the current offset and the
 *                            offset is restored on release.
 *
 * Elements that should stay scrollable inside a locked page (e.g. the mobile
 * menu panel) opt out of Lenis with `data-lenis-prevent`.
 */
export function useScrollLock(locked: boolean, lenisRef?: RefObject<Lenis | null>) {
  useEffect(() => {
    if (!locked) return

    const lenis = lenisRef?.current ?? null
    const html = document.documentElement
    const body = document.body
    const scrollbar = window.innerWidth - html.clientWidth
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    const scrollY = window.scrollY || html.scrollTop
    const scrollBehavior = html.style.scrollBehavior

    const previous = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
      gutter: html.style.getPropertyValue('--scroll-lock-gutter'),
    }

    lenis?.stop()
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    if (scrollbar > 0) {
      body.style.paddingRight = `${scrollbar}px`
      /* fixed elements (header, menu panel) do not react to body padding,
         so they read the same compensation from this variable */
      html.style.setProperty('--scroll-lock-gutter', `${scrollbar}px`)
    }

    if (coarsePointer) {
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.left = '0'
      body.style.width = '100%'
    }

    return () => {
      /* layout is restored before the scroll position, otherwise the browser
         clamps the value against the frozen page */
      html.style.overflow = previous.htmlOverflow
      body.style.overflow = previous.bodyOverflow
      body.style.paddingRight = previous.paddingRight
      if (previous.gutter) html.style.setProperty('--scroll-lock-gutter', previous.gutter)
      else html.style.removeProperty('--scroll-lock-gutter')

      if (coarsePointer) {
        body.style.position = previous.position
        body.style.top = previous.top
        body.style.left = previous.left
        body.style.width = previous.width
        /* `scroll-behavior: smooth` would animate this jump */
        html.style.scrollBehavior = 'auto'
        window.scrollTo(0, scrollY)
        html.style.scrollBehavior = scrollBehavior
        /* re-sync the engine: while the body was pinned, the document offset
           read as 0 and Lenis would resume from a stale value */
        lenis?.resize()
        lenis?.scrollTo(scrollY, { immediate: true, force: true })
      }

      lenis?.start()
    }
  }, [locked, lenisRef])
}
