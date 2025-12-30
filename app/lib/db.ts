import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prismaV2: PrismaClient }

let prismaInstance: PrismaClient;

prismaInstance = globalForPrisma.prismaV2 || new PrismaClient();

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaV2 = prisma

// Re-export types (mapped from Prisma or defined manually if needed for compatibility)
export type Job = {
    id: string; // Prisma uses slug as ID for URLs, but we have internal ID too.
    // The existing UI might rely on 'id' being the slug/string ID.
    // In our schema: id is CUID, slug is the readable ID.
    // Let's see what the old code did. Old code: id="frontend-dev" (slug-like).
    // So we should map 'slug' to 'id' for compatibility or return the real object.
    slug?: string; // Add slug
    title: string;
    type: string;
    location: string;
    description: string;
    skills: string[];
}

export type Submission = {
    id: string;
    name: string;
    email: string;
    company?: string | null;
    message: string;
    timestamp?: string; // Prisma has createdAt
}

// Backward compatibility helpers
export const db = {
    async getJobs(): Promise<Job[]> {
        const jobs = await prisma.job.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return jobs.map(job => ({
            ...job,
            id: job.slug, // Map slug to id for frontend compatibility
            skills: job.skills ? job.skills.split(',') : [],
            company: null
        }));
    },

    async addSubmission(submission: Submission): Promise<void> {
        await prisma.contactSubmission.create({
            data: {
                name: submission.name,
                email: submission.email,
                company: submission.company || undefined,
                message: submission.message
            }
        });
    },

    async getSubmissions(): Promise<Submission[]> {
        const subs = await prisma.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return subs.map(s => ({
            ...s,
            id: s.id,
            timestamp: s.createdAt.toISOString()
        }));
    },

    async addJob(job: Job): Promise<void> {
        // Existing code generates ID. We should use that as slug.
        await prisma.job.create({
            data: {
                slug: job.id, // ID from frontend becomes slug
                title: job.title,
                type: job.type,
                location: job.location,
                description: job.description,
                skills: Array.isArray(job.skills) ? job.skills.join(',') : job.skills
            }
        });
    }
};
