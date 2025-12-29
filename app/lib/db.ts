const prismaClientSingleton = () => {
    // Determine if we're in a build context (this heuristic might need adjustment but usually sufficient)
    // Or simply check for the Env Var.
    // Note: Vercel build might have the var if configured, but if it fails, let's be safe.
    if (!process.env.DATABASE_URL) {
        console.warn("⚠️ DATABASE_URL is missing. Returning a placeholder Prisma Client to prevent build crash.");
        return new Proxy({} as PrismaClient, {
            get(_target, prop) {
                if (prop === 'then') return undefined;
                if (prop === '$connect') return async () => { }; // Fake connect

                throw new Error(`Prisma Client cannot be used because DATABASE_URL is missing. This is expected during build if not querying data.`);
            }
        });
    }
    return new PrismaClient();
};

const globalForPrisma = globalThis as unknown as { prismaV2: PrismaClient }

// Init
export const prisma = globalForPrisma.prismaV2 || prismaClientSingleton();

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
