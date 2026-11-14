import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

import { ContactForm } from '@/components/site/ContactForm'
import { LinkedInIcon } from '@/components/site/LinkedInIcon'
import { PageHero } from '@/components/site/PageHero'
import { SectionHeading } from '@/components/site/SectionHeading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CONTACT, SERVICE_OPTIONS } from '@/lib/site'

type ContactSearch = { service?: string }

export const Route = createFileRoute('/contact')({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const service = SERVICE_OPTIONS.find((s) => s === search.service)
    return service ? { service } : {}
  },
  head: () => ({
    meta: [
      { title: 'Contact & FAQ | TechAsset Bridge' },
      {
        name: 'description',
        content:
          'Request a consultation with TechAsset Bridge about your equipment financing needs, and read answers to frequently asked questions.',
      },
    ],
  }),
  component: ContactPage,
})

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What is TechAsset Bridge and who does it help?',
    a: 'TechAsset Bridge is an equipment-financing preparation service from a Fontys student team in Brainport. We help high-tech SMEs understand their financing position, explore which financing structures may be relevant and prepare focused conversations with banks, lessors and other financiers.',
  },
  {
    q: 'What types of companies can use TechAsset Bridge’s services?',
    a: 'Our services are designed for equipment-intensive high-tech SMEs — for example in semiconductors, photonics, medtech, robotics and precision manufacturing — that need specialised equipment to move from development to production or to scale up.',
  },
  {
    q: 'Does TechAsset Bridge provide loans or directly finance equipment?',
    a: 'No. TechAsset Bridge is not a bank, lender, leasing company or provider of guaranteed financing, and it does not provide regulated financial advice. We support the preparation; financing decisions always remain with the relevant financing providers.',
  },
  {
    q: 'What is an Equipment Finance Diagnostic?',
    a: (
      <>
        A structured first look at your situation: the equipment you need, your
        development stage, earlier financing attempts and the documentation gaps
        that matter most. The outcome is a clearer understanding of your
        financing readiness.{' '}
        <Link
          to="/services"
          hash="diagnostic"
          className="font-semibold text-teal-ink underline-offset-4 hover:underline"
        >
          Read more about the Diagnostic
        </Link>
        .
      </>
    ),
  },
  {
    q: 'What information should I prepare before contacting TechAsset Bridge?',
    a: (
      <>
        Nothing formal is needed for a first conversation. It helps to know
        roughly which equipment you need and its approximate cost, your current
        development and commercial stage, and any financing you have already
        explored. Our{' '}
        <Link
          to="/learn"
          hash="checklists"
          className="font-semibold text-teal-ink underline-offset-4 hover:underline"
        >
          practical checklists
        </Link>{' '}
        show what is useful to collect later on.
      </>
    ),
  },
  {
    q: 'Does TechAsset Bridge guarantee financing approval?',
    a: 'No. We cannot guarantee or predict any financing outcome. Better preparation can make conversations more focused, but every financier applies its own criteria and makes its own decision.',
  },
]

function ContactPage() {
  const { service } = Route.useSearch()

  return (
    <main>
      <PageHero
        title="CONTACT US"
        intro="Ask a question, request information or discuss your equipment need. Send us a short description and we will get back to you."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-10 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.65fr]">
          <ContactForm key={service ?? 'none'} defaultService={service} />

          <aside
            aria-labelledby="contact-info-title"
            className="grid content-start gap-5"
          >
            <div className="rounded-2xl bg-navy p-7 text-white">
              <h2
                id="contact-info-title"
                className="font-mono text-xs font-bold tracking-[0.14em] text-mint"
              >
                CONTACT INFORMATION
              </h2>
              <ul className="mt-5 grid gap-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-mint" />
                  {CONTACT.email ? (
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  ) : (
                    <span className="text-[#c4d6ea]">
                      Business email — coming soon. Please use the form.
                    </span>
                  )}
                </li>
                {CONTACT.phone && (
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-mint" />
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                      className="hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-mint" />
                  {CONTACT.location}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
              <p className="font-bold text-navy">Before you send</p>
              <p className="mt-2">
                TechAsset Bridge provides financing support and preparation
                only. It is not a bank or lender and cannot guarantee any
                financing outcome. Financing decisions remain with the relevant
                financing providers.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-reading px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Accordion
            type="single"
            collapsible
            className="mt-10 rounded-2xl border border-border bg-card px-6"
          >
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-base font-bold text-navy">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
