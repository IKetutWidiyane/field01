/** Shared animation guards. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isDesktop = (px = 900) =>
  typeof window !== 'undefined' && window.innerWidth >= px