import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SERVICE_OPTIONS } from '@/lib/site'

type State = 'idle' | 'pending' | 'success' | 'error'

/**
 * Consultation enquiry form, handled by Netlify Forms.
 * Field names must match the registration skeleton in public/contact-form.html.
 */
export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, setState] = useState<State>('idle')
  const [sentName, setSentName] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const data = new FormData(event.currentTarget)
    const body = new URLSearchParams()
    data.forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      if (/\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Form handling is unavailable')
      setSentName(String(data.get('name') ?? '').split(' ')[0] ?? '')
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
          Thank you{sentName ? `, ${sentName}` : ''} — your enquiry has been
          sent.
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          The TechAsset Bridge team has received your message and will reply to
          the business email address you provided. In the meantime, you may find
          our checklists and guides useful when preparing your case.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-lg"
          onClick={() => setState('idle')}
        >
          Send another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/contact-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className="rounded-2xl border border-border bg-card p-6 shadow-[0_8px_28px_-12px_rgb(20_46_66/0.12)] sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Leave empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <h3 className="text-xl font-bold text-navy">Request a consultation</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Fields marked * are required. This is an enquiry, not a financing
        application. Please don&rsquo;t include confidential information.
      </p>
      <fieldset
        disabled={state === 'pending'}
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        <div className="grid gap-2">
          <Label htmlFor="ct-name">Full name *</Label>
          <Input
            id="ct-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            className="h-11 bg-white"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ct-company">Company name *</Label>
          <Input
            id="ct-company"
            name="company"
            autoComplete="organization"
            required
            maxLength={120}
            className="h-11 bg-white"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ct-email">Business email *</Label>
          <Input
            id="ct-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="h-11 bg-white"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ct-phone">Phone number (optional)</Label>
          <Input
            id="ct-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            className="h-11 bg-white"
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="ct-service">Service you are interested in *</Label>
          <select
            id="ct-service"
            name="service"
            required
            defaultValue={defaultService ?? ''}
            className="h-11 w-full rounded-lg border border-input bg-white px-3 text-[15px] shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="ct-message">
            Short description of your equipment financing needs *
          </Label>
          <Textarea
            id="ct-message"
            name="message"
            required
            maxLength={3000}
            rows={5}
            className="bg-white"
            placeholder="E.g. the equipment you need, approximate investment, your development stage and any financing you have already explored."
          />
        </div>
        <label
          htmlFor="ct-consent"
          className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2"
        >
          <input
            id="ct-consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            className="mt-0.5 size-4 accent-[var(--teal)]"
          />
          I agree that TechAsset Bridge may use these details to respond to my
          enquiry. *
        </label>
        <div className="sm:col-span-2">
          <Button
            type="submit"
            size="lg"
            className="h-12 w-full rounded-lg text-base font-semibold"
          >
            <Send /> {state === 'pending' ? 'Sending…' : 'Send enquiry'}
          </Button>
        </div>
      </fieldset>
      {state === 'error' && (
        <p
          role="alert"
          className="mt-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive"
        >
          Your enquiry could not be confirmed as sent. Your details are still
          here — please try again in a moment.
        </p>
      )}
    </form>
  )
}
