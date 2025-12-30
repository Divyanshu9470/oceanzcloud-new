import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { prisma } from '../../../lib/db';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, company } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const demoRequest = await prisma.demoRequest.create({
            data: {
                email,
                company
            }
        });

        return NextResponse.json({ success: true, data: demoRequest }, { status: 200 });

    } catch (error) {
        console.error('Demo request error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
