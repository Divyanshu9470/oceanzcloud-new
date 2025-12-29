import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/api/auth/signin',
    },
    providers: [
        // Providers will be overridden in auth.ts for the main app
        // Included here for Edge compatibility if needed (e.g. non-database providers)
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');

            if (isOnAdmin) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            }
            return true;
        },
    },
} satisfies NextAuthConfig;
