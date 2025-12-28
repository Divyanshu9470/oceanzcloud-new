import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../components/ui/Button';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth();

    if (!session?.user) {
        redirect('/api/auth/signin?callbackUrl=/admin');
    }

    // Optional: Check for admin role if you have roles set up
    // if (session.user.role !== 'admin') {
    //     return <div>Access Denied. You are not an admin.</div>
    // }

    return (
        <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px', maxWidth: '1400px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Admin Dashboard</h1>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span>Welcome, {session.user.name || session.user.email}</span>
                    <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Back to Site</Link>
                </div>
            </div>
            {children}
        </div>
    );
}
