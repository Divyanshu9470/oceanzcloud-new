import Link from 'next/link';
import { services } from '../utils/data';

import { Card } from '../components/ui/Card';
import styles from './page.module.css';

export default function ServicesPage() {
    return (
        <>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Our Services</h1>
                    <p className={styles.subtitle}>
                        Comprehensive digital solutions designed to accelerate your business growth.
                    </p>
                </section>

                <section className={styles.gridSection}>
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <Link href={`/services/${service.id}`} key={service.id} className={styles.cardLink}>
                                <Card className={styles.card}>
                                    <div className={styles.icon}>{service.icon}</div>
                                    <h2 className={styles.cardTitle}>{service.title}</h2>
                                    <p className={styles.cardDesc}>{service.shortDescription}</p>
                                    <span className={styles.learnMore}>Learn More &rarr;</span>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

        </>
    );
}
