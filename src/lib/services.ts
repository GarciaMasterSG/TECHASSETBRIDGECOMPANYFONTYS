export type Service = {
  id: 'diagnostic' | 'comparison' | 'lender-pack'
  number: string
  name: string
  short: string
  receives: string
  why: string
  explanation: string
  includes: { title: string; body: string }[]
  suitableFor: string[]
  youProvide: string[]
  outcome: string
}

export const SERVICES: Service[] = [
  {
    id: 'diagnostic',
    number: '01',
    name: 'Equipment Finance Diagnostic',
    short: 'Understand where you stand before you apply.',
    receives:
      'Assessment of the equipment need, development stage, existing funding attempts and documentation gaps',
    why: 'Avoids spending time on clearly unsuitable applications',
    explanation:
      'A structured first look at your equipment-financing situation. We map what you need to buy, why now, how far your technology and commercial traction have progressed, and what you have already tried — so you can see which preparation work matters most before approaching any financier.',
    includes: [
      {
        title: 'Equipment need and development stage',
        body: 'What equipment is required, its cost and useful life, what milestone it unlocks, and where the company sits between development, first customers and scale-up.',
      },
      {
        title: 'Review of previous financing attempts',
        body: 'Which banks, lessors, grants or investors you have already approached, what feedback you received, and which objections keep coming back.',
      },
      {
        title: 'Missing documents and preparation gaps',
        body: 'A gap list covering supplier quotes, technical milestones, customer validation, forecasts, collateral and guarantee information.',
      },
    ],
    suitableFor: [
      'High-tech SMEs planning a significant equipment investment',
      'Companies moving from development to production',
      'Teams whose earlier financing requests were declined or stalled',
    ],
    youProvide: [
      'A short description of the equipment and its purpose',
      'Indicative cost and supplier information, if available',
      'Current stage, revenue status and key milestones',
      'An overview of earlier financing contacts and outcomes',
    ],
    outcome:
      "A clearer understanding of your company's financing readiness and a prioritised list of what to prepare next.",
  },
  {
    id: 'comparison',
    number: '02',
    name: 'Financing Structure Comparison',
    short: 'See the alternatives to an ordinary bank loan.',
    receives:
      'A comparison of potentially relevant structures and their requirements, reviewed by a qualified expert where necessary',
    why: 'Helps the company understand alternatives to an ordinary bank loan',
    explanation:
      'An overview of the financing structures that may be relevant to your equipment and stage — such as bank loans, financial or operational leasing, vendor finance, sale-and-leaseback, guarantee-backed lending and public or innovation-related instruments. Where specialist judgement is needed, the comparison is reviewed by a qualified expert.',
    includes: [
      {
        title: 'Structures that may be relevant',
        body: 'A short explanation of each structure that could plausibly fit your equipment, stage and cash-flow profile — and why others are less likely to.',
      },
      {
        title: 'Characteristics, requirements, pros and cons',
        body: 'A side-by-side view of typical requirements, who owns the asset, balance-sheet effects, flexibility, and the general advantages and disadvantages of each.',
      },
      {
        title: 'Alternatives to traditional bank loans',
        body: 'How asset-based, supplier-linked and guarantee-supported routes work in practice, and what typically needs to be in place for them to be considered.',
      },
    ],
    suitableFor: [
      'Companies unsure which type of financing to pursue',
      'SMEs with limited operating history or collateral',
      'Management teams preparing an investment decision',
    ],
    youProvide: [
      'The outcome of the diagnostic, or equivalent information',
      'Equipment specifications, expected lifetime and resale market',
      'Current financing, existing securities and guarantees',
      'Basic financial statements or forecasts',
    ],
    outcome:
      'A better understanding of which financing structures may be worth exploring further — and which questions to ask about each.',
  },
  {
    id: 'lender-pack',
    number: '03',
    name: 'Lender Discussion Pack',
    short: 'Arrive prepared, with the right evidence and questions.',
    receives:
      'Supplier details, milestone evidence, cash-flow scenarios, guarantee documentation and specific questions for financiers',
    why: 'Makes conversations more focused and reduces repeated preparation',
    explanation:
      'We help you bring the information financiers typically ask about into one clear, consistent pack. It is designed to support your own conversations with banks, lessors and other financing providers — not to replace their assessment.',
    includes: [
      {
        title: 'Documents and information overview',
        body: 'Supplier quotes and terms, project milestones and technical evidence, cash-flow scenarios, and available guarantee or collateral documentation — organised in one place.',
      },
      {
        title: 'Questions for financiers',
        body: 'A tailored set of questions for banks, leasing companies and other providers about their criteria, asset eligibility, timelines and documentation requirements.',
      },
      {
        title: 'Consistent story across conversations',
        body: 'One coherent summary of the equipment case, so you do not need to rebuild the same information for every new conversation.',
      },
    ],
    suitableFor: [
      'Companies about to approach one or more financiers',
      'Teams that have completed the diagnostic or comparison',
      'SMEs that want to reduce repeated preparation work',
    ],
    youProvide: [
      'Supplier quotations and delivery terms',
      'Milestone plan and technical or customer evidence',
      'Financial forecasts or the basis for cash-flow scenarios',
      'Any existing guarantee, subsidy or collateral information',
    ],
    outcome:
      'Better-prepared and more focused discussions with potential lenders and other financing providers.',
  },
]
