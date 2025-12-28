import Link from 'next/link';
import { industries } from '../utils/data';

import { IndustryCard } from '../components/ui/IndustryCard';
import styles from './page.module.css';

export default function IndustriesPage() {
    return (
        <>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Industries We Transform</h1>
                    <p className={styles.subtitle}>
                        Specialized solutions tailored to the unique challenges of your sector.
                    </p>
                </section>

                <section className={styles.gridSection}>
                    <div className={styles.grid}>
                        {industries.map((industry) => (
                            <Link href={`/industries/${industry.id}`} key={industry.id} className={styles.cardLink}>
                                <IndustryCard
                                    title={industry.title}
                                    description={industry.description}
                                    image={industry.bgImage}
                                />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

        </>
    );
}
