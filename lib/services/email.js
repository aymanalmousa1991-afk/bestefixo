// Email service abstraction. Currently a no-op stub; later wire up SendGrid.
//
// To enable SendGrid:
//   1. yarn add @sendgrid/mail
//   2. Set SENDGRID_API_KEY and MAIL_FROM in /app/.env
//   3. Uncomment implementation below.
//
// Usage:
//   import { sendMail } from '@/lib/services/email'
//   await sendMail({ to, subject, html, text })

export async function sendMail(/* { to, subject, html, text, replyTo } */ payload) {
  if (!process.env.SENDGRID_API_KEY) {
    // No key configured — log and skip. Replace with real implementation once key is set.
    console.log('[email] SendGrid not configured. Payload:', { to: payload?.to, subject: payload?.subject })
    return { skipped: true }
  }
  /*
  const sgMail = (await import('@sendgrid/mail')).default
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: payload.to,
    from: process.env.MAIL_FROM || 'no-reply@bestefixo.nl',
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
    replyTo: payload.replyTo,
  }
  await sgMail.send(msg)
  return { sent: true }
  */
  return { skipped: true }
}
