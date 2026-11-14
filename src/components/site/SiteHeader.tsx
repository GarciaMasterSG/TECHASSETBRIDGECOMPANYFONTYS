import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import LogoCompany from '../../Images/1.png'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { NAV } from '@/lib/site'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="TechAsset Bridge — home"
      className={`flex items-center gap-2.5 font-display text-lg font-bold tracking-tight ${inverted ? 'text-white' : 'text-navy'}`}
    >
      <span
        className={`flex size-15 shrink-0 items-center justify-center overflow-hidden ${inverted ? 'rounded-lg bg-white p-1' : ''}`}
      >
        <img
          src={LogoCompany}
          alt=""
          width={80}
          height={80}
          className="size-full object-contain"
        />
      </span>
      <span>TechAsset Bridge</span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              className="text-sm text-muted-foreground transition-colors hover:text-teal-ink motion-reduce:transition-none data-[status=active]:font-semibold data-[status=active]:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-10 rounded-lg px-5 font-semibold sm:inline-flex"
          >
            <Link to="/contact">Request a Consultation</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Go to a page of the site
              </SheetDescription>
              <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === '/' }}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base hover:bg-accent hover:text-accent-foreground data-[status=active]:bg-accent data-[status=active]:font-semibold data-[status=active]:text-navy"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 h-11 rounded-lg font-semibold">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Request a Consultation
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
