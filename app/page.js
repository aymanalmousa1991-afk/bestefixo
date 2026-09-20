'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Star,
  ShieldCheck, Sparkles, Leaf, Award, CheckCircle2, Send,
  ChevronRight, BadgeCheck, Users, ThumbsUp,
  ClipboardList, CalendarCheck2, Smile, PencilLine,
  Calendar, ArrowUpRight, ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'
import { toast } from 'sonner'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons, MobileCtaBar } from '@/components/floating-buttons'
import { CookieBanner } from '@/components/cookie-banner'
import { Section, fadeUp } from '@/components/section'
import { StatsBar } from '@/components/stats-bar'
import { Wordmark } from '@/components/wordmark'
import { BrandLogo } from '@/components/brand-logo'
import { SITE, FAQS, SEED_TESTIMONIALS } from '@/lib/config/site'
import { SERVICES } from '@/lib/config/services'
import { PROJECTS } from '@/lib/config/projects'

const { brand, contact } = SITE

const HERO_IMG = '/projects/kantoorruimte.jpeg'
const TEAM_IMG = '/projects/kantoorruimte.jpeg'


const reasons = [
  { icon: ShieldCheck, title: 'Betrouwbaar', desc: 'Verzekerde, gescreende medewerkers en heldere afspraken  altijd.' },
  { icon: Award, title: 'Premium Kwaliteit', desc: 'Aandacht voor detail en hoogwaardige, milieubewuste middelen.' },
  { icon: Sparkles, title: 'Brandschoon Resultaat', desc: 'Wij stoppen pas als het écht schoon is. Tevredenheidsgarantie.' },
  { icon: Leaf, title: 'Milieuvriendelijk', desc: 'Duurzame producten en methodes voor een gezonde leefomgeving.' },
  { icon: BadgeCheck, title: 'Gecertificeerd', desc: 'Werkend volgens de normen van de schoonmaakbranche (OSB / VCA).' },
  { icon: Users, title: 'Persoonlijk', desc: 'Vast aanspreekpunt en flexibele planning op maat.' },
]

const steps = [
  { icon: Phone, title: 'Contact', desc: 'U neemt contact op of vraagt online een offerte aan.' },
  { icon: ClipboardList, title: 'Inventarisatie', desc: 'Wij stellen een passend voorstel op, kosteloos en vrijblijvend.' },
  { icon: CalendarCheck2, title: 'Planning', desc: 'We plannen op uw gewenste moment en stellen het team samen.' },
  { icon: Smile, title: 'Brandschoon', desc: 'U geniet van een spierwit resultaat met tevredenheidsgarantie.' },
]


