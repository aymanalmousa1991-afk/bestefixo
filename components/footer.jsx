import { Phone, Mail, MapPin } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { SITE } from '@/lib/config/site'
import { SERVICES } from '@/lib/config/services'

const { brand, contact } = SITE

export function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white/90 pt-14 sm:pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo variant="badge" size={56} />
              <div>
                <div className="font-display text-xl font-bold">
                  <span className="text-white">Beste</span><span className="text-brand-green-light">Fixo</span>
                </div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-brand-green-light font-semibold">Schoonmaak</div>
              </div>
            </div>
            <p className="text-sm text-white/70">{brand.description}</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((s) => <li key={s.slug}><a href="/#diensten" className="hover:text-brand-green-light transition-colors">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#over" className="hover:text-brand-green-light transition-colors">Over Ons</a></li>
              <li><a href="/#werkproces" className="hover:text-brand-green-light transition-colors">Werkwijze</a></li>
              <li><a href="/#reviews" className="hover:text-brand-green-light transition-colors">Reviews</a></li>
              <li><a href="/#faq" className="hover:text-brand-green-light transition-colors">FAQ</a></li>
              <li><a href="/#offerte" className="hover:text-brand-green-light transition-colors">Offerte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" aria-hidden="true" /> <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> <a href={`mailto:${contact.email}`} className="break-all">{contact.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" /> <span>{contact.workArea}</span></li>
            </ul>
            <div className="flex gap-3 mt-4">
              {brand.social?.facebook && (
                <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green-light transition-colors" aria-label="BesteFixo op Facebook (opent in nieuw tabblad)">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {brand.social?.instagram && (
                <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green-light transition-colors" aria-label="BesteFixo op Instagram (opent in nieuw tabblad)">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/60">
          <div>&copy; {new Date().getFullYear()} BesteFixo Schoonmaak. KVK: {contact.kvk}. Alle rechten voorbehouden.</div>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/voorwaarden" className="hover:text-white">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
