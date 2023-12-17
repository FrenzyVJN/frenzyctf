import { PrismaClient } from '@prisma/client'

// 1. Import libSQL and the Prisma libSQL driver adapter
import { createClient } from 'libsql'
// 2. Instantiate libSQL
const libsql = createClient({
  url: process.env.DATABASE_URL,
})

// 3. Instantiate the libSQL driver adapter
const adapter = new PrismaLibSQL(libsql)
// Pass the adapter option to the Prisma Client instance
export const prisma = new PrismaClient({ adapter })