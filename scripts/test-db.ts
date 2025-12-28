
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Testing Database Connection...');
        const count = await prisma.jobApplication.count();
        console.log('Current application count:', count);

        console.log('Attempting to create a dummy application...');
        const app = await prisma.jobApplication.create({
            data: {
                name: 'Test User',
                email: 'test@example.com',
                phone: '1234567890',
                jobTitle: 'Test Job',
                resumePath: '/uploads/test.pdf',
                coverLetter: 'This is a test.',
            },
        });
        console.log('Successfully created application:', app.id);

        // Clean up
        await prisma.jobApplication.delete({ where: { id: app.id } });
        console.log('Successfully cleaned up test application.');

    } catch (error) {
        console.error('Database Test Failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
