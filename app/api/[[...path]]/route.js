import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { getDb, collections } from '@/lib/services/db'
import { sendMail } from '@/lib/services/email'

function json(data, status = 200) {
  return NextResponse.json(data, { status })
}

async function handler(request, { params }) {
  const path = params?.path?.join('/') || ''
  const method = request.method

  try {
    // Health
    if (path === '' || path === 'health') {
      return json({ ok: true, service: 'BesteFixo API', time: new Date().toISOString() })
    }

    // ---------- QUOTES ----------
    if (path === 'quote' && method === 'POST') {
      const body = await request.json()
      const { name, company, email, phone, serviceType, location, message } = body || {}
      if (!name || !email || !phone || !serviceType) {
        return json({ error: 'Verplichte velden ontbreken: naam, e-mail, telefoon en type schoonmaak.' }, 400)
      }
      const db = await getDb()
      const doc = {
        id: uuidv4(),
        type: 'quote',
        name: String(name).trim(),
        company: company ? String(company).trim() : '',
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        serviceType: String(serviceType).trim(),
        location: location ? String(location).trim() : '',
        message: message ? String(message).trim() : '',
        createdAt: new Date().toISOString(),
      }
      await db.collection(collections.quotes).insertOne(doc)
      // Future: notification email
      sendMail({
        to: process.env.MAIL_TO || 'info@bestefixo.nl',
        subject: `Nieuwe offerte aanvraag van ${doc.name}`,
        html: `<h2>Nieuwe offerte aanvraag</h2><pre>${JSON.stringify(doc, null, 2)}</pre>`,
        text: `Nieuwe offerte aanvraag\n${JSON.stringify(doc, null, 2)}`,
        replyTo: doc.email,
      }).catch(() => {})
      return json({ ok: true, id: doc.id, message: 'Bedankt! We nemen binnen 24 uur contact met u op.' })
    }

    // ---------- CONTACT ----------
    if (path === 'contact' && method === 'POST') {
      const body = await request.json()
      const { name, email, phone, message } = body || {}
      if (!name || !email || !message) {
        return json({ error: 'Verplichte velden ontbreken: naam, e-mail en bericht.' }, 400)
      }
      const db = await getDb()
      const doc = {
        id: uuidv4(),
        type: 'contact',
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: phone ? String(phone).trim() : '',
        message: String(message).trim(),
        createdAt: new Date().toISOString(),
      }
      await db.collection(collections.contacts).insertOne(doc)
      sendMail({
        to: process.env.MAIL_TO || 'info@bestefixo.nl',
        subject: `Nieuw contactbericht van ${doc.name}`,
        html: `<h2>Nieuw contactbericht</h2><pre>${JSON.stringify(doc, null, 2)}</pre>`,
        text: `Nieuw contactbericht\n${JSON.stringify(doc, null, 2)}`,
        replyTo: doc.email,
      }).catch(() => {})
      return json({ ok: true, id: doc.id, message: 'Bedankt voor uw bericht! We reageren spoedig.' })
    }

    // ---------- REVIEWS ----------
    if (path === 'reviews' && method === 'GET') {
      const db = await getDb()
      const url = new URL(request.url)
      const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 100)
      const reviews = await db
        .collection(collections.reviews)
        .find({ approved: { $ne: false } }, { projection: { _id: 0 } })
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray()
      return json({ reviews })
    }

    if (path === 'reviews' && method === 'POST') {
      const body = await request.json()
      const { name, role, rating, text } = body || {}
      const ratingNum = Number(rating)
      if (!name || !text || !ratingNum || ratingNum < 1 || ratingNum > 5) {
        return json({ error: 'Vul uw naam, beoordeling (1-5) en bericht in.' }, 400)
      }
      if (String(text).trim().length < 10) {
        return json({ error: 'Uw review is te kort (minimaal 10 tekens).' }, 400)
      }
      const db = await getDb()
      const doc = {
        id: uuidv4(),
        name: String(name).trim().slice(0, 80),
        role: role ? String(role).trim().slice(0, 120) : 'Klant',
        rating: ratingNum,
        text: String(text).trim().slice(0, 1000),
        approved: true, // auto-approve for MVP; flip to false to require moderation
        createdAt: new Date().toISOString(),
      }
      await db.collection(collections.reviews).insertOne(doc)
      return json({ ok: true, review: doc, message: 'Bedankt voor uw review!' })
    }

    // ---------- ADMIN PEEK ----------
    if (path === 'submissions' && method === 'GET') {
      const db = await getDb()
      const quotes = await db.collection(collections.quotes).find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
      const contacts = await db.collection(collections.contacts).find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
      const reviews = await db.collection(collections.reviews).find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
      return json({ quotes, contacts, reviews })
    }

    return json({ error: 'Not found', path }, 404)
  } catch (err) {
    console.error('API error:', err)
    return json({ error: 'Server error', detail: String(err?.message || err) }, 500)
  }
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const DELETE = handler
export const PATCH = handler
