import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const MONGO_URL = process.env.MONGO_URL
const DB_NAME = process.env.DB_NAME || 'bestefixo'

let cached = global._mongo
if (!cached) cached = global._mongo = { client: null, promise: null }

async function getDb() {
  if (cached.client) return cached.client.db(DB_NAME)
  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGO_URL).then((c) => { cached.client = c; return c })
  }
  const client = await cached.promise
  return client.db(DB_NAME)
}

function json(data, status = 200) {
  return NextResponse.json(data, { status })
}

async function handler(request, { params }) {
  const path = params?.path?.join('/') || ''
  const method = request.method

  try {
    if (path === '' || path === 'health') {
      return json({ ok: true, service: 'Beste Fixo API', time: new Date().toISOString() })
    }

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
      await db.collection('quotes').insertOne(doc)
      return json({ ok: true, id: doc.id, message: 'Bedankt! We nemen binnen 24 uur contact met u op.' })
    }

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
      await db.collection('contacts').insertOne(doc)
      return json({ ok: true, id: doc.id, message: 'Bedankt voor uw bericht! We reageren spoedig.' })
    }

    if (path === 'submissions' && method === 'GET') {
      const db = await getDb()
      const quotes = await db.collection('quotes').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
      const contacts = await db.collection('contacts').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
      return json({ quotes, contacts })
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
