interface SectionLabelProps {
  index: string
  title: string
  className?: string
  /** hide the rule line */
  compact?: boolean
}

/** Editorial pre-label: `01 / THE TERRAIN`. */
export default function SectionLabel({ index, title, className = '', compact }: SectionLabelProps) {
  return (
    <p className={`eyebrow ${className}`}>
      <span className="eyebrow__index">{index}</span>
      {!compact && <span className="eyebrow__rule" aria-hidden="true" />}
      <span>{title}</span>
    </p>
  )
}