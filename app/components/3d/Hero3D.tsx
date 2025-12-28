'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';
import { getCurrentFestivalTheme } from '../../utils/festivalThemes';

function ParticleField({ theme, ...props }: any) {
    const ref = useRef<any>(null);
    const sphere = useMemo(() => random.inSphere(new Float32Array(2400), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Apply theme speed multiplier
            ref.current.rotation.x -= (delta / 10) * theme.speed;
            ref.current.rotation.y -= (delta / 15) * theme.speed;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={theme.colors[0]}
                    size={theme.particleSize}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Hero3D() {
    // Determine theme once on mount (client-side)
    const theme = useMemo(() => getCurrentFestivalTheme(), []);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, opacity: 1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                <ParticleField theme={theme} />
            </Canvas>
        </div>
    );
}
