'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, MessageCircle, ArrowUp, Menu, X, Star,
  ShieldCheck, Sparkles, Leaf, Award, CheckCircle2, Send, Building2, Home as HomeIcon,
  SprayCan, Hammer, GlassWater, Wind, ChevronRight, BadgeCheck, Users, ThumbsUp,
  ClipboardList, CalendarCheck2, Wrench, Smile,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { toast } from 'sonner'

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_36e8bb32-da94-4726-ae14-13ecc225d83d/artifacts/78dca20n_WhatsApp%20Image%202026-05-29%20at%2022.18.16.jpeg'
const HERO_IMG = 'https://images.pexels.com/photos/6195949/pexels-photo-6195949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const DEEP_IMG = 'https://images.pexels.com/photos/4098885/pexels-photo-4098885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const WINDOW_IMG = 'https://images.unsplash.com/photo-1524803504179-6d7ae4d283f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHx3aW5kb3clMjBjbGVhbmluZ3xlbnwwfHx8Ymx1ZXwxNzgwMDk3MjI1fDA&ixlib=rb-4.1.0&q=85'
const GLASS_IMG = 'https://images.pexels.com/photos/16898979/pexels-photo-16898979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const HOME_IMG = 'https://images.pexels.com/photos/7513075/pexels-photo-7513075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const TEAM_IMG = 'https://images.pexels.com/photos/14431051/pexels-photo-14431051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

const PHONE = '+31 6 12 34 56 78'
const PHONE_RAW = '+31612345678'
const WA_NUMBER = '31612345678'
const EMAIL = 'info@bestefixo.nl'

const services = [
  { icon: Building2, title: 'Kantoorschoonmaak', desc: 'Professionele dagelijkse of wekelijkse schoonmaak van uw kantoor. Frisse werkplekken, productieve teams.', benefits: ['Flexibele tijden', 'Vaste medewerker', 'Hygiëne-certificaat'] },
  { icon: HomeIcon, title: 'Huisschoonmaak', desc: 'Een brandschoon huis zonder zorgen. Wij zorgen voor elk detail, u geniet van uw vrije tijd.', benefits: ['Betrouwbare schoonmakers', 'Eigen sleutelbeheer', 'Tevredenheidsgarantie'] },
  { icon: SprayCan, title: 'Dieptereiniging', desc: 'Grondige reiniging tot in de kleinste hoek. Ideaal voor periodieke grote schoonmaakbeurten.', benefits: ['Hoogwaardige middelen', 'Anti-bacterieel', 'Zichtbaar verschil'] },
  { icon: Hammer, title: 'Opleveringsschoonmaak', desc: 'Verhuist u? Wij leveren uw woning of pand bezemschoon en klaar voor inspectie op.', benefits: ['Inspectie-proof', 'Snel uit te voeren', 'Vaste prijsafspraak'] },
  { icon: GlassWater, title: 'Glasbewassing', desc: 'Streeploos heldere ramen, binnen én buiten. Voor woningen, kantoren en bedrijfspanden.', benefits: ['Tot grote hoogte', 'Vaste rondes mogelijk', 'Verzekerd werk'] },
  { icon: Wind, title: 'Vloeronderhoud', desc: 'Vakkundig onderhoud voor pvc, hout, marmer, tegels en meer. Behoud uw vloer langer mooi.', benefits: ['Boenen & kristalliseren', 'Bescherming laag', 'Materiaal-specifiek'] },
  { icon: ClipboardList, title: 'Trappenhuisreiniging', desc: 'VvE en woningcorporatie? Wij verzorgen vaste rondes voor schone trappenhuizen en gangen.', benefits: ['Vaste planning', 'Rapportages', 'Scherp tarief per ronde'] },
  { icon: Wrench, title: 'Schoonmaak na verbouwing', desc: 'Stof, kalk en bouwresten verwijderen wij grondig zodat uw ruimte direct bruikbaar is.', benefits: ['Bouwstof verwijdering', 'Glas en kozijnen', 'Klaar in één dag'] },
]

