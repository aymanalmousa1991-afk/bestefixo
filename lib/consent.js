// Bridges the cookie banner to the Google Consent Mode defaults set in
// app/layout.js. Without this, `gtag('consent', 'default', { ...denied })`
// is set once on load and never updated — accepting cookies previously did
// nothing except hide the banner, so ad/analytics consent stayed denied
// for the entire session regardless of the visitor's choice.

const STORAGE_KEY = 'bf-cookie-consent'

function pushConsent(update) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  gtag('consent', 'update', update)
}

export function getStoredConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function acceptConsent() {
  pushConsent({
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  })
  try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch {}
}

export function rejectConsent() {
  pushConsent({
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  })
  try { localStorage.setItem(STORAGE_KEY, 'rejected') } catch {}
}
