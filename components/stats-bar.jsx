'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Award, Sparkles, Star, ShieldCheck } from 'lucide-react'
import { SITE } from '@/lib/config/site'
import { SERVICES } from '@/lib/config/services'

function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [value, setValue] = useState(reduceMotion ? to : 0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const duration = 1400
    const start = performance.now()
    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(to * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduceMotion, to])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}{suffix}
    </span>
  )
}

export function StatsBar() {
  const stats = [
    { icon: Award, value: 6, suffix: '+', label: 'Jaar vakmanschap' },
    { icon: Sparkles, value: SERVICES.length, suffix: '+', label: 'Schoonmaakdiensten' },
    { icon: Star, value: parseFloat(SITE.rating.value), decimals: 1, suffix: `/5`, label: `Uit ${SITE.rating.count} beoordelingen` },
    { icon: ShieldCheck, value: 100, suffix: '%', label: 'Tevredenheidsgarantie' },
  ]
  return (
    <section aria-label="BesteFixo in cijfers" className="relative border-y border-white/10 bg-brand-blue-dark py-8 sm:py-10">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="hidden sm:flex h-11 w-11 rounded-xl bg-white/10 items-center justify-center shrink-0">
                <s.icon className="h-5 w-5 text-brand-green-light" aria-hidden="true" />
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white leading-none">
                  <CountUp to={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
                </div>
                <div className="text-[11px] sm:text-xs text-white/70 mt-1">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
