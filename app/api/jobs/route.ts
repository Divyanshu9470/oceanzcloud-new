import { NextResponse } from 'next/server';
import { db, Job } from '../../lib/db';

export async function GET() {
    try {
        const jobs = await db.getJobs();
        return NextResponse.json({ jobs }, { status: 200 });
    } catch (error) {
        console.error('Jobs API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch jobs.' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, type, location, description, skills } = body;

        // Basic validation
        if (!title || !type || !location || !description || !skills) {
            return NextResponse.json(
                { error: 'Missing required fields: title, type, location, description, skills.' },
                { status: 400 }
            );
        }

        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);

        // Ensure skills is an array
        const skillsArray = Array.isArray(skills)
            ? skills
            : typeof skills === 'string'
                ? skills.split(',').map((s: string) => s.trim()).filter((s: string) => s.length > 0)
                : [];

        const newJob: Job = {
            id,
            title,
            type,
            location,
            description,
            skills: skillsArray
        };

        await db.addJob(newJob);

        return NextResponse.json(
            { message: 'Job posted successfully.', job: newJob },
            { status: 201 }
        );

    } catch (error) {
        console.error('Job Posting API Error:', error);
        return NextResponse.json(
            { error: 'Failed to create job.' },
            { status: 500 }
        );
    }
}
