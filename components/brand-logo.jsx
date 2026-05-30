'use client'

import Image from 'next/image'
import { SITE } from '@/lib/config/site'

/**
 * BrandLogo
 * The uploaded logo has a white background. To make it appear transparent on light
 * backgrounds (navbar, hero card, footer badge), we apply CSS `mix-blend-mode: multiply`
 * which makes pure white pixels blend with the underlying surface. On dark surfaces we
 * deliberately use a white rounded badge so the logo stays legible.
 *
 * Variants:
 *  - 'light' (default): for light/white backgrounds, applies multiply blend to hide white BG
 *  - 'badge': for dark backgrounds, renders the logo inside a white rounded badge
 */
export function BrandLogo({
  variant = 'light',
  size = 48,
  showWordmark = false,
  className = '',
  priority = false,
}) {
  const dim = typeof size === 'number' ? `${size}px` : size
  const isBadge = variant === 'badge'
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className={isBadge
          ? 'relative bg-white rounded-xl p-1 shadow-sm flex items-center justify-center overflow-hidden'
          : 'relative overflow-hidden flex items-center justify-center'}
        style={{ width: dim, height: dim }}
      >
        <Image
          src={SITE.brand.logoUrl}
          alt={`${SITE.brand.fullName} logo`}
          fill
          sizes="96px"
          priority={priority}
          className="object-contain"
          style={isBadge ? undefined : { mixBlendMode: 'multiply' }}
        />
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <span className="font-display text-xl font-bold tracking-tight text-brand-blue">
            <span>Beste</span><span className="text-brand-green">Fixo</span>
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-semibold">
            {SITE.brand.tagline}
          </span>
        </div>
      )}
    </div>
  )
}

export default BrandLogo
