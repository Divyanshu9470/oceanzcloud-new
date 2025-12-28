"use client"; // For interactive effects if needed

import React, { useRef } from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps & { image?: string }> = ({ children, className, image }) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={divRef}
            className={`${styles.card} ${className || ''}`}
            onMouseMove={handleMouseMove}
            style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
            {image && <div className={styles.overlay} />}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};
