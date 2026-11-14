import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Check, ShieldAlert, Target } from 'lucide-react'

import { CtaBand } from '@/components/site/HomeSections'
import { PageHero } from '@/components/site/PageHero'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/lib/services'
import { SectionHeading } from '../components/site/SectionHeading'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Our Services | TechAsset Bridge' },
      {
        name: 'description',
        content:
          'Equipment Finance Diagnostic, Financing Structure Comparison and Lender Discussion Pack — preparation services for high-tech SMEs seeking equipment financing.',
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  const steps = [
    {
      title: 'Assess',
      body: 'We review your equipment need, development stage, earlier financing attempts and the documents you already have.',
    },
    {
      title: 'Compare',
      body: 'We outline the financing structures that may be relevant, with their typical requirements, advantages and drawbacks.',
    },
    {
      title: 'Prepare',
      body: 'We help you assemble a focused lender discussion pack and the questions to ask each financier.',
    },
  ]
  return (
    <main>
      <PageHero
        title="OUR PACKAGES"
        intro="Three services that build on each other: understand your readiness, compare the structures that may fit, and prepare focused conversations with financiers. Use one, or all three."
      >
        <nav
          aria-label="Services on this page"
          className="mt-8 flex flex-wrap gap-2"
        >
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 motion-reduce:transition-none"
            >
              {s.number} · {s.name}
            </a>
          ))}
        </nav>
      </PageHero>
      <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="Three steps from equipment need to lender conversation."
        />
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-[2.75rem] right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-teal/0 via-teal/50 to-teal/0 md:block"
          />
          <ol className="relative grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="relative grid size-10 place-items-center rounded-full bg-navy font-display text-lg font-bold text-mint ring-4 ring-secondary">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

      <div className="mx-auto max-w-content px-4 pt-12 sm:px-6">
        <div
          role="note"
          className="flex gap-3 rounded-xl border border-teal/40 bg-accent p-5 text-[15px] leading-relaxed text-foreground"
        >
          <ShieldAlert className="mt-0.5 size-5 shrink-0 text-teal-ink" />
          <p>
            <strong className="text-navy">Important:</strong> TechAsset Bridge
            provides financing support and preparation services. It is not a
            bank, lender, or provider of guaranteed financing, and it does not
            give regulated financial advice. Financing decisions remain with
            the relevant financing providers.
          </p>
        </div>
      </div>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${s.id}-title`}
          className={`scroll-mt-20 py-16 md:py-24 ${i % 2 === 1 ? 'bg-secondary' : ''}`}
        >
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-mono text-xs font-bold tracking-[0.16em] text-teal-ink">
                  SERVICE {s.number}
                </p>
                <h2
                  id={`${s.id}-title`}
                  className="mt-3 text-[clamp(1.85rem,3.4vw,2.6rem)] leading-[1.12] font-bold tracking-[-0.025em] text-navy"
                >
                  {s.name}
                </h2>
                <p className="mt-2 text-lg font-medium text-teal-ink">
                  {s.short}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {s.explanation}
                </p>

                <h3 className="mt-10 font-mono text-xs font-bold tracking-[0.14em] text-navy">
                  WHAT IT INCLUDES
                </h3>
                <ul className="mt-4 grid gap-4">
                  {s.includes.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-border bg-card p-5"
                    >
                      <p className="font-bold text-navy">{item.title}</p>
                      <p className="mt-1.5 leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="grid content-start gap-5">
                <div className="rounded-2xl bg-navy p-6 text-white">
                  <p className="flex items-center gap-2 font-mono text-xs font-bold tracking-[0.14em] text-mint">
                    <Target className="size-4" /> EXPECTED OUTCOME
                  </p>
                  <p className="mt-3 text-lg leading-relaxed">{s.outcome}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-bold text-navy">Suitable for</h3>
                  <CheckList items={s.suitableFor} />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-bold text-navy">What you provide</h3>
                  <CheckList items={s.youProvide} />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-lg px-6 font-semibold"
                  >
                    <Link to="/contact" search={{ service: s.name }}>
                      Request This Service <ArrowRight />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-lg px-6"
                  >
                    <Link to="/contact" hash="faq">
                      Read the FAQ
                    </Link>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure which service fits?"
        body="Describe your equipment need and where you are in the process. We will suggest a sensible starting point."
      />
    </main>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed">
          <Check className="mt-1 size-4 shrink-0 text-teal-ink" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