const reasons = [
  { icon: ShieldCheck, title: 'Betrouwbaar', desc: 'Verzekerde, gescreende medewerkers en heldere afspraken — altijd.' },
  { icon: Award, title: 'Premium Kwaliteit', desc: 'Aandacht voor detail en hoogwaardige, milieubewuste middelen.' },
  { icon: Sparkles, title: 'Brandschoon Resultaat', desc: 'Wij stoppen pas als het écht schoon is. Tevredenheidsgarantie.' },
  { icon: Leaf, title: 'Milieuvriendelijk', desc: 'Duurzame producten en methodes voor een gezonde leefomgeving.' },
  { icon: BadgeCheck, title: 'Gecertificeerd', desc: 'Werkend volgens de normen van de schoonmaakbranche (OSB).' },
  { icon: Users, title: 'Persoonlijk', desc: 'Vast aanspreekpunt en flexibele planning op maat.' },
]

const steps = [
  { icon: Phone, title: 'Contact', desc: 'U neemt contact op of vraagt online een offerte aan.' },
  { icon: ClipboardList, title: 'Inventarisatie', desc: 'Wij stellen een passend voorstel op, kosteloos en vrijblijvend.' },
  { icon: CalendarCheck2, title: 'Planning', desc: 'We plannen op uw gewenste moment en stellen het team samen.' },
  { icon: Smile, title: 'Brandschoon', desc: 'U geniet van een spierwit resultaat met tevredenheidsgarantie.' },
]

const testimonials = [
  { name: 'Sander de Vries', role: 'Office Manager, TechHub Amsterdam', stars: 5, text: 'Beste Fixo verzorgt al ruim 2 jaar onze kantoorschoonmaak. Altijd punctueel, vriendelijk en een resultaat om trots op te zijn. Aanrader!' },
  { name: 'Marieke Jansen', role: 'Particulier, Utrecht', stars: 5, text: 'Eindelijk een schoonmaakbedrijf dat doet wat het belooft. Mijn huis straalt en het team is super betrouwbaar en netjes.' },
  { name: 'Jeroen Bakker', role: 'VvE Voorzitter, Rotterdam', stars: 5, text: 'Onze trappenhuizen zijn nog nooit zo schoon geweest. Heldere communicatie en scherpe prijzen. Top samenwerking.' },
  { name: 'Lisa Hendriks', role: 'Praktijkhouder, Den Haag', stars: 5, text: 'Hygiëne is voor ons cruciaal. Beste Fixo levert constante topkwaliteit en denkt actief mee. Echt premium service.' },
  { name: 'Bram van Dijk', role: 'Aannemer, Eindhoven', stars: 5, text: 'Na elke verbouwing schakelen we Beste Fixo in voor de opleveringsschoonmaak. Klanten zijn altijd verrast door het resultaat.' },
]

const faqs = [
  { q: 'In welke regio is Beste Fixo actief?', a: 'Wij zijn actief in heel Nederland met focus op Amsterdam, Rotterdam, Den Haag, Utrecht en omgeving. Neem contact op voor uw specifieke locatie.' },
  { q: 'Kan ik vrijblijvend een offerte aanvragen?', a: 'Ja, een offerte is altijd kosteloos en geheel vrijblijvend. Wij komen indien gewenst graag bij u langs voor een persoonlijke inventarisatie.' },
  { q: 'Werken jullie met eigen medewerkers?', a: 'Ja, al onze schoonmakers zijn vast in dienst, verzekerd en zorgvuldig geselecteerd. Geen onderaannemers, wel vaste gezichten.' },
  { q: 'Gebruiken jullie milieuvriendelijke producten?', a: 'Standaard werken wij met duurzame, hoogwaardige producten die veilig zijn voor mens, dier en milieu — zonder in te leveren op kwaliteit.' },
  { q: 'Wat als ik niet tevreden ben?', a: 'Wij hanteren een 100% tevredenheidsgarantie. Bent u niet tevreden? Dan komen wij kosteloos terug om het op te lossen.' },
  { q: 'Hoe snel kunnen jullie starten?', a: 'In de meeste gevallen kunnen we binnen 48 uur starten. Voor spoedklussen zijn we vaak dezelfde dag beschikbaar.' },
]

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#over', label: 'Over Ons' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#werkproces', label: 'Werkwijze' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' } }),
}

