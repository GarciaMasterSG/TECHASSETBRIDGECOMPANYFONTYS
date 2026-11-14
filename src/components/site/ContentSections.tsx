import { Banknote, Building2, Cpu, Info } from 'lucide-react'

import { SectionHeading } from './SectionHeading'

const PROBLEMS = [
  {
    title: 'Equipment needs come early',
    body: 'Development-to-production transitions can require significant capital expenditure before steady sales.',
  },
  {
    title: 'Risk evidence is fragmented',
    body: 'Technical milestones, customer validation, collateral and guarantees are rarely presented in one decision-ready view.',
  },
  {
    title: 'Applications take time',
    body: "Companies can pursue unsuitable financing routes before understanding the lender's real decision criteria.",
  },
]

const STEPS = [
  {
    title: 'Describe the asset',
    body: 'What equipment is needed, why now, and what milestones will it unlock?',
  },
  {
    title: 'Map the risk',
    body: 'Capture revenue readiness, technical evidence, supplier terms and possible guarantees.',
  },
  {
    title: 'Compare pathways',
    body: 'Identify questions to explore around leasing, vendor finance, bank debt and export credit.',
  },
  {
    title: 'Prepare the case',
    body: 'Create a concise lender discussion brief and identify missing evidence before outreach.',
  },
]

const ECOSYSTEM = [
  {
    icon: Building2,
    title: 'Financing ecosystem',
    who: 'Brainport Financing Table · BOM · RVO',
    why: 'Explore referrals and identify where company preparation can be improved.',
  },
  {
    icon: Banknote,
    title: 'Finance providers',
    who: 'ABN AMRO · Rabobank · DLL · equipment-leasing specialists',
    why: 'Validate decision criteria, asset eligibility and acceptable documentation.',
  },
  {
    icon: Cpu,
    title: 'High-tech companies',
    who: 'Equipment-intensive SMEs at development-to-production and scale-up stages',
    why: 'Test real workflow pain points, time savings and willingness to pay.',
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE FINANCING MISMATCH"
          title="Promising technology. Expensive machinery. Limited cash-flow history."
          intro="Deep-tech SMEs can need specialised machinery before commercial revenue becomes predictable. Traditional underwriting may not fit that development path, and available financing instruments can be difficult to compare."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-[0_8px_28px_-12px_rgb(20_46_66/0.12)] transition-shadow hover:shadow-[0_16px_40px_-16px_rgb(20_46_66/0.22)] motion-reduce:transition-none"
            >
              <span className="font-mono text-3xl font-bold text-teal">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SolutionSection() {
  return (
    <section id="solution" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHAT WE PROPOSE"
          title="One focused equipment-financing readiness process."
          intro="Not another investor directory. A structured preparation service designed to help SMEs and qualified finance partners have more productive conversations."
        />
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-[2.75rem] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-teal/0 via-teal/50 to-teal/0 lg:block"
          />
          <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
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
        <div className="mt-8 flex gap-3 rounded-xl border-l-4 border-teal bg-accent p-5 text-[15px] leading-relaxed">
          <Info className="mt-0.5 size-5 shrink-0 text-teal-ink" />
          <p>
            <strong className="text-navy">Where we add value:</strong> our
            initial focus is the evidence and structuring work <em>before</em> a
            financing decision. Financing decisions remain with authorised
            lenders and partners.
          </p>
        </div>
      </div>
    </section>
  )
}

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="BRAINPORT ECOSYSTEM"
          title="Complement existing expertise. Don't duplicate it."
          intro="A potential future pilot would work with existing financing and innovation organisations, subject to their agreement. None of the organisations below are claimed as partners."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ECOSYSTEM.map(({ icon: Icon, title, who, why }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-teal-ink">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {who}
              </p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {why}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
