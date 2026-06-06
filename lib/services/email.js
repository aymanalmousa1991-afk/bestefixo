// Email service abstraction using SendGrid.
//
// To configure:
//   1. Set SENDGRID_API_KEY in your .env file
//   2. Set MAIL_FROM to a verified sender in your SendGrid account
//
// Usage:
//   import { sendMail } from '@/lib/services/email'
//   await sendMail({ to, subject, html, text })

export async function sendMail({ to, subject, html, text, replyTo } = {}) {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('[email] SendGrid not configured. Payload:', { to, subject })
    return { skipped: true }
  }

  try {
  const sgMail = (await import('@sendgrid/mail')).default
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
      to,
      from: {
        email: process.env.MAIL_FROM || 'bestefixo@gmail.com',
        name: 'BesteFixo Schoonmaak',
      },
      subject,
      text,
      html,
      replyTo: replyTo || process.env.MAIL_FROM || 'bestefixo@gmail.com',
  }
  await sgMail.send(msg)
    console.log('[email] Sent successfully:', { to, subject })
  return { sent: true }
  } catch (err) {
    console.error('[email] SendGrid error:', err?.response?.body || err?.message || err)
    return { skipped: true, error: String(err?.message || err) }
}
}

