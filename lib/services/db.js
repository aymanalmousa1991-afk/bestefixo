// MongoDB connection helper. Compatible with both local MongoDB and MongoDB Atlas.
// To switch to Atlas: update MONGO_URL in /app/.env with the Atlas connection string.

import { MongoClient } from 'mongodb'

const MONGO_URL = process.env.MONGO_URL
const DB_NAME = process.env.DB_NAME || 'bestefixo'

if (!MONGO_URL) {
  console.warn('[db] MONGO_URL is not set')
}

let cached = global._bestefixoMongo
if (!cached) cached = global._bestefixoMongo = { client: null, promise: null }

export async function getDb() {
  if (cached.client) return cached.client.db(DB_NAME)
  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGO_URL).then((c) => {
      cached.client = c
      return c
    })
  }
  const client = await cached.promise
  return client.db(DB_NAME)
}

export const collections = {
  quotes: 'quotes',
  contacts: 'contacts',
  reviews: 'reviews',
}