/* ---------- HERO ---------- */
function Hero({ onQuoteClick }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = reduceMotion ? 0 : yRaw
  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center pt-28 sm:pt-32 pb-12 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={HERO_IMG} alt="Professionele schoonmakers aan het werk" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue/85 to-brand-blue/55" />
      </motion.div>
      <div className="container relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7 text-white">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider ring-1 ring-white/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-green-light" /> Premium Schoonmaak in Nederland
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 sm:mt-6 font-display text-[2.1rem] xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-balance">
            Professionele Schoonmaakdiensten voor <span className="text-brand-green-light">Bedrijven</span> en <span className="text-brand-green-light">Particulieren</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl">
            <span className="font-display font-bold tracking-tight"><span className="text-white">Beste</span><span className="text-brand-green-light">Fixo</span></span> zorgt voor een brandschone omgeving waarop u kunt vertrouwen.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={onQuoteClick} className="bg-brand-green hover:bg-brand-green/90 text-white text-base h-12 px-6 sm:px-7 shadow-premium">
              Vraag Offerte Aan <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20 backdrop-blur border-white/40 text-white hover:text-white text-base h-12 px-6 sm:px-7">
              <a href="#contact">Neem Contact Op</a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/90">
            <div className="flex items-center gap-2"><div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div><span className="text-sm">{SITE.rating.value} / 5 &mdash; {SITE.rating.count} reviews</span></div>
            <div className="flex items-center gap-2 text-sm"><ShieldCheck className="h-5 w-5 text-brand-green-light" /> Verzekerd & gecertificeerd</div>
            <div className="flex items-center gap-2 text-sm"><BadgeCheck className="h-5 w-5 text-brand-green-light" /> 100% Tevredenheidsgarantie</div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="lg:col-span-5 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 gradient-fresh blur-2xl opacity-30 rounded-full" />
            <div className="relative bg-white/95 backdrop-blur rounded-3xl p-7 shadow-premium">
              <div className="flex items-center gap-3 mb-5">
                <BrandLogo size={56} />
                <div>
                  <div className="font-display text-lg font-bold text-brand-blue">Snelle Offerte</div>
                  <div className="text-xs text-muted-foreground">Reactie binnen 24 uur</div>
                </div>
              </div>
              <ul className="space-y-3">
                {['Kosteloos & vrijblijvend', 'Vaste prijsafspraken', 'Vaste contactpersoon', 'Direct beschikbaar'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-foreground"><CheckCircle2 className="h-5 w-5 text-brand-green" /> {t}</li>
                ))}
              </ul>
              <Button onClick={onQuoteClick} className="mt-6 w-full bg-brand-blue hover:bg-brand-blue-dark text-white h-11">Start aanvraag</Button>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        href="#waarom"
        aria-label="Scroll naar volgende sectie"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 h-9 w-9 rounded-full border border-white/40 items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors motion-safe:animate-float"
      >
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </a>
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}

