import { describe, expect, it } from 'vitest'

import { buildBrief, type ReadinessInput } from './readiness'

const base: ReadinessInput = {
  company: '',
  sector: 'Advanced manufacturing',
  amount: 2000000,
  stage: 'pre',
  asset: 'Production machinery',
  evidence: {},
}

describe('buildBrief', () => {
  it('lists all five evidence categories as missing when none are indicated', () => {
    const brief = buildBrief(base)
    expect(brief.company).toBe('Your company')
    expect(brief.indicated).toBe(0)
    expect(brief.missing).toHaveLength(5)
  })

  it('asks pre-revenue cases whether the lender considers them at all', () => {
    expect(buildBrief(base).questions[0]).toMatch(/pre-revenue/)
  })

  it('adds guarantee-backed route and counts indicated evidence', () => {
    const brief = buildBrief({
      ...base,
      stage: 'growth',
      evidence: { quote: true, guarantee: true },
    })
    expect(brief.indicated).toBe(2)
    expect(brief.routes.map((r) => r.name)).toContain(
      'Guarantee-backed financing',
    )
    expect(brief.routes.map((r) => r.name)).toContain('Bank loan')
  })

  it('produces a plain-text brief with the disclaimer', () => {
    const text = buildBrief({ ...base, company: 'Acme Photonics' }).text
    expect(text).toContain('Company: Acme Photonics')
    expect(text).toContain('Not financial advice')
  })
})
