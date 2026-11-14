import { useMemo, useState, type FormEvent } from 'react'
import {
  Check,
  ClipboardCopy,
  Download,
  FileText,
  Lock,
  RotateCcw,
} from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  ASSET_TYPES,
  EVIDENCE,
  SECTORS,
  STAGES,
  buildBrief,
  type EvidenceId,
  type ReadinessInput,
  type StageValue,
} from '@/lib/readiness'

import { SectionHeading } from './SectionHeading'

const initialInput: ReadinessInput = {
  company: '',
  sector: SECTORS[0],
  amount: 2000000,
  stage: 'pre',
  asset: ASSET_TYPES[0],
  evidence: {},
}

const selectClass =
  'h-11 w-full rounded-lg border border-input bg-white px-3 text-[15px] text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40'

export function ReadinessExplorer() {
  const [input, setInput] = useState<ReadinessInput>(initialInput)
  const [amountText, setAmountText] = useState(String(initialInput.amount))
  const [generated, setGenerated] = useState(false)
  const [copied, setCopied] = useState(false)

  const brief = useMemo(() => buildBrief(input), [input])
  const pct = Math.round((brief.indicated / brief.total) * 100)

  function update<K extends keyof ReadinessInput>(
    key: K,
    value: ReadinessInput[K],
  ) {
    setInput((prev) => ({ ...prev, [key]: value }))
    setCopied(false)
  }

  function toggleEvidence(id: EvidenceId, checked: boolean) {
    setInput((prev) => ({
      ...prev,
      evidence: { ...prev.evidence, [id]: checked },
    }))
    setCopied(false)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setGenerated(true)
    if (window.matchMedia('(max-width: 1023px)').matches) {
      document
        .getElementById('brief')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief.text)
      setCopied(true)
      toast.success('Discussion brief copied to clipboard')
    } catch {
      toast.error('Copy failed — use “Download .txt” instead')
    }
  }

  function downloadBrief() {
    const blob = new Blob([brief.text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const slug = brief.company
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    a.href = url
    a.download = `techasset-brief-${slug || 'company'}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  function reset() {
    setInput(initialInput)
    setAmountText(String(initialInput.amount))
    setGenerated(false)
    setCopied(false)
  }

  return (
    <section id="assessment" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="INTERACTIVE DEMO"
          title="Equipment finance readiness explorer"
          intro="Enter an illustrative case. The explorer identifies documentation gaps and questions to discuss with a professional. It does not assess creditworthiness or determine eligibility."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-[0_8px_28px_-12px_rgb(20_46_66/0.12)] sm:p-8"
          >
            <h3 className="text-xl font-bold text-navy">
              Describe your financing need
            </h3>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="company">Company / project name</Label>
                <Input
                  id="company"
                  className="h-11 bg-white"
                  placeholder="Example: Advanced Battery Systems"
                  maxLength={120}
                  value={input.company}
                  onChange={(e) => update('company', e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sector">Technology sector</Label>
                <select
                  id="sector"
                  className={selectClass}
                  value={input.sector}
                  onChange={(e) => update('sector', e.target.value)}
                >
                  {SECTORS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="asset">Equipment type</Label>
                <select
                  id="asset"
                  className={selectClass}
                  value={input.asset}
                  onChange={(e) => update('asset', e.target.value)}
                >
                  {ASSET_TYPES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Equipment investment (€)</Label>
                <Input
                  id="amount"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="off"
                  required
                  className="h-11 bg-white"
                  value={amountText}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, '')
                    setAmountText(digits)
                    update('amount', digits === '' ? NaN : Number(digits))
                  }}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stage">Commercial stage</Label>
                <select
                  id="stage"
                  className={selectClass}
                  value={input.stage}
                  onChange={(e) =>
                    update('stage', e.target.value as StageValue)
                  }
                >
                  {STAGES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset className="mt-7">
              <legend className="text-sm font-semibold text-navy">
                Evidence you already have
              </legend>
              <div className="mt-3 grid gap-2">
                {EVIDENCE.map((e) => {
                  const checked = !!input.evidence[e.id]
                  return (
                    <label
                      key={e.id}
                      htmlFor={`ev-${e.id}`}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3.5 py-3 text-[15px] transition-colors motion-reduce:transition-none ${checked ? 'border-teal/50 bg-accent' : 'border-border bg-white hover:border-teal/30'}`}
                    >
                      <Checkbox
                        id={`ev-${e.id}`}
                        checked={checked}
                        onCheckedChange={(v) =>
                          toggleEvidence(e.id, v === true)
                        }
                      />
                      {e.label}
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-7 flex gap-3">
              <Button
                type="submit"
                size="lg"
                className="h-12 flex-1 rounded-lg text-base font-semibold"
              >
                <FileText /> Generate discussion brief
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-12 rounded-lg"
                onClick={reset}
                aria-label="Reset form"
              >
                <RotateCcw />
              </Button>
            </div>
          </form>

          {/* Result */}
          <div
            id="brief"
            aria-live="polite"
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-[#f7fbfe] lg:sticky lg:top-24"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border bg-navy px-6 py-4 text-white sm:px-8">
              <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-mint">
                ILLUSTRATIVE OUTPUT
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#a7bdd6]">
                <Lock className="size-3.5" /> Processed locally
              </span>
            </div>

            <div className="p-6 sm:p-8">
              {!generated ? (
                <div className="py-6">
                  <h3 className="text-xl font-bold text-navy">
                    Your readiness discussion brief
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Complete the form and generate a tailored checklist for your
                    first financing discussion: the evidence to prepare, routes
                    worth investigating and the questions to ask a finance
                    partner.
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {[
                      'Evidence completeness indicator',
                      'Financing routes to investigate',
                      'Questions for a finance partner',
                    ].map((x) => (
                      <li
                        key={x}
                        className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-white px-4 py-3 text-sm text-muted-foreground"
                      >
                        <span className="size-2 rounded-full bg-teal/40" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-teal-ink">
                    {brief.company} — preparation brief
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {brief.amountLabel} · {input.asset} · {brief.stageLabel}.
                    This is a document checklist, not a lending recommendation.
                  </p>

                  <div className="mt-5 rounded-xl bg-accent p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <strong className="text-navy">
                        {brief.indicated} of {brief.total} key evidence
                        categories indicated
                      </strong>
                      <span className="font-mono text-sm font-bold text-teal-ink">
                        {pct}%
                      </span>
                    </div>
                    <div
                      className="mt-3 flex gap-1"
                      role="img"
                      aria-label={`${brief.indicated} of ${brief.total} categories indicated`}
                    >
                      {EVIDENCE.map((e) => (
                        <span
                          key={e.id}
                          className={`h-2 flex-1 rounded-full ${input.evidence[e.id] ? 'bg-teal' : 'bg-white'}`}
                        />
                      ))}
                    </div>
                    <p className="mt-2.5 text-xs text-muted-foreground">
                      Completeness only. Lender acceptance and eligibility have
                      not been assessed.
                    </p>
                  </div>

                  <h4 className="mt-7 font-display text-base font-bold text-navy">
                    Information to prepare
                  </h4>
                  {brief.missing.length ? (
                    <ul className="mt-3 grid gap-2">
                      {brief.missing.map((m) => (
                        <li
                          key={m}
                          className="flex items-start gap-2.5 text-[15px]"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 flex items-start gap-2 text-[15px]">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-ink" />
                      No missing categories selected; verify document quality
                      and lender-specific requirements.
                    </p>
                  )}

                  <h4 className="mt-7 font-display text-base font-bold text-navy">
                    Potential financing routes to investigate
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {brief.routes.map((r) => (
                      <li
                        key={r.name}
                        className="rounded-lg border border-[#b3dff1] bg-[#eef8fd] px-3.5 py-2.5"
                      >
                        <p className="text-sm font-semibold text-navy">
                          {r.name}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {r.note}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-7 font-display text-base font-bold text-navy">
                    Questions for a finance partner
                  </h4>
                  <ol className="mt-3 grid gap-2">
                    {brief.questions.map((q, i) => (
                      <li key={q} className="flex gap-3 text-[15px]">
                        <span className="font-mono text-xs leading-6 font-bold text-teal-ink">
                          Q{i + 1}
                        </span>
                        {q}
                      </li>
                    ))}
                  </ol>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <Button onClick={copyBrief} className="rounded-lg">
                      {copied ? <Check /> : <ClipboardCopy />}
                      {copied ? 'Copied' : 'Copy discussion brief'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={downloadBrief}
                      className="rounded-lg"
                    >
                      <Download /> Download .txt
                    </Button>
                  </div>
                </div>
              )}
              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                Do not enter confidential company information into a public
                research tool. This explorer processes inputs locally in your
                browser and does not transmit or store them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
