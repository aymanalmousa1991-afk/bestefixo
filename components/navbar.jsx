'use client'

import { useEffect, useState } from 'react'
import { Phone, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { BrandLogo } from '@/components/brand-logo'
import { Wordmark } from '@/components/wordmark'
import { SITE, NAV_LINKS } from '@/lib/config/site'

const { brand, contact } = SITE

export function Navbar({ onQuoteClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Empty until the section-observer below confirms we're actually on a page
  // that has these section ids (the homepage) — otherwise "Home" would stay
  // highlighted forever on pages like /privacy that don't have any of them.
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for the section currently in view. Only runs on
  // pages that actually contain these section ids (the homepage) — on other
  // pages every lookup is null and the observer simply has nothing to watch.
  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b))
          setActiveHref(`#${topMost.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-soft py-1.5' : 'bg-white/80 backdrop-blur-sm py-2.5'}`}>
      <div className="container flex items-center justify-between gap-3">
        <a href="/#home" className="flex items-center gap-2 sm:gap-3 min-w-0" aria-label={`${brand.fullName} Home`}>
          <BrandLogo size={scrolled ? 44 : 52} priority />
          <div className="flex flex-col leading-tight min-w-0">
            <Wordmark size="md" className="truncate" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-muted-foreground font-semibold">{brand.tagline}</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1" aria-label="Hoofdnavigatie">
          {NAV_LINKS.map((l) => {
            const isActive = activeHref === l.href
            return (
              <a
                key={l.href}
                href={`/${l.href}`}
                aria-current={isActive ? 'true' : undefined}
                className={`px-3 py-2 text-sm font-medium transition-colors relative group ${isActive ? 'text-brand-blue' : 'text-foreground/80 hover:text-brand-blue'}`}
              >
                {l.label}
                <span className={`absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand-green transition-transform origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </a>
            )
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          {onQuoteClick ? (
            <Button onClick={onQuoteClick} className="bg-brand-green hover:bg-brand-green/90 text-white shadow-soft">
              Vraag Offerte Aan
            </Button>
          ) : (
            <Button asChild className="bg-brand-green hover:bg-brand-green/90 text-white shadow-soft">
              <a href="/#offerte">Vraag Offerte Aan</a>
            </Button>
          )}
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu"><Menu className="h-6 w-6" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] sm:w-[360px] flex flex-col">
            <SheetTitle className="sr-only">Navigatiemenu</SheetTitle>
            <div className="flex items-center gap-3 mt-2 mb-4 pb-4 border-b">
              <BrandLogo size={44} />
              <Wordmark />
            </div>
            <nav className="flex flex-col" aria-label="Mobiele navigatie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={`/${l.href}`} onClick={() => setOpen(false)} className="px-2 py-3 text-base font-medium border-b hover:text-brand-blue">{l.label}</a>
              ))}
            </nav>
            <a href={`tel:${contact.phoneRaw}`} className="mt-5 flex items-center gap-2 text-brand-blue font-semibold"><Phone className="h-4 w-4"/>{contact.phone}</a>
            {onQuoteClick ? (
              <Button onClick={() => { setOpen(false); onQuoteClick() }} className="mt-3 bg-brand-green hover:bg-brand-green/90 text-white">Vraag Offerte Aan</Button>
            ) : (
              <Button asChild className="mt-3 bg-brand-green hover:bg-brand-green/90 text-white">
                <a href="/#offerte" onClick={() => setOpen(false)}>Vraag Offerte Aan</a>
              </Button>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
