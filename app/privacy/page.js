import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingButtons, MobileCtaBar } from '@/components/floating-buttons'
import { CookieBanner } from '@/components/cookie-banner'
import { SITE } from '@/lib/config/site'

const { brand, contact } = SITE

export const metadata = {
  title: `Privacybeleid | ${brand.fullName}`,
  description: `Hoe ${brand.fullName} omgaat met persoonsgegevens die via offerte-, contact- en reviewformulieren worden verzameld.`,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

function Article({ children }) {
  return (
    <article className="max-w-none space-y-4 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-1 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:text-muted-foreground [&_a]:text-brand-blue [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brand-blue-dark">
      {children}
    </article>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <a href="#main" className="skip-link">Direct naar inhoud</a>
      <Navbar />
      <main id="main" className="min-h-screen bg-background pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4">Privacy</div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">Privacybeleid</h1>
          <p className="text-muted-foreground mb-10">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <Article>
            <p>
              {brand.fullName} (KVK {contact.kvk}) hecht veel waarde aan de bescherming van uw persoonsgegevens.
              In dit privacybeleid leest u welke gegevens wij verzamelen wanneer u onze website gebruikt, waarom
              wij dat doen en welke rechten u heeft.
            </p>

            <h2>Welke gegevens verzamelen wij</h2>
            <p>Wij verzamelen alleen gegevens die u zelf actief aan ons verstrekt, via:</p>
            <ul>
              <li>het offerteformulier (naam, bedrijfsnaam, e-mailadres, telefoonnummer, locatie, gewenste dienst en uw bericht);</li>
              <li>het contactformulier (naam, e-mailadres, telefoonnummer en uw bericht);</li>
              <li>het reviewformulier (naam, functie of woonplaats, beoordeling en uw ervaring);</li>
              <li>uw keuze in de cookiemelding onderaan deze pagina.</li>
            </ul>

            <h2>Waarom wij deze gegevens gebruiken</h2>
            <p>Wij gebruiken uw gegevens uitsluitend om:</p>
            <ul>
              <li>contact met u op te nemen naar aanleiding van een offerte- of contactaanvraag;</li>
              <li>een door u geplaatste review te publiceren op onze website;</li>
              <li>te voldoen aan wettelijke verplichtingen, bijvoorbeeld onze administratie.</li>
            </ul>
            <p>Wij verkopen uw gegevens nooit aan derden.</p>

            <h2>Hoe lang bewaren wij uw gegevens</h2>
            <p>
              Aanvragen en berichten bewaren wij niet langer dan noodzakelijk is voor het doel waarvoor ze zijn
              verzameld, of zolang de wet dat van ons vereist.
            </p>

            <h2>Met wie delen wij gegevens</h2>
            <p>Om onze diensten te kunnen leveren, maken wij gebruik van de volgende verwerkers:</p>
            <ul>
              <li><strong>MongoDB</strong> — voor de opslag van formulierinzendingen;</li>
              <li><strong>SendGrid</strong> — voor het versturen van e-mailnotificaties naar ons team;</li>
              <li><strong>Google (Consent Mode, Ads &amp; Analytics)</strong> — alleen wanneer u hier via de
                cookiemelding toestemming voor geeft. Zonder uw toestemming blijft deze tracking uitgeschakeld.</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Onze website toont een cookiemelding waarmee u kunt kiezen of u analytische en advertentiecookies
              accepteert. Functionele cookies die nodig zijn om de website te laten werken, worden altijd geplaatst.
              U kunt uw keuze op elk moment wijzigen door de cookiegegevens van uw browser voor deze website te
              wissen, waarna de melding opnieuw verschijnt.
            </p>

            <h2>Uw rechten</h2>
            <p>
              U heeft het recht om inzage te vragen in de gegevens die wij van u hebben, deze te laten corrigeren
              of verwijderen, en om bezwaar te maken tegen de verwerking ervan. Neem hiervoor contact met ons op
              via <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Heeft u vragen over dit privacybeleid? Neem gerust contact op via{' '}
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
