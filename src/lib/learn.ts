/**
 * Educational content for the Learn & Discover pages.
 * General information only — not financial, legal or tax advice.
 */

export type Article = {
  slug: string
  title: string
  category: 'Insight' | 'Guide' | 'Practical'
  readMinutes: number
  summary: string
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'equipment-financing-what-high-tech-smes-should-know',
    title: 'Equipment Financing: What High-Tech SMEs Should Know',
    category: 'Insight',
    readMinutes: 6,
    summary:
      'Why financing specialised machinery is different from financing general business needs, and what financiers usually look at first.',
    sections: [
      {
        heading: 'Why equipment financing is its own topic',
        paragraphs: [
          'For many high-tech SMEs, the step from development to production depends on expensive, specialised equipment: cleanroom tools, test benches, precision machining centres or lab instruments. That investment often has to be made before revenue is stable.',
          'Equipment financing links the money to a specific asset. Instead of asking only "can this company repay?", a financier also asks "what is this asset, what is it worth over time, and could it be used or sold by someone else?"',
        ],
      },
      {
        heading: 'What financiers typically look at',
        paragraphs: [
          'Each financier applies its own criteria, but the same themes tend to come up in conversations:',
        ],
        bullets: [
          'The asset itself: type, supplier, price, useful life and whether there is a second-hand market.',
          'The purpose: which milestone, customer order or production step the equipment enables.',
          'The company: stage, management, current financing, and the outlook for cash flow.',
          'Risk mitigation: own contribution, collateral, guarantees or supplier involvement.',
        ],
      },
      {
        heading: 'Specialised assets are harder to value',
        paragraphs: [
          'The more customised a machine, the harder it can be for a financier to estimate its value if things go wrong. Highly specific equipment may therefore need stronger supporting evidence, a larger own contribution or a different structure than standard machinery.',
        ],
      },
      {
        heading: 'Start with preparation, not the application',
        paragraphs: [
          'Before approaching any financier, it helps to have a clear picture of the equipment need, the evidence you already have and the gaps you still need to close. That makes it easier to see which routes are realistic — and to avoid spending time on ones that are not.',
        ],
      },
    ],
  },
  {
    slug: 'alternatives-to-traditional-bank-loans',
    title: 'Alternatives to Traditional Bank Loans',
    category: 'Guide',
    readMinutes: 7,
    summary:
      'An overview of financing routes beyond the ordinary term loan, and the situations in which they may be worth exploring.',
    sections: [
      {
        heading: 'Why look beyond the bank loan?',
        paragraphs: [
          'A standard bank loan usually relies heavily on historic cash flow and available collateral. Young or fast-growing technology companies may not yet have either. Alternative structures can shift the focus towards the asset, the supplier or third-party support.',
        ],
      },
      {
        heading: 'Routes that are commonly discussed',
        paragraphs: [
          'Which of these is relevant depends on the equipment, the company and the provider. This list is general information, not a recommendation:',
        ],
        bullets: [
          'Financial lease: the lessor finances the asset and you use it for most of its life, usually with the option to become owner at the end.',
          'Operational lease: you pay for use of the asset over a period while the lessor keeps ownership and the residual-value risk.',
          'Vendor or supplier finance: the equipment manufacturer, or a partner of theirs, arranges financing alongside the sale.',
          'Sale-and-leaseback: equipment you already own is sold to a lessor and leased back, releasing capital tied up in the asset.',
          'Guarantee-supported lending: a public or private guarantee scheme covers part of the financier’s risk, which may make lending possible where it otherwise would not be.',
          'Innovation-related and regional instruments: public programmes and regional development organisations may offer loans or co-financing for innovative companies, under their own conditions.',
        ],
      },
      {
        heading: 'Combining routes',
        paragraphs: [
          'In practice, an equipment investment is often financed with a combination: for example an own contribution, a lease for the machine itself and a separate facility for working capital. Understanding how the pieces fit together is part of good preparation.',
        ],
      },
      {
        heading: 'Check the conditions with the provider',
        paragraphs: [
          'Availability, terms and eligibility differ between providers and change over time. Always verify the current conditions directly with the financier or scheme, and seek qualified advice where needed.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-prepare-for-a-financing-application',
    title: 'How to Prepare for a Financing Application',
    category: 'Practical',
    readMinutes: 6,
    summary:
      'A step-by-step approach to getting your equipment case ready before your first conversation with a financier.',
    sections: [
      {
        heading: '1. Define the equipment need precisely',
        paragraphs: [
          'Describe the equipment, its supplier, price, delivery time and expected useful life. Explain what it enables: a production step, a customer order or a milestone. Vague needs lead to vague conversations.',
        ],
      },
      {
        heading: '2. Collect your evidence',
        paragraphs: [
          'Gather what supports the case: supplier quotations, technical validation, letters of intent or orders from customers, and a milestone plan. Evidence that is scattered across teams should be brought together.',
        ],
      },
      {
        heading: '3. Build realistic cash-flow scenarios',
        paragraphs: [
          'Show how the equipment affects revenue and costs over time, including a cautious scenario. Financiers want to understand what happens if milestones are delayed.',
        ],
      },
      {
        heading: '4. Map your risk mitigation',
        paragraphs: [
          'List what reduces the financier’s risk: own contribution, existing collateral, possible guarantees, supplier buy-back arrangements or co-financing.',
        ],
      },
      {
        heading: '5. Prepare your questions',
        paragraphs: [
          'A conversation is two-way. Ask each financier about their criteria for this type of asset, the documents they need, typical timelines and what would strengthen your case.',
        ],
      },
    ],
  },
  {
    slug: 'common-documentation-gaps',
    title: 'Common Documentation Gaps When Seeking Equipment Financing',
    category: 'Practical',
    readMinutes: 5,
    summary:
      'The missing pieces that most often slow down equipment-financing conversations — and how to close them early.',
    sections: [
      {
        heading: 'Why gaps matter',
        paragraphs: [
          'Missing information rarely leads to a quick "no". More often it leads to repeated requests, delays and conversations that never quite move forward. Closing the obvious gaps early saves time on both sides.',
        ],
      },
      {
        heading: 'Gaps we often see',
        paragraphs: ['The following are frequently incomplete or missing:'],
        bullets: [
          'A formal supplier quotation with delivery terms, warranty and payment schedule.',
          'Evidence that the equipment is needed now: orders, letters of intent or pilot results.',
          'A milestone plan linking the equipment to technical and commercial progress.',
          'Cash-flow scenarios that include the financing costs and a downside case.',
          'Information about existing securities, guarantees and other lenders.',
          'An explanation of the asset’s resale or re-use potential.',
        ],
      },
      {
        heading: 'Keep one version of the truth',
        paragraphs: [
          'Different numbers in different documents undermine confidence. Keep a single, up-to-date summary of the case and update all documents from it.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-leasing-loans-and-other-structures',
    title: 'Understanding Leasing, Loans, and Other Financing Structures',
    category: 'Guide',
    readMinutes: 7,
    summary:
      'How the main structures differ in ownership, flexibility and requirements — explained in plain language.',
    sections: [
      {
        heading: 'Ownership: who owns the equipment?',
        paragraphs: [
          'With a loan, you buy and own the equipment and the lender usually takes security over it. With a lease, the lessor owns the equipment and you pay for its use; depending on the type of lease, ownership may pass to you at the end.',
        ],
      },
      {
        heading: 'What each structure tends to focus on',
        paragraphs: ['As a general picture:'],
        bullets: [
          'Bank loan: the company’s repayment capacity, financial history and overall collateral.',
          'Financial lease: the asset’s value over the contract term and the company’s ability to pay instalments.',
          'Operational lease: the expected residual value of the asset and how easily it can be re-used.',
          'Vendor finance: the supplier’s confidence in the asset and its relationship with the customer.',
        ],
      },
      {
        heading: 'Trade-offs to consider',
        paragraphs: [
          'Each structure involves trade-offs in cost, flexibility, accounting treatment and what happens at the end of the term. Accounting and tax effects in particular depend on your situation and should be checked with a qualified adviser.',
        ],
      },
      {
        heading: 'Matching the structure to the asset',
        paragraphs: [
          'Standard, widely used equipment fits naturally with leasing. Highly specialised equipment may need supplier involvement or additional risk mitigation. Understanding these patterns helps you decide which conversations to start with.',
        ],
      },
    ],
  },
]

export const STRUCTURES = [
  {
    name: 'Bank loan',
    how: 'You borrow money to buy the equipment and repay it over an agreed term. The lender usually takes security over the asset and/or other assets.',
    oftenAsked: 'Financial history, repayment capacity, collateral',
    consider: 'You own the asset; may be harder with limited operating history.',
  },
  {
    name: 'Financial lease',
    how: 'A lessor buys the equipment and you pay instalments to use it, typically for most of its useful life, often with an option to own it at the end.',
    oftenAsked: 'Asset value and resale market, ability to pay instalments',
    consider: 'Focus on the asset itself; specialised assets may be harder.',
  },
  {
    name: 'Operational lease',
    how: 'You pay for use of the equipment for a period shorter than its life. The lessor keeps ownership and the residual-value risk.',
    oftenAsked: 'Expected residual value, standardisation of the asset',
    consider: 'Flexible; usually suited to widely used equipment.',
  },
  {
    name: 'Vendor / supplier finance',
    how: 'The equipment manufacturer, or a financing partner of theirs, offers financing as part of the sale.',
    oftenAsked: 'Supplier relationship, asset type, customer profile',
    consider: 'Supplier knows the asset; availability varies per supplier.',
  },
  {
    name: 'Sale-and-leaseback',
    how: 'Equipment you already own is sold to a lessor and leased back to you, releasing capital tied up in the asset.',
    oftenAsked: 'Current asset value, condition, ownership documentation',
    consider: 'Releases capital; only for equipment already owned.',
  },
  {
    name: 'Guarantee-supported lending',
    how: 'A public or private guarantee scheme covers part of the financier’s risk, which can make a loan or lease possible.',
    oftenAsked: 'Scheme eligibility criteria, business case, financier’s own assessment',
    consider: 'Conditions are set per scheme and financier.',
  },
]

export const CHALLENGES = [
  {
    title: 'Capital is needed before revenue',
    body: 'Production equipment is often required before sales are predictable, while many financiers rely on historic cash flow.',
  },
  {
    title: 'Specialised assets are hard to value',
    body: 'Custom or niche machinery may have a limited second-hand market, which makes financiers more cautious.',
  },
  {
    title: 'Technical risk is hard to explain',
    body: 'Financiers may find it difficult to assess technology risk without clear milestones and independent evidence.',
  },
  {
    title: 'Evidence is fragmented',
    body: 'Supplier, technical, commercial and financial information sits with different people and is rarely in one place.',
  },
  {
    title: 'Options are difficult to compare',
    body: 'Leasing, loans, vendor finance, guarantees and public instruments all have different logic and requirements.',
  },
  {
    title: 'Applications cost time',
    body: 'Without understanding a financier’s criteria first, teams can spend weeks on routes that were unlikely to fit.',
  },
]

export const CHECKLISTS = [
  {
    title: 'Before approaching a bank or lessor',
    items: [
      'Supplier quotation with price, delivery time and payment terms',
      'Description of the equipment and what it enables',
      'Latest annual accounts and recent interim figures',
      'Cash-flow forecast including the financing costs',
      'Overview of existing loans, leases and securities',
      'Own contribution and how it is funded',
    ],
  },
  {
    title: 'Evidence that strengthens your case',
    items: [
      'Customer orders, letters of intent or pilot agreements',
      'Technical milestones achieved and planned',
      'Certifications or test results relevant to the equipment',
      'Information on the asset’s resale or re-use potential',
      'Available guarantees, subsidies or co-financing',
      'A downside scenario showing how delays are handled',
    ],
  },
  {
    title: 'Questions to ask each financier',
    items: [
      'Do you finance this type of asset, and at what stage of company?',
      'Which documents do you need for a first assessment?',
      'How do you value specialised or customised equipment?',
      'Which guarantees or risk-sharing schemes do you work with?',
      'What is a realistic timeline from first meeting to decision?',
      'What would most strengthen our case in your view?',
    ],
  },
]

export const GLOSSARY = [
  {
    term: 'Collateral',
    definition:
      'Assets pledged to a financier as security, which can be claimed if the financing is not repaid.',
  },
  {
    term: 'Residual value',
    definition:
      'The expected value of equipment at the end of a lease or financing term.',
  },
  {
    term: 'Financial lease',
    definition:
      'A lease in which you use the asset for most of its life and usually carry most of its risks and rewards; ownership often passes to you at the end.',
  },
  {
    term: 'Operational lease',
    definition:
      'A lease for part of the asset’s life, in which the lessor keeps ownership and the residual-value risk.',
  },
  {
    term: 'Sale-and-leaseback',
    definition:
      'Selling equipment you own to a lessor and leasing it back, to release the capital tied up in it.',
  },
  {
    term: 'Vendor finance',
    definition:
      'Financing offered by, or arranged through, the supplier of the equipment.',
  },
  {
    term: 'Guarantee scheme',
    definition:
      'An arrangement in which a third party — often public — covers part of a financier’s potential loss.',
  },
  {
    term: 'Own contribution (equity contribution)',
    definition:
      'The part of the investment the company funds itself, rather than through the financier.',
  },
  {
    term: 'Cash-flow scenario',
    definition:
      'A forecast of incoming and outgoing money under specific assumptions, such as a base case and a downside case.',
  },
  {
    term: 'Covenant',
    definition:
      'A condition in a financing agreement, such as a minimum financial ratio, that the company must keep to.',
  },
  {
    term: 'Term',
    definition:
      'The agreed duration of a loan or lease, over which it is repaid or paid for.',
  },
  {
    term: 'Due diligence',
    definition:
      'The investigation a financier carries out into the company, the asset and the plan before deciding.',
  },
]

export const DOWNLOADS = [
  {
    title: 'Equipment financing preparation checklist',
    description:
      'Documents and information to collect before approaching a bank or lessor.',
    file: '/downloads/equipment-financing-checklist.txt',
  },
  {
    title: 'Lender discussion pack template',
    description:
      'A fill-in outline for summarising your equipment case in one consistent document.',
    file: '/downloads/lender-discussion-pack-template.txt',
  },
  {
    title: 'Financing structures comparison worksheet',
    description:
      'A worksheet to compare structures side by side and note questions for each provider.',
    file: '/downloads/financing-structures-worksheet.txt',
  },
]
