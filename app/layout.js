import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { SITE } from '@/lib/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata = {
  title: SITE.seo.title,
  description: SITE.seo.description,
  keywords: SITE.seo.keywords,
  metadataBase: new URL(`https://${SITE.brand.domain}`),
  openGraph: {
    title: SITE.seo.title,
    description: 'Brandschone resultaten, gegarandeerd. Vraag uw vrijblijvende offerte aan.',
    url: `https://${SITE.brand.domain}`,
    siteName: SITE.brand.fullName,
    images: [{ url: SITE.brand.logoUrl, width: 1200, height: 1200, alt: `${SITE.brand.fullName} logo` }],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.brand.fullName,
    description: 'Professionele Schoonmaakdiensten voor Bedrijven en Particulieren',
    images: [SITE.brand.logoUrl],
  },
  icons: { icon: SITE.brand.logoUrl, shortcut: SITE.brand.logoUrl, apple: SITE.brand.logoUrl },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#1E5DAA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `https://${SITE.brand.domain}`,
  name: SITE.brand.fullName,
  image: SITE.brand.logoUrl,
  logo: SITE.brand.logoUrl,
  description: SITE.seo.description,
  url: `https://${SITE.brand.domain}`,
  telephone: SITE.contact.phone,
  email: SITE.contact.email,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.contact.address.street,
    addressLocality: SITE.contact.address.city,
    postalCode: SITE.contact.address.postalCode,
    addressCountry: SITE.contact.address.country,
  },
  areaServed: ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Nederland'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE.rating.value, reviewCount: SITE.rating.count },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href={SITE.brand.logoUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
