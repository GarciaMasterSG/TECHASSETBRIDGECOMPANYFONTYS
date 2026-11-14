import otherBackground from '../../Images/ourServicesBackground.jpeg'

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string
  title: React.ReactNode
  intro?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section style={{ backgroundImage: `linear-gradient(to right, rgba(30, 58, 110, 1) 20%, rgba(30, 58, 110, 0) 100%), url(${otherBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-24">
        <p className="font-mono text-xs font-bold tracking-[0.16em] text-mint">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#c4d6ea]">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
