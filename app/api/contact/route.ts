import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { db } from '../../lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        await db.addSubmission({
            id: '', // DB generates ID
            name,
            email,
            company,
            message,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json(
            { message: 'Message sent successfully.' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Failed to send message.' },
            { status: 500 }
        );
    }
}
