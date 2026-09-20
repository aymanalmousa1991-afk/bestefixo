import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons, MobileCtaBar } from '@/components/floating-buttons'
import { CookieBanner } from '@/components/cookie-banner'
import { SITE } from '@/lib/config/site'

const { brand, contact } = SITE

export const metadata = {
  title: `Algemene voorwaarden | ${brand.fullName}`,
  description: `De algemene voorwaarden die van toepassing zijn op offertes en opdrachten van ${brand.fullName}.`,
  alternates: { canonical: '/voorwaarden' },
  robots: { index: true, follow: true },
}

function Article({ children }) {
  return (
    <article className="max-w-none space-y-4 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-1 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:text-muted-foreground [&_a]:text-brand-blue [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brand-blue-dark">
      {children}
    </article>
  )
}

export default function TermsPage() {
  return (
    <>
      <a href="#main" className="skip-link">Direct naar inhoud</a>
      <Navbar />
      <main id="main" className="min-h-screen bg-background pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4">Voorwaarden</div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">Algemene voorwaarden</h1>
          <p className="text-muted-foreground mb-10">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <Article>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en werkzaamheden van
              {' '}{brand.fullName} (KVK {contact.kvk}), hierna te noemen &ldquo;BesteFixo&rdquo;.
            </p>

            <h2>Offertes</h2>
            <p>
              Alle offertes van BesteFixo zijn vrijblijvend en kosteloos, tenzij uitdrukkelijk anders vermeld.
              Een offerte is gebaseerd op de informatie die de klant bij de aanvraag heeft verstrekt. Wijkt de
              situatie ter plaatse hiervan af, dan kan de prijs in overleg worden aangepast voordat de
              werkzaamheden starten.
            </p>

            <h2>Uitvoering van de werkzaamheden</h2>
            <p>
              BesteFixo voert de overeengekomen schoonmaakwerkzaamheden vakkundig uit, op de afgesproken locatie
              en het afgesproken tijdstip. Wijzigingen in planning worden zo vroeg mogelijk met de klant afgestemd.
            </p>

            <h2>Tevredenheidsgarantie</h2>
            <p>
              Is de klant niet tevreden over het geleverde resultaat, dan meldt de klant dit binnen 48 uur na
              uitvoering bij BesteFixo. BesteFixo komt in dat geval kosteloos terug om het gemelde punt te
              verhelpen.
            </p>

            <h2>Betaling</h2>
            <p>
              Facturen dienen te worden voldaan binnen de op de factuur vermelde betalingstermijn. Bij uitblijven
              van betaling is BesteFixo gerechtigd wettelijke rente en redelijke incassokosten in rekening te
              brengen.
            </p>

            <h2>Annulering</h2>
            <p>
              Een geplande afspraak kan kosteloos worden geannuleerd of verzet tot 24 uur voor aanvang. Bij latere
              annulering kan BesteFixo een deel van de overeengekomen prijs in rekening brengen.
            </p>

            <h2>Aansprakelijkheid</h2>
            <p>
              BesteFixo is aansprakelijk voor schade die aantoonbaar het rechtstreekse gevolg is van een
              tekortkoming in de uitvoering van de werkzaamheden, tot maximaal het factuurbedrag van de betreffende
              opdracht, tenzij sprake is van opzet of grove nalatigheid.
            </p>

            <h2>Toepasselijk recht</h2>
            <p>
              Op alle overeenkomsten met BesteFixo is Nederlands recht van toepassing. Geschillen worden zo mogelijk
              in onderling overleg opgelost.
            </p>

            <h2>Contact</h2>
            <p>
              Voor vragen over deze voorwaarden kunt u contact opnemen via{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> of{' '}
              <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>.
            </p>
          </Article>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
      <MobileCtaBar />
      <CookieBanner />
    </>
  )
}
