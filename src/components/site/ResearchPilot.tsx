import { useState, type FormEvent } from 'react'
import { CheckCircle2, ClipboardCopy, Send } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { SectionHeading } from './SectionHeading'

const QUESTIONS = [
  'Which underwriting requirement most often prevents equipment financing?',
  'Which alternative structures are genuinely viable for pre-revenue or early-revenue companies?',
  'Would a standardised equipment-financing brief reduce time spent by lenders and SMEs?',
  'Who would use it, who would pay, and what evidence would change a financing decision?',
]

const ROLES = [
  'High-tech SME',
  'Bank / lender',
  'Leasing / vendor-finance provider',
  'Ecosystem / public financing organisation',
  'Other',
]

const OUTREACH =
  'TechAsset Bridge is a Fontys student research concept exploring equipment-financing readiness for high-tech SMEs in Brainport. We would appreciate a 20-minute interview about equipment lending criteria, alternative structures and possible value of a standardised financing brief.'

type State = 'idle' | 'pending' | 'success' | 'error'

function InterviewForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    setState('pending')
    try {
      const response = await fetch('/research-interview-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      if (/\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Form handling is unavailable')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center rounded-2xl border border-teal/40 bg-accent p-8"
      >
        <CheckCircle2 className="size-10 text-teal-ink" />
        <h3 className="mt-4 text-2xl font-bold text-navy">
          Thank you — we received your details.
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          We&rsquo;ll get in touch by email to schedule a short interview. Your
          details are used only to arrange the research conversation.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-lg"
          onClick={() => setState('idle')}
        >
          Submit another response
        </Button>
      </div>
    )
  }

  return (
    <form
      name="research-interview"
      method="POST"
      action="/research-interview-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className="rounded-2xl border border-border bg-card p-6 shadow-[0_8px_28px_-12px_rgb(20_46_66/0.12)] sm:p-8"
    >
      <input type="hidden" name="form-name" value="research-interview" />
      <p hidden>
        <label>
          Leave empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <h3 className="text-xl font-bold text-navy">
        Volunteer for a 20-minute interview
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        For SMEs, lenders, leasing providers and ecosystem specialists. This is
        not a financing application.
      </p>
      <fieldset
        disabled={state === 'pending'}
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        <div className="grid gap-2">
          <Label htmlFor="ri-name">Name</Label>
          <Input
            id="ri-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            className="h-11 bg-white"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ri-email">Work email</Label>
          <Input
            id="ri-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="h-11 bg-white"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ri-org">Organisation</Label>
          <Input
            id="ri-org"
            name="organisation"
            autoComplete="organization"
            maxLength={120}
            className="h-11 bg-white"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ri-role">I am a…</Label>
          <select
            id="ri-role"
            name="role"
            required
            defaultValue=""
            className="h-11 w-full rounded-lg border border-input bg-white px-3 text-[15px] shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40"
          >
            <option value="" disabled>
              Select your role
            </option>
            {ROLES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="ri-message">
            What would you like to share? (optional)
          </Label>
          <Textarea
            id="ri-message"
            name="message"
            maxLength={2000}
            rows={4}
            className="bg-white"
            placeholder="E.g. the equipment-financing challenge you've seen most often. Please don't include confidential information."
          />
        </div>
        <label
          htmlFor="ri-consent"
          className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2"
        >
          <input
            id="ri-consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            className="mt-0.5 size-4 accent-[var(--teal)]"
          />
          I agree to be contacted by email about this research interview. My
          details are used only for this purpose.
        </label>
        <div className="sm:col-span-2">
          <Button
            type="submit"
            size="lg"
            className="h-12 w-full rounded-lg text-base font-semibold"
          >
            <Send /> {state === 'pending' ? 'Sending…' : 'Request an interview'}
          </Button>
        </div>
      </fieldset>
      {state === 'error' && (
        <p
          role="alert"
          className="mt-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive"
        >
          Nothing was confirmed as sent. Your details are still here — please
          try again in a moment.
        </p>
      )}
    </form>
  )
}

export function ResearchPilot() {
  async function copyOutreach() {
    try {
      await navigator.clipboard.writeText(OUTREACH)
      toast.success('Outreach introduction copied')
    } catch {
      toast.error('Copy failed')
    }
  }

  return (
    <section id="pilot" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="RESEARCH PILOT"
          title="Help shape a better financing process."
          intro="We are validating this concept through interviews with high-tech SMEs, lenders, leasing providers and Brainport ecosystem specialists. We are not currently accepting financing applications."
        />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-navy p-7 text-white sm:p-8">
            <h3 className="text-xl font-bold">
              Questions we want to investigate
            </h3>
            <ol className="mt-5 grid gap-4">
              {QUESTIONS.map((q, i) => (
                <li key={q} className="flex gap-4">
                  <span className="font-mono text-sm leading-6 font-bold text-mint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-relaxed text-[#d2e2f0]">{q}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-[#a7bdd6]">
                Reaching out to someone on our behalf? Copy our short
                introduction.
              </p>
              <Button
                variant="outline"
                onClick={copyOutreach}
                className="mt-3 rounded-lg border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <ClipboardCopy /> Copy outreach introduction
              </Button>
            </div>
          </div>
          <InterviewForm />
        </div>
      </div>
    </section>
  )
}