function Navbar({ onQuoteClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-soft py-2' : 'bg-white/70 backdrop-blur-sm py-3'}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Beste Fixo Home">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image src={LOGO_URL} alt="Beste Fixo Schoonmaak" fill className="object-contain" priority />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-xl font-bold text-brand-blue">Beste Fixo</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-brand-green font-semibold">Schoonmaak</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-blue transition-colors relative group">
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <Button onClick={onQuoteClick} className="bg-brand-green hover:bg-brand-green/90 text-white shadow-soft">
            Vraag Offerte Aan
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu"><Menu className="h-6 w-6" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[360px]">
            <div className="flex flex-col gap-2 mt-8">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-3 text-base font-medium border-b hover:text-brand-blue">{l.label}</a>
              ))}
              <a href={`tel:${PHONE_RAW}`} className="mt-4 flex items-center gap-2 text-brand-blue font-semibold"><Phone className="h-4 w-4"/>{PHONE}</a>
              <Button onClick={() => { setOpen(false); onQuoteClick() }} className="mt-2 bg-brand-green hover:bg-brand-green/90 text-white">Vraag Offerte Aan</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function Hero({ onQuoteClick }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={HERO_IMG} alt="Professionele schoonmakers aan het werk" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue/75 to-brand-blue/40" />
      </motion.div>
      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-white">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-green-light" /> Premium Schoonmaak in Nederland
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-balance">
            Professionele Schoonmaakdiensten voor <span className="text-brand-green-light">Bedrijven</span> en <span className="text-brand-green-light">Particulieren</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl">
            Beste Fixo zorgt voor een brandschone omgeving waarop u kunt vertrouwen.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={onQuoteClick} className="bg-brand-green hover:bg-brand-green/90 text-white text-base h-12 px-7 shadow-premium">
              Vraag Offerte Aan <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20 backdrop-blur border-white/40 text-white hover:text-white text-base h-12 px-7">
              <a href="#contact">Neem Contact Op</a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/90">
            <div className="flex items-center gap-2"><div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div><span className="text-sm">4.9 / 5 — 127 reviews</span></div>
            <div className="flex items-center gap-2 text-sm"><ShieldCheck className="h-5 w-5 text-brand-green-light" /> Verzekerd & gecertificeerd</div>
            <div className="flex items-center gap-2 text-sm"><BadgeCheck className="h-5 w-5 text-brand-green-light" /> 100% Tevredenheidsgarantie</div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="lg:col-span-5 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 gradient-fresh blur-2xl opacity-30 rounded-full" />
            <div className="relative bg-white/95 backdrop-blur rounded-3xl p-8 shadow-premium">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative h-16 w-16">
                  <Image src={LOGO_URL} alt="" fill className="object-contain" />
                </div>
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
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}

