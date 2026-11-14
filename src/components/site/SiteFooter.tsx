import { Link } from '@tanstack/react-router'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'

import { CONTACT, NAV } from '@/lib/site'

import { Logo } from './SiteHeader'

export function SiteFooter() {
  return (
    <footer className="bg-navy py-14 text-[#c4d6ea]">
      <div className="mx-auto grid max-w-content gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4">
            Equipment-financing preparation for high-tech SMEs · Brainport
          </p>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-[#93abc8]">
            Research concept — TechAsset Bridge is not a bank, lender or
            provider of guaranteed financing, and does not provide regulated
            financial, investment or legal advice. Financing decisions remain
            with the relevant financing providers. No affiliation, endorsement
            or partnership with any named institution is implied.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-mint">
            PAGES
          </p>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-mint">
            CONTACT
          </p>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-mint" />
              {CONTACT.email ? (
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                  {CONTACT.email}
                </a>
              ) : (
                <Link to="/contact" className="hover:underline">
                  Use our contact form
                </Link>
              )}
            </li>
            {CONTACT.phone && (
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-mint" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </li>
            )}
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-mint" />
              {CONTACT.location}
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-mint">
            USEFUL LINKS
          </p>
          <ul className="mt-4 grid gap-2.5 text-sm">
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-[#9fe0f5] hover:underline"
                href="https://brainporteindhoven.com/en/brainport-for-smes/business-advice/brainport-financing-table"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brainport Financing Table <ExternalLink className="size-3.5" />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-[#9fe0f5] hover:underline"
                href="https://business.gov.nl/regulations/licence-financial-services-provider/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dutch financial services licensing information{' '}
                <ExternalLink className="size-3.5" />
              </a>
            </li>
          </ul>
        </div>

        <p className="border-t border-white/10 pt-6 text-xs text-[#7e97b8] md:col-span-2 lg:col-span-4">
          © {new Date().getFullYear()} TechAsset Bridge · Fontys student
          research project
        </p>
      </div>
    </footer>
  )
}
