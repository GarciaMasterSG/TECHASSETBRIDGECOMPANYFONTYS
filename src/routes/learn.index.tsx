import { createFileRoute, Link } from '@tanstack/react-router'
import otherBackground from '../Images/ourServicesBackground.jpeg'
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckSquare,
  Clock,
  Download,
  FileText,
} from 'lucide-react'

import { CtaBand } from '@/components/site/HomeSections'
import { PageHero } from '@/components/site/PageHero'
import { SectionHeading } from '@/components/site/SectionHeading'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ARTICLES,
  CHALLENGES,
  CHECKLISTS,
  DOWNLOADS,
  GLOSSARY,
  STRUCTURES,
} from '@/lib/learn'

export const Route = createFileRoute('/learn/')({
  head: () => ({
    meta: [
      { title: 'Learn & Discover | TechAsset Bridge' },
      {
        name: 'description',
        content:
          'Articles, financing guides, checklists, a glossary and free downloads about equipment financing for high-tech SMEs.',
      },
    ],
  }),
  component: LearnPage,
})

const JUMP_LINKS = [
  { href: '#articles', label: 'Articles' },
  { href: '#guides', label: 'Financing guides' },
  { href: '#challenges', label: 'Challenges' },
  { href: '#checklists', label: 'Checklists' },
  { href: '#glossary', label: 'Glossary' },
  { href: '#downloads', label: 'Downloads' },
]

function LearnPage() {
  return (
    <main>
      <PageHero
        title="GUIDES & RESOURCES"
        intro="Plain-language articles, guides and checklists about financing specialised equipment — the challenges, the options, and how to prepare. General information only, not financial, legal or tax advice."
      >
        <nav
          aria-label="Sections on this page"
          className="mt-8 flex flex-wrap gap-2"
        >
          {JUMP_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 motion-reduce:transition-none"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Articles */}
      <section id="articles" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            eyebrow="ARTICLES & INSIGHTS"
            title="Explaining Equipment Financing"
            intro="Short reads on equipment financing, high-tech SMEs and growth — from what financiers look at to the documents that often go missing."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <article
                key={a.slug}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_8px_28px_-12px_rgb(20_46_66/0.12)] transition-colors hover:border-teal/60 motion-reduce:transition-none"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent px-2.5 py-1 font-mono font-bold tracking-[0.08em] text-teal-ink uppercase">
                    {a.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3.5" /> {a.readMinutes} min read
                  </span>
                </div>
                <h3 className="mt-5 text-xl leading-snug font-bold text-navy">
                  <Link
                    to="/learn/$slug"
                    params={{ slug: a.slug }}
                    className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                  >
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                  {a.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-ink">
                  Read article{' '}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Financing guides */}
      <section style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%), url(${otherBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} id="guides" className="scroll-mt-20 bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            eyebrow="FINANCING GUIDES"
            title="Common financing structures at a glance"
            intro="How the main structures work and what financiers often ask about. Conditions differ per provider — always verify them directly."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
            <Table className="min-w-[760px] text-[15px]">
              <TableHeader>
                <TableRow className="bg-accent/60 hover:bg-accent/60">
                  <TableHead className="w-[18%] px-5 py-3 font-bold text-navy">
                    Structure
                  </TableHead>
                  <TableHead className="w-[38%] px-5 py-3 font-bold text-navy">
                    How it works
                  </TableHead>
                  <TableHead className="w-[22%] px-5 py-3 font-bold text-navy">
                    Often asked about
                  </TableHead>
                  <TableHead className="w-[22%] px-5 py-3 font-bold text-navy">
                    Worth considering
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {STRUCTURES.map((s) => (
                  <TableRow key={s.name}>
                    <TableCell className="px-5 py-4 align-top font-semibold whitespace-normal text-navy">
                      {s.name}
                    </TableCell>
                    <TableCell className="px-5 py-4 align-top leading-relaxed whitespace-normal">
                      {s.how}
                    </TableCell>
                    <TableCell className="px-5 py-4 align-top leading-relaxed whitespace-normal text-muted-foreground">
                      {s.oftenAsked}
                    </TableCell>
                    <TableCell className="px-5 py-4 align-top leading-relaxed whitespace-normal text-muted-foreground">
                      {s.consider}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-white">
            Want the full explanation? Read{' '}
            <Link
              to="/learn/$slug"
              params={{
                slug: 'understanding-leasing-loans-and-other-structures',
              }}
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              Understanding Leasing, Loans, and Other Financing Structures
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            eyebrow="FREQUENTLY DISCUSSED CHALLENGES"
            title="Why high-tech SMEs can struggle to finance equipment"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-accent text-teal-ink">
                  <AlertTriangle className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section
        id="checklists"
        className="scroll-mt-20 bg-secondary py-16 md:py-24"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            eyebrow="PRACTICAL CHECKLISTS"
            title="What to prepare before approaching a financier"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {CHECKLISTS.map((list) => (
              <div
                key={list.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="text-lg font-bold text-navy">{list.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {list.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[15px] leading-relaxed"
                    >
                      <CheckSquare className="mt-0.5 size-4.5 shrink-0 text-teal-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section
        id="downloads"
        className="scroll-mt-20 py-16 md:py-24"
      >
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading
            eyebrow="DOWNLOADABLE RESOURCES"
            title="Free guides, checklists and templates"
            intro="Plain-text files you can open in any editor, fill in and share with your team."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {DOWNLOADS.map((d) => (
              <li
                key={d.file}
                className="flex flex-col rounded-2xl border border-border bg-card p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-navy text-mint">
                  <FileText className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{d.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <a
                  href={d.file}
                  download
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-input bg-background px-5 text-sm font-semibold text-navy transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none"
                >
                  <Download className="size-4" /> Download (.txt)
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            All resources are general information only and do not constitute
            financial, legal or tax advice.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want help applying this to your equipment case?"
        body="Tell us what you need to finance and where you are in the process. We will suggest a sensible starting point."
      />
    </main>
  )
}
