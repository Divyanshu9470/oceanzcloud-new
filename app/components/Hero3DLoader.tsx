'use client';

import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('./3d/Hero3D'), {
    ssr: false,
    loading: () => null
});

export default function Hero3DLoader() {
    return <Hero3D />;
}
