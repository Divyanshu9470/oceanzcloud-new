import { notFound } from 'next/navigation';
import { portfolio } from '../../utils/data';

import styles from './page.module.css';

interface CaseStudyPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return portfolio.map((item) => ({
        id: item.id,
    }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { id } = await params;
    const item = portfolio.find((p) => p.id === id);

    if (!item) {
        notFound();
    }

    return (
        <>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <span className={styles.category}>{item.category}</span>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.description}>{item.description}</p>
                </section>

                <div className={styles.statsContainer}>
                    <div className={styles.statsGrid}>
                        {Object.entries(item.stats).map(([key, value]) => (
                            <div key={key} className={styles.statBox}>
                                <div className={styles.statValue}>{value}</div>
                                <div className={styles.statLabel}>{key}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <section className={styles.content}>
                    <div className={styles.placeholderBox}>
                        <h3>Case Study Details</h3>
                        <p>In-depth analysis of the problem, solution, and results for {item.title}.</p>
                    </div>
                </section>
            </main>

        </>
    );
}