/* ---------- WHY US ---------- */
function WhyUs() {
  return (
    <Section id="waarom" eyebrow="Waarom BesteFixo" title="De partner voor brandschone resultaten" subtitle="Met jarenlange ervaring, vakkundige medewerkers en een persoonlijke aanpak zorgen wij voor een omgeving waar u trots op bent." className="bg-muted/30">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {reasons.map((r, i) => (
          <motion.div key={r.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Card className="h-full border-border/60 hover:border-brand-blue/40 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 sm:p-7">
                <div className="h-12 w-12 rounded-xl gradient-fresh flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <r.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground">{r.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

/* ---------- ABOUT ---------- */
function About() {
  const values = [
    { icon: ShieldCheck, label: 'Betrouwbaarheid' },
    { icon: Award, label: 'Kwaliteit' },
    { icon: BadgeCheck, label: 'Professionaliteit' },
    { icon: ThumbsUp, label: 'Klantgerichtheid' },
  ]
  return (
    <section id="over" className="py-16 sm:py-20 lg:py-28">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
            <Image src={TEAM_IMG} alt={`Het team van ${brand.fullName}`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-premium flex items-center gap-3 sm:gap-4">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl gradient-fresh flex items-center justify-center shrink-0"><Award className="h-6 w-6 sm:h-7 sm:w-7 text-white" /></div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-brand-blue leading-none">6+ jaar</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">vakmanschap & ervaring</div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3 sm:mb-4"><Sparkles className="h-3.5 w-3.5" /> Over Ons</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 text-balance leading-tight">Een schoonmaakbedrijf met <span className="text-gradient-brand">passie voor kwaliteit</span></h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
            <Wordmark size="md" /> is ontstaan vanuit één duidelijke gedachte: schoonmaak verdient vakmanschap en aandacht. Wij combineren jarenlange ervaring met een persoonlijke benadering en hoogwaardige producten om iedere ruimte tot in detail te laten stralen.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 my-6 sm:my-7">
            <div className="rounded-2xl border border-border/60 p-5 bg-card">
              <div className="font-display font-bold text-brand-blue text-lg mb-1">Onze Missie</div>
              <p className="text-sm text-muted-foreground">Een brandschone, gezonde leefomgeving creëren voor iedere klant  met betrouwbare service en zichtbaar resultaat.</p>
            </div>
            <div className="rounded-2xl border border-border/60 p-5 bg-card">
              <div className="font-display font-bold text-brand-blue text-lg mb-1">Onze Visie</div>
              <p className="text-sm text-muted-foreground">Dé referentie zijn voor premium schoonmaak in Nederland, waar vertrouwen en kwaliteit hand in hand gaan.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-muted/50 hover:bg-accent transition-colors">
                <v.icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-blue mb-1.5 sm:mb-2" />
                <span className="text-xs sm:text-sm font-semibold">{v.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- SERVICE IMAGE CAROUSEL ---------- */
function ServiceCarousel({ images, title, autoplayDelay = 4000, offset = 0 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selected, setSelected] = useState(0)
  const onSelect = useCallback(() => { if (emblaApi) setSelected(emblaApi.selectedScrollSnap()) }, [emblaApi])
  useEffect(() => {
    if (!emblaApi) return
    onSelect(); emblaApi.on('select', onSelect)
    const id = setInterval(() => emblaApi.scrollNext(), autoplayDelay + offset)
    return () => { clearInterval(id); emblaApi.off('select', onSelect) }
  }, [emblaApi, autoplayDelay, offset, onSelect])
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-t-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="relative flex-[0_0_100%] aspect-[16/10]">
              <Image src={src} alt={`${title} ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button key={i} type="button" onClick={() => emblaApi?.scrollTo(i)} aria-label={`Foto ${i + 1}`} className={`h-1.5 rounded-full transition-all ${selected === i ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'}`} />
        ))}
      </div>
    </div>
  )
}

/* ---------- SERVICES ---------- */
function Services({ onQuoteClick }) {
  return (
    <Section id="diensten" eyebrow="Onze Diensten" title="Compleet aanbod voor elke schoonmaakvraag" subtitle="Van dagelijks onderhoud tot diepgaande reinigingen  wij hebben de juiste dienst voor uw situatie." className="bg-muted/30">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {SERVICES.map((s, i) => (
          <motion.div key={s.slug} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={fadeUp}>
            <Card className="h-full bg-card border-border/60 hover:border-brand-green/50 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col">
              <ServiceCarousel images={s.images} title={s.title} offset={i * 250} />
              <CardContent className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-11 w-11 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-tight">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{s.short}</p>
                <ul className="space-y-1.5 mb-4">
                  {s.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="text-xs flex items-start gap-2 text-foreground/80"><CheckCircle2 className="h-3.5 w-3.5 text-brand-green mt-0.5 shrink-0" /> <span>{b}</span></li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-2">
                  <ServiceDetailDialog service={s} onQuoteClick={onQuoteClick} />
                  <Button onClick={onQuoteClick} variant="ghost" size="sm" className="flex-1 justify-center px-2 text-brand-blue hover:text-brand-blue-dark hover:bg-brand-blue/5 font-semibold">
                    Offerte <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function ServiceDetailDialog({ service, onQuoteClick }) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex-1 border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white">Meer info</Button>
      </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 max-h-[92vh] overflow-y-auto">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <ServiceCarousel images={service.images} title={service.title} autoplayDelay={3500} />
        </div>
        <div className="p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl sm:text-3xl flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl gradient-fresh flex items-center justify-center text-white shrink-0"><service.icon className="h-5 w-5" /></span>
              {service.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground mt-2">{service.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-5">
            <div className="font-semibold text-foreground mb-3">Voordelen</div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-brand-green mt-0.5 shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button onClick={() => { setOpen(false); onQuoteClick() }} className="bg-brand-green hover:bg-brand-green/90 text-white flex-1">Offerte voor {service.title}</Button>
            <Button asChild variant="outline" className="flex-1"><a href={`tel:${contact.phoneRaw}`}><Phone className="mr-2 h-4 w-4"/>Direct bellen</a></Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

/* ---------- PROCESS ---------- */
function Process() {
  return (
    <Section id="werkproces" eyebrow="Onze Werkwijze" title="Zo werken wij  eenvoudig en helder" subtitle="In vier overzichtelijke stappen van eerste contact tot brandschoon resultaat.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-30" />
        {steps.map((s, i) => (
          <motion.div key={s.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="relative text-center">
            <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-full gradient-fresh shadow-premium mb-4">
              <s.icon className="h-9 w-9 text-white" />
              <span className="absolute -top-1 -right-1 h-7 w-7 rounded-full bg-white border-2 border-brand-blue text-brand-blue font-bold text-sm flex items-center justify-center">{i + 1}</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

/* ---------- REVIEWS ---------- */
function StarInput({ value, onChange }) {
  const [hover, setHover] = useState(0)
  return (
    <div role="radiogroup" aria-label="Beoordeling in sterren" className="flex gap-1" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          role="radio"
          aria-checked={value === i}
          onClick={() => onChange(i)}
          onMouseEnter={() => setHover(i)}
          aria-label={`${i} ${i === 1 ? 'ster' : 'sterren'}`}
          className="p-1.5 -m-1 transition-transform hover:scale-110 focus-visible:scale-110 rounded"
        >
          <Star
            className={`h-7 w-7 transition-colors ${(hover || value) >= i ? 'fill-yellow-400 text-yellow-400' : 'fill-transparent text-muted-foreground/40'}`}
            aria-hidden="true"
          />
        </button>
      ))}
      <span className="sr-only" aria-live="polite">{value ? `${value} van 5 sterren geselecteerd` : 'Geen beoordeling geselecteerd'}</span>
    </div>
  )
}

function ReviewForm({ onSubmitted }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', role: '', rating: 0, text: '' })
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.rating || !form.text || form.text.length < 10) {
      toast.error('Vul uw naam, sterrenbeoordeling en bericht (min. 10 tekens) in.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('https://bestefixo-api.fly.dev/api/reviews', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis')
      toast.success(data.message || 'Bedankt voor uw review!')
      setForm({ name: '', role: '', rating: 0, text: '' })
      onSubmitted?.(data.review)
    } catch (err) {
      toast.error(err.message || 'Er ging iets mis. Probeer het opnieuw.')
    } finally { setLoading(false) }
  }
  return (
    <Card className="bg-white/95 border-white/40 backdrop-blur shadow-premium text-foreground">
      <CardContent className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <PencilLine className="h-5 w-5 text-brand-blue" />
          <h3 className="font-display text-xl font-bold">Schrijf een review</h3>
        </div>
        <form onSubmit={submit} noValidate className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="r-name">Naam *</Label>
              <Input id="r-name" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Uw naam" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="r-role">Functie of woonplaats</Label>
              <Input id="r-role" value={form.role} onChange={(e) => update('role', e.target.value)} placeholder="Bijv. Particulier, Amsterdam" className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label>Beoordeling *</Label>
            <div className="mt-1.5"><StarInput value={form.rating} onChange={(v) => update('rating', v)} /></div>
          </div>
          <div>
            <Label htmlFor="r-text">Uw ervaring *</Label>
            <Textarea id="r-text" required rows={4} value={form.text} onChange={(e) => update('text', e.target.value)} placeholder="Vertel ons over uw ervaring met BesteFixo..." className="mt-1.5" maxLength={1000} />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-brand-green hover:bg-brand-green/90 text-white h-11">
            {loading ? 'Versturen...' : <>Plaats review <Send className="ml-2 h-4 w-4" /></>}
          </Button>
        </form>
      </CardContent>
    </Card>
    )
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <Section id="projecten" eyebrow="Onze Projecten" title="Laatste schoonmaakprojecten" subtitle="Bekijk enkele van onze voltooide projecten  van kantoorschoonmaak tot vakantieparken.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.slug}
            layout
            role="button"
            tabIndex={0}
            aria-expanded={selectedId === project.slug}
            aria-controls={`project-details-${project.slug}`}
            className="group relative bg-white rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-lg focus-visible:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedId(selectedId === project.slug ? null : project.slug)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedId(selectedId === project.slug ? null : project.slug)
              }
            }}
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white text-xs">
                <MapPin className="h-3 w-3" />
                <span>{project.location}</span>
                <span className="ml-auto flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <h3 className="font-display font-semibold text-base sm:text-lg text-brand-blue-dark group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                {project.description}
              </p>

              {/* Expanded details */}
              <AnimatePresence>
                {selectedId === project.slug && (
                  <motion.div
                    id={`project-details-${project.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 mt-3 border-t border-border/40">
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      {/* Extra images */}
                      {project.images.length > 1 && (
                        <div className="grid grid-cols-2 gap-2">
                          {project.images.slice(1).map((img, i) => (
                            <div key={i} className="relative h-20 rounded-lg overflow-hidden">
                              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-brand-green">
                {selectedId === project.slug ? 'Minder tonen' : 'Meer bekijken'}
                <ArrowUpRight className={`h-3 w-3 transition-transform ${selectedId === project.slug ? 'rotate-[135deg]' : ''}`} aria-hidden="true" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Reviews() {
  const [items, setItems] = useState(SEED_TESTIMONIALS)
  const [idx, setIdx] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let alive = true
    fetch('https://bestefixo-api.fly.dev/api/reviews?limit=50')
      .then((r) => r.json())
      .then((data) => {
        if (!alive) return
        const incoming = (data?.reviews || []).map((r) => ({ name: r.name, role: r.role, rating: r.rating, text: r.text }))
        // Newest user reviews first, then seed.
        setItems([...incoming, ...SEED_TESTIMONIALS])
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
    return () => { alive = false }
  }, [])

  useEffect(() => {
    if (!items.length) return
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5500)
    return () => clearInterval(t)
  }, [items.length])

  const current = items[idx] || SEED_TESTIMONIALS[0]

  const onNewReview = (r) => {
    if (!r) return
    setItems((prev) => [r, ...prev])
    setIdx(0)
  }

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-28 gradient-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 ring-1 ring-white/20"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> Klantbeoordelingen</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">Wat onze klanten over ons zeggen</h2>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">Lees de ervaringen van klanten of deel zelf uw mening.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div key={`${current.name}-${idx}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">{[...Array(current.rating || 5)].map((_, i) => <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400" />)}</div>
                <blockquote className="font-display text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed mb-6">&ldquo;{current.text}&rdquo;</blockquote>
                <div className="font-semibold text-base sm:text-lg">{current.name}</div>
                <div className="text-white/80 text-sm">{current.role}</div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center lg:justify-start gap-2 mt-6 sm:mt-8 flex-wrap">
              {items.slice(0, 8).map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Review ${i + 1}`} className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-brand-green-light' : 'w-2 bg-white/40 hover:bg-white/60'}`} />
              ))}
            </div>
            {loaded && items.length > 0 && (
              <div className="mt-4 text-center lg:text-left text-xs text-white/70">Toont {items.length} review{items.length !== 1 ? 's' : ''}</div>
            )}
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <ReviewForm onSubmitted={onNewReview} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- QUOTE FORM ---------- */
function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', serviceType: '', location: '', message: '' })
  const [errors, setErrors] = useState({})
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Vul uw naam in.'
    if (!form.email.trim()) next.email = 'Vul uw e-mailadres in.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Vul een geldig e-mailadres in.'
    if (!form.phone.trim()) next.phone = 'Vul uw telefoonnummer in.'
    if (!form.serviceType) next.serviceType = 'Kies een dienst.'
    return next
  }
  const submit = async (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      toast.error('Controleer de gemarkeerde velden hieronder.')
      const firstField = ['name', 'email', 'phone', 'serviceType'].find((k) => next[k])
      document.getElementById(firstField)?.focus()
      return
    }
    setLoading(true)
    try {
      const res = await fetch('https://bestefixo-api.fly.dev/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis')
      toast.success(data.message || 'Bedankt voor uw aanvraag!')
      setForm({ name: '', company: '', email: '', phone: '', serviceType: '', location: '', message: '' })
      setErrors({})
    } catch (err) {
      toast.error(err.message || 'Er ging iets mis. Probeer het opnieuw.')
    } finally { setLoading(false) }
  }
  const errorClass = (field) => (errors[field] ? 'border-destructive focus-visible:ring-destructive' : '')
  return (
    <section id="offerte" className="py-16 sm:py-20 lg:py-28 bg-muted/30">
      <div className="container grid lg:grid-cols-5 gap-10 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3 sm:mb-4"><Sparkles className="h-3.5 w-3.5" /> Offerte Aanvragen</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 text-balance leading-tight">Vraag een <span className="text-gradient-brand">vrijblijvende offerte</span> aan</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-5 sm:mb-6">Vul het formulier in en wij nemen binnen 24 uur contact met u op met een passend voorstel.</p>
          <ul className="space-y-3">
            {['100% gratis & vrijblijvend', 'Reactie binnen 24 uur', 'Vaste prijsafspraken', 'Persoonlijk advies'].map((t) => (
              <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-brand-green" /> <span>{t}</span></li>
            ))}
          </ul>
          <div className="mt-7 sm:mt-8 p-5 rounded-2xl bg-white border border-border/60 flex items-center gap-4">
            <BrandLogo size={52} />
            <div>
              <div className="font-display font-bold text-brand-blue">Liever direct bellen?</div>
              <a href={`tel:${contact.phoneRaw}`} className="text-sm hover:text-brand-blue-dark">{contact.phone}</a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <Card className="shadow-premium border-border/60">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Naam *</Label>
                  <Input id="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Uw volledige naam" className={`mt-1.5 ${errorClass('name')}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} required />
                  {errors.name && <p id="name-error" role="alert" className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="company">Bedrijfsnaam</Label>
                  <Input id="company" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Optioneel" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="naam@email.nl" className={`mt-1.5 ${errorClass('email')}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} required />
                  {errors.email && <p id="email-error" role="alert" className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Telefoonnummer *</Label>
                  <Input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="06 12 34 56 78" className={`mt-1.5 ${errorClass('phone')}`} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} required />
                  {errors.phone && <p id="phone-error" role="alert" className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="serviceType">Type schoonmaak *</Label>
                  <Select value={form.serviceType} onValueChange={(v) => update('serviceType', v)}>
                    <SelectTrigger id="serviceType" className={`mt-1.5 ${errorClass('serviceType')}`} aria-invalid={!!errors.serviceType} aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}><SelectValue placeholder="Kies een dienst" /></SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>)}
                      <SelectItem value="Anders / Maatwerk">Anders / Maatwerk</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && <p id="serviceType-error" role="alert" className="text-xs text-destructive mt-1">{errors.serviceType}</p>}
                </div>
                <div>
                  <Label htmlFor="location">Locatie</Label>
                  <Input id="location" value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="Stad / postcode" className="mt-1.5" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => update('message', e.target.value)} rows={4} placeholder="Vertel ons kort over uw situatie of wensen..." className="mt-1.5" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" disabled={loading} size="lg" className="w-full bg-brand-green hover:bg-brand-green/90 text-white h-12 shadow-premium">
                    {loading ? 'Versturen...' : <>Verstuur Aanvraag <Send className="ml-2 h-4 w-4" /></>}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">Wij reageren binnen 24 uur op uw aanvraag.</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <Section id="faq" eyebrow="Veelgestelde Vragen" title="Antwoorden op uw vragen" subtitle="Vindt u geen antwoord op uw vraag? Neem gerust contact met ons op.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border/60 rounded-xl px-4 sm:px-5 bg-card hover:border-brand-blue/40 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm sm:text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}

/* ---------- CONTACT (no maps) ---------- */
function Contact() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Vul uw naam in.'
    if (!form.email.trim()) next.email = 'Vul uw e-mailadres in.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Vul een geldig e-mailadres in.'
    if (!form.message.trim()) next.message = 'Vul uw bericht in.'
    return next
  }
  const submit = async (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      toast.error('Controleer de gemarkeerde velden hieronder.')
      const firstField = ['c-name', 'c-email', 'c-msg'].find((id, i) => next[['name', 'email', 'message'][i]])
      document.getElementById(firstField)?.focus()
      return
    }
    setLoading(true)
    try {
      const res = await fetch('https://bestefixo-api.fly.dev/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis')
      toast.success(data.message || 'Bedankt voor uw bericht!')
      setForm({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (err) {
      toast.error(err.message || 'Er ging iets mis.')
    } finally { setLoading(false) }
  }
  const errorClass = (field) => (errors[field] ? 'border-destructive focus-visible:ring-destructive' : '')
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3 sm:mb-4"><Sparkles className="h-3.5 w-3.5" /> Contact</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">We helpen u graag verder</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">Heeft u een vraag of wilt u meer informatie? Neem direct contact met ons op  wij zijn er voor u.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <Card className="border-border/60 shadow-soft">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Stuur ons een bericht</h3>
              <form onSubmit={submit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="c-name">Naam *</Label>
                    <Input id="c-name" required value={form.name} onChange={(e) => update('name', e.target.value)} className={`mt-1.5 ${errorClass('name')}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-error' : undefined} />
                    {errors.name && <p id="c-name-error" role="alert" className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div><Label htmlFor="c-phone">Telefoon</Label><Input id="c-phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="mt-1.5" /></div>
                </div>
                <div>
                  <Label htmlFor="c-email">E-mail *</Label>
                  <Input id="c-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={`mt-1.5 ${errorClass('email')}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-error' : undefined} />
                  {errors.email && <p id="c-email-error" role="alert" className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="c-msg">Bericht *</Label>
                  <Textarea id="c-msg" required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} className={`mt-1.5 ${errorClass('message')}`} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-msg-error' : undefined} />
                  {errors.message && <p id="c-msg-error" role="alert" className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white h-11">{loading ? 'Versturen...' : 'Verstuur bericht'}</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-4 sm:space-y-5">
            {[
              { icon: Phone, label: 'Bel ons', value: contact.phone, href: `tel:${contact.phoneRaw}` },
              { icon: MessageCircle, label: 'WhatsApp', value: contact.phone, href: `https://wa.me/${contact.whatsappNumber}` },
              { icon: Mail, label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` },
              { icon: MapPin, label: 'Werkgebied', value: contact.workArea },
              { icon: Clock, label: 'Openingstijden', value: contact.hours },
            ].map((item) => (
              <a key={item.label} href={item.href || '#'} target={item.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-card border border-border/60 hover:border-brand-blue/40 hover:shadow-soft transition-all group">
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl gradient-fresh flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"><item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground mt-0.5 break-words">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA BANNER ---------- */
function CtaBanner({ onQuoteClick }) {
  return (
    <section className="py-14 sm:py-16 relative overflow-hidden gradient-brand">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="container relative text-center text-white">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-5 text-balance leading-tight">Klaar voor een brandschone omgeving?</motion.h3>
        <p className="text-white/90 text-base sm:text-lg mb-7 sm:mb-8 max-w-2xl mx-auto">Vraag vandaag nog uw kosteloze offerte aan en ervaar het verschil van premium schoonmaak.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={onQuoteClick} className="bg-brand-green hover:bg-brand-green/90 text-white h-12 px-6 sm:px-7 shadow-premium">Vraag Offerte Aan <ChevronRight className="ml-1 h-5 w-5" /></Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-white/10 border-white/40 text-white hover:text-white h-12 px-6 sm:px-7">
            <a href={`tel:${contact.phoneRaw}`}><Phone className="mr-2 h-4 w-4" /> {contact.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ---------- APP ---------- */
function App() {
  const scrollToQuote = () => {
    const el = document.getElementById('offerte')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <>
      <a href="#main" className="skip-link">Direct naar inhoud</a>
      <Navbar onQuoteClick={scrollToQuote} />
      <main id="main" className="min-h-screen bg-background overflow-x-hidden pb-16 lg:pb-0">
        <Hero onQuoteClick={scrollToQuote} />
        <StatsBar />
        <WhyUs />
        <About />
        <Services onQuoteClick={scrollToQuote} />
        <Process />
        <Projects />
        <Reviews />
        <QuoteForm />
        <FAQ />
        <Contact />
        <CtaBanner onQuoteClick={scrollToQuote} />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileCtaBar onQuoteClick={scrollToQuote} />
      <CookieBanner />
    </>
  )
}

export default App

