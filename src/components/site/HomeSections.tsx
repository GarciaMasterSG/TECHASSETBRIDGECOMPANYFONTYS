import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  Info,
  MessagesSquare,
  Scale,
  Search,
  Users,
} from 'lucide-react'

import ServiceBackground from '../../Images/serviceBackground.jpeg'

import { Button } from '@/components/ui/button'
import { SERVICES } from '@/lib/services'

import { SectionHeading } from './SectionHeading'

export function IntroSection() {
  const items = [
    {
      icon: Users,
      title: 'Who we are',
      body: 'A Brainport-based team from Fontys developing an equipment-financing preparation service. We sit between the company and the financier — on the preparation side.',
    },
    {
      icon: Search,
      title: 'Who we help',
      body: 'Equipment-intensive high-tech SMEs — in semiconductors, photonics, medtech, robotics and precision manufacturing — moving from development to production or scale-up.',
    },
    {
      icon: FileSearch,
      title: 'The problem we solve',
      body: 'Specialised machinery is often needed before revenue is predictable. Evidence is fragmented, structures are hard to compare, and time is lost on applications that were never a good fit.',
    },
  ]
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="INTRODUCTION"
          title="Building a Stronger Financing Case."
          intro="We help high-tech SMEs turn an equipment need into a clear, well-documented financing case — so conversations with financiers start from the right information."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[0_8px_28px_-12px_rgb(20_46_66/0.12)]"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-teal-ink">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28" style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      url(${ServiceBackground})
    `, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
  }}>
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="OUR SERVICES" />
          <Button asChild variant="outline" className="rounded-lg">
            <Link to="/services">
              View all service details <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-mono text-3xl font-bold text-teal">
                {s.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">{s.name}</h3>
              <dl className="mt-5 grid flex-1 gap-4 text-[15px]">
                <div>
                  <dt className="font-mono text-[11px] font-bold tracking-[0.14em] text-teal-ink">
                    WHAT YOU RECEIVE
                  </dt>
                  <dd className="mt-1 leading-relaxed text-foreground">
                    {s.receives}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] font-bold tracking-[0.14em] text-teal-ink">
                    WHY IT MATTERS
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">
                    {s.why}
                  </dd>
                </div>
              </dl>
              <Link
                to="/services"
                hash={s.id}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-ink hover:underline"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhySection() {
  const points = [
    {
      icon: Scale,
      title: 'Understand your options',
      body: 'See which financing structures may fit your equipment and stage — including alternatives to an ordinary bank loan.',
    },
    {
      icon: ClipboardCheck,
      title: 'Identify documentation gaps',
      body: 'Know what financiers typically ask for, and what is still missing, before you spend time on an application.',
    },
    {
      icon: MessagesSquare,
      title: 'Prepare for lender discussions',
      body: 'Arrive with one consistent case, the right evidence and specific questions — and avoid repeating the same preparation.',
    },
  ]
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-content items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="WHY TECHASSET BRIDGE"
            title="Structuring the Path to Financing"
            intro="We focus on the evidence and structuring work before a financing decision. That is where many equipment-intensive SMEs lose time — and where better preparation helps most."
          />
          <div className="mt-8 flex gap-3 rounded-xl border-l-4 border-teal bg-accent p-5 text-[15px] leading-relaxed">
            <Info className="mt-0.5 size-5 shrink-0 text-teal-ink" />
            <p>
              We are not a bank, lender or provider of guaranteed financing.
              Financing decisions always remain with the relevant financing
              providers.
            </p>
          </div>
        </div>
        <ul className="grid gap-4">
          {points.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-mint">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CtaBand({
  title = 'Ready to prepare your equipment financing case?',
  body = 'Tell us about your equipment need. We will get back to you to discuss whether and how we can help.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy px-6 py-12 text-white sm:px-12">
          <div className="grid-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_left,black,transparent_80%)]" />
          <h2 className="max-w-2xl text-[clamp(1.7rem,3vw,2.3rem)] leading-tight font-bold tracking-[-0.02em]">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-[#c4d6ea]">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-lg px-6 text-base font-semibold"
            >
              <Link to="/contact">
                Request a Consultation <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-lg border-white/25 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
