# TechAsset Bridge

TechAsset Bridge is a concept website for an equipment-financing readiness service aimed at equipment-intensive high-tech SMEs in the Brainport Eindhoven region. It explains the financing mismatch deep-tech companies face, proposes a four-step preparation process, and lets visitors try an interactive **readiness explorer** that turns an illustrative case into a lender discussion brief.

The site is a research prototype for academic validation. It is not a lender and gives no financial advice.

## What's on the site

- **Hero, problem, approach and ecosystem sections** explaining the concept.
- **Readiness explorer**: describe the equipment, commercial stage and available evidence to get an evidence-completeness indicator, financing routes to investigate, and questions for a finance partner. The brief can be copied or downloaded as text. Everything runs in the browser and nothing is sent or stored.
- **Research interview signup**: SMEs, lenders, leasing providers and ecosystem specialists can volunteer for a 20-minute interview. Submissions go to Netlify Forms.

## Tech stack

- TanStack Start (React 19, TanStack Router) on Vite
- Tailwind CSS 4 with shadcn/ui components
- Netlify Forms for the interview signup
- Netlify Image CDN for the hero image

## Running locally

```bash
pnpm install
netlify dev        # full Netlify emulation (recommended), or:
pnpm dev           # Vite only, on http://localhost:3000
pnpm test          # unit tests, including the readiness logic
```

Form submissions only reach Netlify Forms on a deployed site. Locally, the form shows its error state.

## Possible next steps

- Add a privacy notice page for the interview signup.
- Gather interview insights and refine the explorer's routes and questions.
- Add Dutch-language content.
