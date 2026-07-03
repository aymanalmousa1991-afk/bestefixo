const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}

/**
 * Track een Google Ads conversie (als gtag beschikbaar is)
 * Gebruikt de specifieke conversie-ID van de Google Ads account.
 */
function trackConversion(sendTo, transactionId) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      send_to: sendTo,
      ...(transactionId ? { transaction_id: transactionId } : {}),
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
  // Gebruik de specifieke 'send_to' string zoals in de Google snippet
  if (res.ok && options.method === 'POST') {
    if (path === '/api/quote' || path === '/api/contact') {
      trackConversion('AW-18270211960/bYIaCLiXyMYcEPie9YdE', data.id);
    }
  }

  return data;
}
