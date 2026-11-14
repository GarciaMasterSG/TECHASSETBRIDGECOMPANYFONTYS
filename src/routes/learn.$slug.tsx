import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Clock, ShieldAlert } from 'lucide-react'

import { CtaBand } from '@/components/site/HomeSections'
import { PageHero } from '@/components/site/PageHero'
import { ARTICLES } from '@/lib/learn'

export const Route = createFileRoute('/learn/$slug')({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug)
    if (!article) throw notFound()
    return { article }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} | TechAsset Bridge` },
          { name: 'description', content: loaderData.article.summary },
        ]
      : [],
  }),
  component: ArticlePage,
})

function ArticlePage() {
  const { article } = Route.useLoaderData()
  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <main>
      <PageHero
        eyebrow={`LEARN & DISCOVER · ${article.category.toUpperCase()}`}
        title={article.title}
        intro={article.summary}
      >
        <p className="mt-6 flex items-center gap-1.5 text-sm text-[#c4d6ea]">
          <Clock className="size-4" /> {article.readMinutes} min read
        </p>
      </PageHero>

      <article className="mx-auto max-w-reading px-4 py-14 sm:px-6 md:py-20">
        <Link
          to="/learn"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-ink hover:underline"
        >
          <ArrowLeft className="size-4" /> All resources
        </Link>

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl leading-snug font-bold tracking-[-0.02em] text-navy">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p
                key={p}
                className="mt-4 text-[17px] leading-[1.75] text-foreground"
              >
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 grid gap-2.5 pl-1">
                {section.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[17px] leading-[1.7] text-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-teal"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div
          role="note"
          className="mt-12 flex gap-3 rounded-xl border border-teal/40 bg-accent p-5 text-[15px] leading-relaxed"
        >
          <ShieldAlert className="mt-0.5 size-5 shrink-0 text-teal-ink" />
          <p>
            This article is general information only and not financial, legal or
            tax advice. TechAsset Bridge is not a bank or lender; financing
            decisions remain with the relevant financing providers.
          </p>
        </div>
      </article>

      <section className="bg-secondary py-14 md:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy">Keep reading</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                to="/learn/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-teal/60 motion-reduce:transition-none"
              >
                <span className="font-mono text-xs font-bold tracking-[0.08em] text-teal-ink uppercase">
                  {a.category}
                </span>
                <span className="mt-3 flex-1 text-lg leading-snug font-bold text-navy">
                  {a.title}
                </span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-ink">
                  Read article <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
