import { createFileRoute } from '@tanstack/react-router'
import {
  ClipboardCheck,
  Eye,
  FileSearch,
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
} from 'lucide-react'

import ourTeam from '../Images/ourTeam.jpeg'
import { CtaBand } from '@/components/site/HomeSections'
import { LinkedInIcon } from '@/components/site/LinkedInIcon'
import { PageHero } from '@/components/site/PageHero'
import { SectionHeading } from '@/components/site/SectionHeading'
import { CHALLENGES } from '@/lib/learn'
import { TEAM } from '@/lib/site'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | TechAsset Bridge' },
      {
        name: 'description',
        content:
          'Who TechAsset Bridge is, why it exists, and how it helps high-tech SMEs in Brainport prepare for equipment financing.',
      },
    ],
  }),
  component: AboutPage,
})

const APPROACH = [
  {
    icon: FileSearch,
    step: '01',
    title: 'Assess',
    body: 'We map the equipment need, the development stage, earlier financing attempts and the documentation gaps — so you know where you stand.',
  },
  {
    icon: Scale,
    step: '02',
    title: 'Compare',
    body: 'We explain which financing structures may be worth exploring, what they usually require, and how they differ from an ordinary bank loan.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Prepare',
    body: 'We help bring the evidence together in one consistent discussion pack, with specific questions for each financier you plan to approach.',
  },
]

const VALUES = [
  {
    icon: Eye,
    title: 'Transparency',
    body: 'We are open about what we do and what we don’t do. We are not a lender, and we never suggest an outcome is certain.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity',
    body: 'Financing language can be confusing. We explain options in plain terms so your team can make informed choices.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    body: 'We work carefully with your information, keep it confidential and keep one consistent version of your case.',
  },
  {
    icon: Handshake,
    title: 'Practical support',
    body: 'Our output is meant to be used: checklists, comparisons and documents you can take straight into a conversation.',
  },
]

function initials(name: string) {
  const parts = name.split(' ').filter(Boolean)
  return `${parts[0]?.[0] ?? ''}${parts.at(-1)?.[0] ?? ''}`.toUpperCase()
}

function AboutPage() {
  return (
    <main>
      <PageHero
        title="OUR COMPANY"
        intro="TechAsset Bridge helps equipment-intensive high-tech SMEs prepare clearer financing cases — before they talk to banks, lessors and other financiers."
      />

      {/* Who we are + mission */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="A PREPARATION PARTNER ON THE COMPANY'S SIDE"
            />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              TechAsset Bridge is a Brainport-based team from Fontys University of Applied Sciences. We focus
              on one specific moment in a high-tech company’s growth: the step
              from development to production, when specialised equipment is
              needed and the financing question becomes urgent.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We don’t lend money and we don’t decide on financing. We help
              companies understand their position, explore relevant options and
              prepare the information financiers are likely to ask for.
            </p>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
            <div className="grid-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_left,black,transparent_85%)]" />
            <p className="font-mono text-xs text-center font-bold tracking-[0.16em] text-mint">
              OUR MISSION
            </p>
            <p className="mt-4 font-display text-center text-[clamp(1.5rem,2.6vw,2rem)] leading-snug font-bold tracking-[-0.02em]">
              Our mission is to bridge the gap between technological potential and financial opportunities, helping 
              high-tech SMEs make informed decisions and build a stronger foundation for 
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            eyebrow="THE PROBLEM WE ADDRESS"
            title="Specialised equipment, early-stage numbers, scattered evidence"
            intro="Financing specialised equipment is different from financing general business needs. Companies often face several of these difficulties at once:"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c) => (
              <li
                key={c.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="font-bold text-navy">{c.title}</p>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="Assessment, comparison and preparation"
            intro="Our three services build on each other. Companies can start with any of them, depending on how far their preparation already is."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {APPROACH.map(({ icon: Icon, step, title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-card p-7 shadow-[0_8px_28px_-12px_rgb(20_46_66/0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-teal-ink">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-sm font-bold text-teal-ink">
                    {step}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${ourTeam})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="py-16 bg-secondary md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            style={{textAlign: 'center', margin : '0 auto'}}
            title="OUR TEAM"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {TEAM.map((m) => (
              <li
                key={m.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center"
              >
                {m.photo ? (
                  <img
                    src={`${m.photo}`}
                    alt={`Portrait of ${m.name}`}
                    width={120}
                    height={120}
                    loading="lazy"
                    className="size-28 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="grid size-28 place-items-center rounded-full bg-navy font-display text-3xl font-bold text-mint"
                  >
                    {initials(m.name)}
                  </span>
                )}
                <p className="mt-5 font-bold text-navy">{m.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="mt-3 text-teal-ink hover:text-navy"
                  >
                    <LinkedInIcon className="size-5" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
