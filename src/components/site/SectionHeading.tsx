export function SectionHeading({
  eyebrow,
  title,
  intro,
  style,
}: {
  eyebrow?: string
  title?: string
  intro?: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <div style={style}>
      {title ? (
        <>
          <p className="font-mono text-xs font-bold tracking-[0.16em] text-teal-ink">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,3.4vw,2.6rem)] leading-[1.12] font-bold tracking-[-0.025em] text-navy">
            {title}
          </h2>
        </>
      ) : (
        <h2 className="font-mono text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-bold tracking-[0.12em] text-teal-ink">
          {eyebrow}
        </h2>
      )}
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  )
}
