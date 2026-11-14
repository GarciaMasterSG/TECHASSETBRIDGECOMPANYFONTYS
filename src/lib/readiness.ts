/**
 * Equipment-finance readiness logic.
 *
 * Pure functions only. Everything runs in the visitor's browser; inputs are
 * never transmitted or stored. The output is a document-preparation checklist,
 * not a credit assessment or eligibility decision.
 */

export const SECTORS = [
  'Advanced manufacturing',
  'Battery / energy technology',
  'Semiconductors / photonics',
  'Medtech / biotech',
  'Other deep tech',
] as const

export const STAGES = [
  { value: 'pre', label: 'Pre-revenue / early development' },
  { value: 'pilot', label: 'Pilot production / first customers' },
  { value: 'growth', label: 'Recurring sales / scaling production' },
] as const

export const ASSET_TYPES = [
  'Production machinery',
  'Laboratory / testing equipment',
  'Cleanroom / facility equipment',
  'Other specialised equipment',
] as const

export const EVIDENCE = [
  {
    id: 'quote',
    label: 'Supplier quotation available',
    toPrepare: 'Supplier quotation and technical specifications',
  },
  {
    id: 'forecast',
    label: 'Cash-flow forecast available',
    toPrepare: 'Cash-flow forecast with downside scenario',
  },
  {
    id: 'customer',
    label: 'Customer / offtake evidence available',
    toPrepare: 'Customer demand / offtake evidence',
  },
  {
    id: 'guarantee',
    label: 'Potential guarantee or export-credit support identified',
    toPrepare: 'Guarantee terms and eligibility confirmation',
  },
  {
    id: 'milestone',
    label: 'Technology and production milestones documented',
    toPrepare: 'Technology and production milestone plan',
  },
] as const

export type StageValue = (typeof STAGES)[number]['value']
export type EvidenceId = (typeof EVIDENCE)[number]['id']

export interface ReadinessInput {
  company: string
  sector: string
  amount: number
  stage: StageValue
  asset: string
  evidence: Partial<Record<EvidenceId, boolean>>
}

export interface Route {
  name: string
  note: string
}

export interface ReadinessBrief {
  company: string
  amountLabel: string
  stageLabel: string
  indicated: number
  total: number
  missing: string[]
  routes: Route[]
  questions: string[]
  text: string
}

export function formatEuro(amount: number) {
  return new Intl.NumberFormat('en-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(amount) ? amount : 0)
}

function routesFor(input: ReadinessInput): Route[] {
  const routes: Route[] = [
    {
      name: 'Equipment leasing',
      note: 'Asset-backed; ask how resale value of this equipment type is judged.',
    },
    {
      name: 'Supplier / vendor finance',
      note: 'Staged payments or deferred terms negotiated with the equipment maker.',
    },
  ]
  if (input.stage !== 'pre') {
    routes.push({
      name: 'Bank loan',
      note:
        input.stage === 'growth'
          ? 'Recurring revenue makes conventional underwriting easier to discuss.'
          : 'Early revenue may need extra security or a guarantee scheme.',
    })
  }
  if (input.evidence.guarantee) {
    routes.push({
      name: 'Guarantee-backed financing',
      note: 'Confirm scheme eligibility and conditions before lender outreach.',
    })
  }
  routes.push({
    name: 'Export-credit arrangements',
    note: 'Relevant mainly for cross-border equipment purchases or sales.',
  })
  if (input.stage === 'pre') {
    routes.push({
      name: 'Bank loan (later stage)',
      note: 'Often difficult before revenue; useful to know the criteria early.',
    })
  }
  return routes
}

function questionsFor(input: ReadinessInput): string[] {
  const questions = [
    'What minimum cash-flow evidence is needed at this stage?',
    'What asset valuation and resale assumptions would you apply?',
    'What additional conditions apply to guarantees and cross-border equipment purchases?',
    'Could supplier finance, equipment lease or staged payment arrangements be evaluated?',
  ]
  if (input.stage === 'pre')
    questions.unshift(
      'Does your institution consider pre-revenue borrowers at all?',
    )
  if (input.stage === 'pilot')
    questions.unshift(
      'What first-customer evidence would materially improve this case?',
    )
  if (input.asset === 'Cleanroom / facility equipment')
    questions.push(
      'How do you treat equipment that is built into a facility and is hard to repossess?',
    )
  return questions
}

export function buildBrief(input: ReadinessInput): ReadinessBrief {
  const company = input.company.trim() || 'Your company'
  const missing = EVIDENCE.filter((e) => !input.evidence[e.id]).map(
    (e) => e.toPrepare,
  )
  const indicated = EVIDENCE.length - missing.length
  const stageLabel =
    STAGES.find((s) => s.value === input.stage)?.label ?? input.stage
  const amountLabel = formatEuro(input.amount)
  const routes = routesFor(input)
  const questions = questionsFor(input)

  const toPrepare = missing.length
    ? missing
    : [
        'All five categories indicated; verify document quality and lender-specific requirements.',
      ]

  const text = [
    'TECHASSET BRIDGE — DISCUSSION BRIEF',
    `Company: ${company}`,
    `Sector: ${input.sector}`,
    `Equipment: ${input.asset}`,
    `Equipment investment: ${amountLabel}`,
    `Commercial stage: ${stageLabel}`,
    `Evidence indicated: ${indicated} of ${EVIDENCE.length} categories`,
    '',
    'Evidence to prepare:',
    ...toPrepare.map((x) => `- ${x}`),
    '',
    'Financing routes to investigate:',
    ...routes.map((r) => `- ${r.name}: ${r.note}`),
    '',
    'Questions for a finance partner:',
    ...questions.map((x) => `- ${x}`),
    '',
    'Research concept only. Not financial advice or a credit assessment.',
  ].join('\n')

  return {
    company,
    amountLabel,
    stageLabel,
    indicated,
    total: EVIDENCE.length,
    missing,
    routes,
    questions,
    text,
  }
}
