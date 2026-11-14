import { Link } from '@tanstack/react-router'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import BackgroundImage from '../../Images/mainBackground.jpeg'
import Map from '../../Images/netherlands-map.png'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img
        src={Map}
        alt="Netherlands Map"
        style={{ position: 'absolute', height: '60%', width: 'auto', top: 100, right: 30, zIndex: -10 }}
      />
      <img
        src={BackgroundImage}
        srcSet={`${BackgroundImage} 800w, ${BackgroundImage} 1400w, ${BackgroundImage} 2000w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-right opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/20" />
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />

      <div className="mx-auto max-w-content px-4 py-24">
        <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
          Bridging Technology
          <span className="text-mint"> and Finance</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c4d6ea] md:text-xl">
          TechAsset Bridge helps high-tech SMEs understand their equipment
          financing options, close documentation gaps and prepare focused
          conversations with banks, lessors and other financiers.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-lg px-6 text-base font-semibold"
          >
            <Link to="/services">
              Our Services <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-lg border-white/25 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
        <p className="mt-10 flex max-w-xl items-start gap-2 text-xs leading-relaxed text-[#a7bdd6]">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-mint" />
          Research concept — not a lender, credit offer, regulated financial
          recommendation, or guarantee of approval.
        </p>

        <dl className="mt-14 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {[
            ['3 services', 'diagnostic, comparison and lender pack'],
            ['3 steps', 'from equipment need to lender conversation'],
          ].map(([k, v]) => (
            <div key={k} className="bg-navy/70 px-5 py-4 backdrop-blur">
              <dt className="font-display text-xl font-bold text-white">{k}</dt>
              <dd className="mt-0.5 text-sm text-[#a7bdd6]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
