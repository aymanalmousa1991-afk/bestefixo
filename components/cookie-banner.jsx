'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { getStoredConsent, acceptConsent, rejectConsent } from '@/lib/consent'

export function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!getStoredConsent()) setShow(true)
  }, [])
  const accept = () => { acceptConsent(); setShow(false) }
  const reject = () => { rejectConsent(); setShow(false) }
  if (!show) return null
  return (
    <div className="fixed bottom-20 lg:bottom-3 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-md z-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        role="dialog" aria-label="Cookiemelding"
        className="bg-white rounded-2xl shadow-premium border border-border/60 p-4 sm:p-5"
      >
        <div className="font-display font-bold text-brand-blue mb-1">Cookies</div>
        <p className="text-sm text-muted-foreground mb-3 sm:mb-4">
          Wij gebruiken cookies voor analyse en advertenties. Lees meer in ons{' '}
          <a href="/privacy" className="underline hover:text-brand-blue">privacybeleid</a>.
        </p>
        <div className="flex gap-2">
          <Button onClick={accept} size="sm" className="bg-brand-blue hover:bg-brand-blue-dark text-white">Accepteren</Button>
          <Button onClick={reject} size="sm" variant="outline">Weigeren</Button>
        </div>
      </motion.div>
    </div>
  )
}

export default CookieBanner
