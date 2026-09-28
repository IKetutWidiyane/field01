interface TechnicalCalloutProps {
  number: string
  name: string
  body: string
  className?: string
}

/** Numbered engineering callout used in the System blueprint. */
export default function TechnicalCallout({ number, name, body, className = '' }: TechnicalCalloutProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-line bg-canvas font-mono text-[0.7rem] font-semibold text-muted">
          {number}
        </span>
        <span className="font-semibold uppercase tracking-[0.08em] text-ink">{name}</span>
      </div>
      <p className="mt-3 max-w-[30ch] font-mono text-[0.78rem] leading-relaxed text-muted">
        {body}
      </p>
    </div>
  )
}