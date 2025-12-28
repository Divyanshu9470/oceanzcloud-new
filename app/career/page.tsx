import { JobCard } from '../components/ui/JobCard';
import styles from './page.module.css';

// This is a Server Component
async function getJobs() {
    const { db } = await import('../lib/db');
    return await db.getJobs();
}

export default async function CareerPage() {
    const jobs = await getJobs();

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Join Our <span className={styles.highlight}>Team</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Innovate. Grow. Excel. Be part of a team that is shaping the future of digital technology.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.grid}>
                    {jobs.map((job) => (
                        <JobCard
                            key={job.id}
                            title={job.title}
                            type={job.type}
                            location={job.location}
                            description={job.description}
                            skills={job.skills}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
