import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './IndustryCard.module.css';

interface IndustryCardProps {
    title: string;
    description: string;
    image: string;
    href?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, image, href }) => {
    const CardContent = () => (
        <div className={styles.card}>
            <Image
                src={image}
                alt={title}
                fill
                className={styles.backgroundImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.arrow}>→</div>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
                <CardContent />
            </Link>
        );
    }

    return <CardContent />;
};
