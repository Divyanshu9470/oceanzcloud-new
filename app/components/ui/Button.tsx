import React from 'react';
import styles from './Button.module.css';


import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'glow' | 'glass' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    href,
    children,
    className,
    ...props
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {children}
                {variant === 'glow' && <div className={styles.glowEffect} />}
            </Link>
        );
    }

    return (
        <button
            className={buttonClass}
            {...props}
        >
            {children}
            {variant === 'glow' && <div className={styles.glowEffect} />}
        </button>
    );
};
