import Link from 'next/link';
import { portfolio } from '../utils/data';

import { Card } from '../components/ui/Card';
import styles from './page.module.css';

export default function PortfolioPage() {
    return (
        <>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Our Work</h1>
                    <p className={styles.subtitle}>
                        Showcasing success stories and digital transformations.
                    </p>
                </section>

                <section className={styles.gridSection}>
                    <div className={styles.grid}>
                        {portfolio.map((item) => (
                            <Link href={`/portfolio/${item.id}`} key={item.id} className={styles.cardLink}>
                                <Card className={styles.card}>
                                    <span className={styles.category}>{item.category}</span>
                                    <h2 className={styles.cardTitle}>{item.title}</h2>
                                    <p className={styles.cardDesc}>{item.description}</p>
                                    <div className={styles.stats}>
                                        {Object.entries(item.stats).map(([key, value]) => (
                                            <div key={key} className={styles.stat}>
                                                <span className={styles.statValue}>{value}</span>
                                                <span className={styles.statLabel}>{key}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className={styles.viewCase}>View Case Study &rarr;</span>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

        </>
    );
}