function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-14">
          {eyebrow && <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4"><Sparkles className="h-3.5 w-3.5" /> {eyebrow}</div>}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <Section id="waarom" eyebrow="Waarom Beste Fixo" title="De partner voor brandschone resultaten" subtitle="Met jarenlange ervaring, vakkundige medewerkers en een persoonlijke aanpak zorgen wij voor een omgeving waar u trots op bent." className="bg-muted/30">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div key={r.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Card className="h-full border-border/60 hover:border-brand-blue/40 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-7">
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

function About() {
  const values = [
    { icon: ShieldCheck, label: 'Betrouwbaarheid' },
    { icon: Award, label: 'Kwaliteit' },
    { icon: BadgeCheck, label: 'Professionaliteit' },
    { icon: ThumbsUp, label: 'Klantgerichtheid' },
  ]
  return (
    <section id="over" className="py-20 lg:py-28">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
            <Image src={TEAM_IMG} alt="Het team van Beste Fixo Schoonmaak" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-premium hidden md:flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl gradient-fresh flex items-center justify-center"><Award className="h-7 w-7 text-white" /></div>
            <div>
              <div className="font-display text-2xl font-bold text-brand-blue">10+ jaar</div>
              <div className="text-xs text-muted-foreground">vakmanschap & ervaring</div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4"><Sparkles className="h-3.5 w-3.5" /> Over Ons</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-balance">Een schoonmaakbedrijf met <span className="text-gradient-brand">passie voor kwaliteit</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Beste Fixo is ontstaan vanuit één duidelijke gedachte: schoonmaak verdient vakmanschap en aandacht. Wij combineren jarenlange ervaring met een persoonlijke benadering en hoogwaardige producten om iedere ruimte tot in detail te laten stralen.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-7">
            <div className="rounded-2xl border border-border/60 p-5 bg-card">
              <div className="font-display font-bold text-brand-blue text-lg mb-1">Onze Missie</div>
              <p className="text-sm text-muted-foreground">Een brandschone, gezonde leefomgeving creëren voor iedere klant — met betrouwbare service en zichtbaar resultaat.</p>
            </div>
            <div className="rounded-2xl border border-border/60 p-5 bg-card">
              <div className="font-display font-bold text-brand-blue text-lg mb-1">Onze Visie</div>
              <p className="text-sm text-muted-foreground">Dé referentie zijn voor premium schoonmaak in Nederland, waar vertrouwen en kwaliteit hand in hand gaan.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/50 hover:bg-accent transition-colors">
                <v.icon className="h-7 w-7 text-brand-blue mb-2" />
                <span className="text-sm font-semibold">{v.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services({ onQuoteClick }) {
  return (
    <Section id="diensten" eyebrow="Onze Diensten" title="Compleet aanbod voor élke schoonmaakvraag" subtitle="Van dagelijks onderhoud tot diepgaande reinigingen — wij hebben de juiste dienst voor uw situatie." className="bg-muted/30">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Card className="h-full bg-card border-border/60 hover:border-brand-green/50 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="h-14 w-14 rounded-2xl bg-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white text-brand-blue flex items-center justify-center transition-colors mb-4">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.benefits.map((b) => (
                    <li key={b} className="text-xs flex items-center gap-2 text-foreground/80"><CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> {b}</li>
                  ))}
                </ul>
                <Button onClick={onQuoteClick} variant="ghost" size="sm" className="justify-start px-0 text-brand-blue hover:text-brand-blue-dark hover:bg-transparent group/btn font-semibold">
                  Offerte voor {s.title.toLowerCase()} <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-12">
        {[{img:DEEP_IMG,label:'Dieptereiniging'},{img:WINDOW_IMG,label:'Glasbewassing'},{img:HOME_IMG,label:'Huisschoonmaak'}].map((it) => (
          <div key={it.label} className="relative h-48 rounded-2xl overflow-hidden group">
            <Image src={it.img} alt={it.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-display font-bold text-lg">{it.label}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Process() {
  return (
    <Section id="werkproces" eyebrow="Onze Werkwijze" title="Zo werken wij — eenvoudig en helder" subtitle="In vier overzichtelijke stappen van eerste contact tot brandschoon resultaat.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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

function Testimonials() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5500)
    return () => clearInterval(t)
  }, [])
  const t = testimonials[idx]
  return (
    <section id="reviews" className="py-20 lg:py-28 gradient-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4 ring-1 ring-white/20"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> Klantbeoordelingen</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Wat onze klanten over ons zeggen</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="text-center">
              <div className="flex justify-center mb-5">{[...Array(t.stars)].map((_, i) => <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />)}</div>
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed mb-7">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="font-semibold text-lg">{t.name}</div>
              <div className="text-white/80 text-sm">{t.role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Review ${i + 1}`} className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-brand-green-light' : 'w-2 bg-white/40 hover:bg-white/60'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteForm({ formRef }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', serviceType: '', location: '', message: '' })
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.serviceType) {
      toast.error('Vul alstublieft alle verplichte velden in.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis')
      toast.success(data.message || 'Bedankt voor uw aanvraag!')
      setForm({ name: '', company: '', email: '', phone: '', serviceType: '', location: '', message: '' })
    } catch (err) {
      toast.error(err.message || 'Er ging iets mis. Probeer het opnieuw.')
    } finally { setLoading(false) }
  }
  return (
    <section id="offerte" ref={formRef} className="py-20 lg:py-28 bg-muted/30">
      <div className="container grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4"><Sparkles className="h-3.5 w-3.5" /> Offerte Aanvragen</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-balance">Vraag een <span className="text-gradient-brand">vrijblijvende offerte</span> aan</h2>
          <p className="text-muted-foreground text-lg mb-6">Vul het formulier in en wij nemen binnen 24 uur contact met u op met een passend voorstel.</p>
          <ul className="space-y-3">
            {['100% gratis & vrijblijvend', 'Reactie binnen 24 uur', 'Vaste prijsafspraken', 'Persoonlijk advies'].map((t) => (
              <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-brand-green" /> <span>{t}</span></li>
            ))}
          </ul>
          <div className="mt-8 p-5 rounded-2xl bg-white border border-border/60 flex items-center gap-4">
            <div className="relative h-14 w-14"><Image src={LOGO_URL} alt="" fill className="object-contain" /></div>
            <div>
              <div className="font-display font-bold text-brand-blue">Liever direct bellen?</div>
              <a href={`tel:${PHONE_RAW}`} className="text-sm hover:text-brand-blue-dark">{PHONE}</a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <Card className="shadow-premium border-border/60">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Naam *</Label>
                  <Input id="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Uw volledige naam" className="mt-1.5" required />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="company">Bedrijfsnaam</Label>
                  <Input id="company" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Optioneel" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="naam@email.nl" className="mt-1.5" required />
                </div>
                <div>
                  <Label htmlFor="phone">Telefoonnummer *</Label>
                  <Input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="06 12 34 56 78" className="mt-1.5" required />
                </div>
                <div>
                  <Label htmlFor="serviceType">Type schoonmaak *</Label>
                  <Select value={form.serviceType} onValueChange={(v) => update('serviceType', v)}>
                    <SelectTrigger id="serviceType" className="mt-1.5"><SelectValue placeholder="Kies een dienst" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                      <SelectItem value="Anders / Maatwerk">Anders / Maatwerk</SelectItem>
                    </SelectContent>
                  </Select>
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

function FAQ() {
  return (
    <Section id="faq" eyebrow="Veelgestelde Vragen" title="Antwoorden op uw vragen" subtitle="Vindt u geen antwoord op uw vraag? Neem gerust contact met ons op.">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border/60 rounded-xl px-5 bg-card hover:border-brand-blue/40 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}

function Contact() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis')
      toast.success(data.message || 'Bedankt voor uw bericht!')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      toast.error(err.message || 'Er ging iets mis.')
    } finally { setLoading(false) }
  }
  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4"><Sparkles className="h-3.5 w-3.5" /> Contact</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">We helpen u graag verder</h2>
          <p className="mt-4 text-lg text-muted-foreground">Heeft u een vraag of wilt u meer informatie? Neem direct contact met ons op — wij zijn er voor u.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-10">
          <Card className="border-border/60 shadow-soft">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold mb-6">Stuur ons een bericht</h3>
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="c-name">Naam *</Label><Input id="c-name" required value={form.name} onChange={(e) => update('name', e.target.value)} className="mt-1.5" /></div>
                  <div><Label htmlFor="c-phone">Telefoon</Label><Input id="c-phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="mt-1.5" /></div>
                </div>
                <div><Label htmlFor="c-email">E-mail *</Label><Input id="c-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="mt-1.5" /></div>
                <div><Label htmlFor="c-msg">Bericht *</Label><Textarea id="c-msg" required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} className="mt-1.5" /></div>
                <Button type="submit" disabled={loading} className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white h-11">{loading ? 'Versturen...' : 'Verstuur bericht'}</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-5">
            {[
              { icon: Phone, label: 'Bel ons', value: PHONE, href: `tel:${PHONE_RAW}` },
              { icon: Mail, label: 'E-mail', value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: 'Werkgebied', value: 'Amsterdam, Rotterdam, Den Haag, Utrecht & omgeving' },
              { icon: Clock, label: 'Openingstijden', value: 'Ma–Vr 08:00–18:00 · Za 09:00–14:00' },
            ].map((item) => (
              <a key={item.label} href={item.href || '#'} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/60 hover:border-brand-blue/40 hover:shadow-soft transition-all group">
                <div className="h-12 w-12 rounded-xl gradient-fresh flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"><item.icon className="h-6 w-6 text-white" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground mt-0.5">{item.value}</div>
                </div>
              </a>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-soft">
              <iframe title="Werkgebied Beste Fixo" src="https://www.google.com/maps?q=Amsterdam%2C+Netherlands&output=embed" width="100%" height="260" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaBanner({ onQuoteClick }) {
  return (
    <section className="py-16 relative overflow-hidden gradient-brand">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="container relative text-center text-white">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-balance">Klaar voor een brandschone omgeving?</motion.h3>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Vraag vandaag nog uw kosteloze offerte aan en ervaar het verschil van premium schoonmaak.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={onQuoteClick} className="bg-brand-green hover:bg-brand-green/90 text-white h-12 px-7 shadow-premium">Vraag Offerte Aan <ChevronRight className="ml-1 h-5 w-5" /></Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-white/10 border-white/40 text-white hover:text-white h-12 px-7">
            <a href={`tel:${PHONE_RAW}`}><Phone className="mr-2 h-4 w-4" /> {PHONE}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white/90 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-14 w-14 bg-white rounded-xl p-1"><Image src={LOGO_URL} alt="" fill className="object-contain p-1" /></div>
              <div>
                <div className="font-display text-xl font-bold text-white">Beste Fixo</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-brand-green-light font-semibold">Schoonmaak</div>
              </div>
            </div>
            <p className="text-sm text-white/70">Premium schoonmaakdiensten voor bedrijven en particulieren in heel Nederland.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => <li key={s.title}><a href="#diensten" className="hover:text-brand-green-light transition-colors">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#over" className="hover:text-brand-green-light transition-colors">Over Ons</a></li>
              <li><a href="#werkproces" className="hover:text-brand-green-light transition-colors">Werkwijze</a></li>
              <li><a href="#reviews" className="hover:text-brand-green-light transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-brand-green-light transition-colors">FAQ</a></li>
              <li><a href="#offerte" className="hover:text-brand-green-light transition-colors">Offerte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href={`tel:${PHONE_RAW}`}>{PHONE}</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> <span>Werkgebied: Randstad & omgeving</span></li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5" /> <span>Ma–Vr 08:00–18:00<br/>Za 09:00–14:00</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Beste Fixo Schoonmaak. Alle rechten voorbehouden.</div>
          <div className="flex gap-5"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Algemene voorwaarden</a></div>
        </div>
      </div>
    </footer>
  )
}

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hallo Beste Fixo, ik heb een vraag over jullie schoonmaakdiensten.')}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Stuur een WhatsApp bericht"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center shadow-premium animate-float"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Terug naar boven"
            className="fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center justify-center shadow-premium"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    try { if (!localStorage.getItem('bf-cookies')) setShow(true) } catch {}
  }, [])
  const accept = () => { try { localStorage.setItem('bf-cookies', '1') } catch {}; setShow(false) }
  if (!show) return null
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-premium border border-border/60 p-5">
        <div className="font-display font-bold text-brand-blue mb-1">Cookies</div>
        <p className="text-sm text-muted-foreground mb-4">Wij gebruiken cookies om uw ervaring op onze website te verbeteren. Door verder te gaan accepteert u onze cookies.</p>
        <div className="flex gap-2">
          <Button onClick={accept} size="sm" className="bg-brand-blue hover:bg-brand-blue-dark text-white">Accepteren</Button>
          <Button onClick={accept} size="sm" variant="outline">Sluiten</Button>
        </div>
      </motion.div>
    </div>
  )
}

function App() {
  const formRef = useRef(null)
  const scrollToQuote = () => {
    const el = document.getElementById('offerte')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <main className="min-h-screen bg-background">
      <Navbar onQuoteClick={scrollToQuote} />
      <Hero onQuoteClick={scrollToQuote} />
      <WhyUs />
      <About />
      <Services onQuoteClick={scrollToQuote} />
      <Process />
      <Testimonials />
      <QuoteForm formRef={formRef} />
      <FAQ />
      <Contact />
      <CtaBanner onQuoteClick={scrollToQuote} />
      <Footer />
      <FloatingButtons />
      <CookieBanner />
    </main>
  )
}

export default App
