/**
 * Contact details and team members shown across the site.
 * Fill in the empty values when they are available — empty values are shown
 * as "coming soon" and LinkedIn buttons stay disabled until a URL is set.
 */

import Rafaela from '../Images/Rafaela.png'
import Oliwia from '../Images/Oliwia.png'

export const CONTACT = {
  email: '', // e.g. 'hello@techassetbridge.nl'
  phone: '', // e.g. '+31 40 000 0000'
  location: 'The Netherlands · Brainport region',
  linkedin: '', // company LinkedIn page URL
}

export type TeamMember = {
  name: string
  role: string
  /** Path in /public, e.g. '/img/team/oliwia.jpg' — add later */
  photo?: string
  linkedin?: string
}

export const TEAM: TeamMember[] = [
  { name: 'Oliwia Wyrwa', role: 'Chief Executive Officer (CEO)', photo: Oliwia },
  { name: 'Foedail Abdoel', role: 'Chief Financial Officer (CFO)'},
  { name: 'Rafaela Kohns Rodrigues', role: 'Operations Coordinator', photo: Rafaela },
  { name: 'Ringenaily Raap', role: 'Quality Manager' },
  { name: 'Sahil Breidel', role: 'Marketing Manager' },
]

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/learn', label: 'Learn & Discover' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact & FAQ' },
] as const

export const SERVICE_OPTIONS = [
  'Equipment Finance Diagnostic',
  'Financing Structure Comparison',
  'Lender Discussion Pack',
  'Not sure yet — general enquiry',
] as const
