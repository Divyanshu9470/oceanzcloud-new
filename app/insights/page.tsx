import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { insights } from '@/app/utils/data';

export const metadata = {
    title: 'Insights | OceanzCloud',
    description: 'Latest trends, news, and insights from the world of cloud computing, AI, and digital transformation.',
};

interface Insight {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
}

export default function InsightsPage() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Our <span className={styles.textGradient}>Insights</span>
                </h1>
                <p className={styles.subtitle}>
                    Stay ahead of the curve with our latest articles on technology, innovation, and business growth.
                </p>
            </div>

            <div className={styles.grid}>
                {insights.map((post: Insight) => (
                    <article key={post.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.category}>{post.category}</span>
                            <h2 className={styles.cardTitle}>{post.title}</h2>
                            <p className={styles.excerpt}>{post.excerpt}</p>

                            <div className={styles.meta}>
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>

                            <Link href={`/insights/${post.id}`} className={styles.readMore}>
                                Read Article →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
