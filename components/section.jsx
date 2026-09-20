'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' } }),
}

export function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3 sm:mb-4">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">{title}</h2>
          {subtitle && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export default Section
