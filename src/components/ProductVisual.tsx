import type { Equipment } from '../types'

interface ProductVisualProps {
  product: Equipment
  className?: string
}

/** Large editorial product visual with the technical flag row. */
export default function ProductVisual({ product, className = '' }: ProductVisualProps) {
  return (
    <figure className={`flex flex-col gap-4 ${className}`}>
      <div className="frame aspect-[4/5] w-full rounded-[0.25rem]">
        <img src={product.image} alt={product.alt} loading="lazy" />
      </div>
      <figcaption
        aria-label={`${product.name} — ${product.flags.join(', ')}`}
        className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-3"
      >
        {product.flags.map((flag) => (
          <span key={flag} className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
            {flag}
          </span>
        ))}
      </figcaption>
    </figure>
  )
}