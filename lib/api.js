const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}

/**
 * Track een Google Ads conversie (als gtag beschikbaar is)
 */
function trackConversion(action, label, value) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      send_to: 'AW-18270211960/' + action,
      value: value || 0,
      currency: 'EUR',
      ...(label ? { transaction_id: label } : {}),
    });
  }
}

export async function apiFetch(path, options = {}) {
  const url = apiUrl(path);
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Er ging iets mis');

  // Track Google Ads conversies bij succesvolle form submissions
  if (res.ok && options.method === 'POST') {
    if (path === '/api/quote') {
      trackConversion('offerte_aanvraag', data.id, 0);
    } else if (path === '/api/contact') {
      trackConversion('contact_bericht', data.id, 0);
    }
  }

  return data;
}
