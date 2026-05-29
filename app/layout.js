import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_36e8bb32-da94-4726-ae14-13ecc225d83d/artifacts/78dca20n_WhatsApp%20Image%202026-05-29%20at%2022.18.16.jpeg'

export const metadata = {
  title: 'Beste Fixo Schoonmaak — Professionele Schoonmaakdiensten voor Bedrijven en Particulieren',
  description: 'Beste Fixo levert hoogwaardige schoonmaakdiensten in heel Nederland. Kantoorschoonmaak, huisschoonmaak, glasbewassing, dieptereiniging en meer. Vraag direct een vrijblijvende offerte aan.',
  keywords: ['schoonmaakbedrijf', 'schoonmaak', 'kantoorschoonmaak', 'huisschoonmaak', 'glasbewassing', 'dieptereiniging', 'opleveringsschoonmaak', 'Beste Fixo', 'Nederland'],
  metadataBase: new URL('https://bestefixo.nl'),
  openGraph: {
    title: 'Beste Fixo Schoonmaak — Professionele Schoonmaakdiensten',
    description: 'Brandschone resultaten, gegarandeerd. Vraag uw vrijblijvende offerte aan.',
    url: 'https://bestefixo.nl',
    siteName: 'Beste Fixo Schoonmaak',
    images: [{ url: LOGO_URL, width: 1200, height: 1200, alt: 'Beste Fixo Schoonmaak logo' }],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beste Fixo Schoonmaak',
    description: 'Professionele Schoonmaakdiensten voor Bedrijven en Particulieren',
    images: [LOGO_URL],
  },
  icons: { icon: LOGO_URL, shortcut: LOGO_URL, apple: LOGO_URL },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#1E5DAA',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bestefixo.nl',
  name: 'Beste Fixo Schoonmaak',
  image: LOGO_URL,
  logo: LOGO_URL,
  description: 'Professioneel schoonmaakbedrijf voor bedrijven en particulieren. Kantoor-, huis-, dieptereiniging, glasbewassing en meer.',
  url: 'https://bestefixo.nl',
  telephone: '+31 6 12 34 56 78',
  email: 'info@bestefixo.nl',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hoofdstraat 1',
    addressLocality: 'Amsterdam',
    postalCode: '1000 AA',
    addressCountry: 'NL',
  },
  areaServed: ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Nederland'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href={LOGO_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
