import { useEffect, useRef } from 'react'
import { revealImage } from '../animations/reveal'
import { parallaxImage } from '../animations/parallax'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  parallax?: boolean
}

/**
 * .frame wrapper with clip-path + scale reveal (section 28 of AGENTS.MD).
 * Add aspect ratio via `className` (e.g. "aspect-[4/5]").
 */
export default function ImageReveal({ src, alt, className = '', parallax }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    revealImage(el)
    if (parallax) parallaxImage(el, 9)
  }, [parallax])

  return (
    <div ref={ref} className={`frame ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}