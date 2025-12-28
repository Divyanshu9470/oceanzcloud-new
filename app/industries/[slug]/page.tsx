import { notFound } from 'next/navigation';
import { industries } from '../../utils/data';

import { Button } from '../../components/ui/Button';
import styles from './page.module.css';

interface IndustryPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.id,
    }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
    const { slug } = await params;
    const industry = industries.find((i) => i.id === slug);

    if (!industry) {
        notFound();
    }

    return (
        <>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>{industry.title} Solutions</h1>
                    <p className={styles.description}>{industry.description}</p>
                    <div className={styles.ctaWrapper}>
                        <Button variant="glow" size="lg" href="/contact">Discuss Your Project</Button>
                    </div>
                </section>

                <section className={styles.content}>
                    {/* Placeholder for detailed industry content */}
                    <div className={styles.placeholderBox}>
                        <h3>Specific Solutions for {industry.title}</h3>
                        <p>Detailed breakdown of how we help the {industry.title} sector would go here.</p>
                    </div>
                </section>
            </main>

        </>
    );
}
