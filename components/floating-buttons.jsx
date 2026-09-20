'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, ArrowUp, Phone, Send } from 'lucide-react'
import { SITE } from '@/lib/config/site'

const { contact } = SITE
const WHATSAPP_TEXT = encodeURIComponent('Hallo BesteFixo, ik heb een vraag over jullie schoonmaakdiensten.')

/**
 * Desktop-only floating WhatsApp bubble + back-to-top button. On small
 * screens these are replaced by <MobileCtaBar> so mobile visitors get a
 * persistent call/WhatsApp/offerte bar instead of a single hover-discovered
 * bubble in the corner.
 */
export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="hidden lg:block">
      <a
        href={`https://wa.me/${contact.whatsappNumber}?text=${WHATSAPP_TEXT}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Stuur een WhatsApp bericht naar BesteFixo (opent in nieuw tabblad)"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center shadow-premium animate-float motion-reduce:animate-none"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Terug naar boven"
            className="fixed bottom-[88px] right-6 z-40 h-12 w-12 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center justify-center shadow-premium"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Persistent mobile conversion bar. Service businesses live or die by how
 * easy it is to call/message from a phone — a corner bubble that only
 * appears after scrolling is easy to miss on small screens, so mobile gets
 * three always-visible actions instead. Hidden at lg+ where the desktop
 * bubble + navbar CTA already cover this.
 */
export function MobileCtaBar({ onQuoteClick }) {
  return (
    <nav
      aria-label="Snelle acties"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_-8px_rgba(30,93,170,0.2)] grid grid-cols-3"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={`tel:${contact.phoneRaw}`}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-brand-blue active:bg-muted/60"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-medium">Bel</span>
      </a>
      <a
        href={`https://wa.me/${contact.whatsappNumber}?text=${WHATSAPP_TEXT}`}
        target="_blank" rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 border-x border-border text-[#1ebe5a] active:bg-muted/60"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
      {onQuoteClick ? (
        <button
          type="button"
          onClick={onQuoteClick}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 bg-brand-green text-white active:bg-brand-green/90"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          <span className="text-[11px] font-medium">Offerte</span>
        </button>
      ) : (
        <a
          href="/#offerte"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 bg-brand-green text-white active:bg-brand-green/90"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          <span className="text-[11px] font-medium">Offerte</span>
        </a>
      )}
    </nav>
  )
}

export default FloatingButtons
