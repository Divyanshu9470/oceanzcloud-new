import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const dbPath = path.join(process.cwd(), 'data', 'db.json')
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))

    // 1. Create Admin User
    const hashedPassword = await bcrypt.hash('admin123', 10)
    const admin = await prisma.user.upsert({
        where: { email: 'admin@oceanzcloud.com' },
        update: {},
        create: {
            email: 'admin@oceanzcloud.com',
            name: 'Admin User',
            password: hashedPassword,
            role: 'admin',
        },
    })
    console.log({ admin })

    // 2. Create Jobs
    if (data.jobs && Array.isArray(data.jobs)) {
        for (const job of data.jobs) {
            await prisma.job.upsert({
                where: { slug: job.id }, // Assuming 'id' in json maps to 'slug' in our schema
                update: {},
                create: {
                    slug: job.id,
                    title: job.title,
                    type: job.type,
                    location: job.location,
                    description: job.description,
                    skills: Array.isArray(job.skills) ? job.skills.join(',') : job.skills,
                },
            })
        }
        console.log(`Seeded ${data.jobs.length} jobs`)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
