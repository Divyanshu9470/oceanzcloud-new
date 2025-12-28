import { Card } from '../components/ui/Card';
import { IndustryCard } from '../components/ui/IndustryCard';
import { TestimonialCarousel } from '../components/ui/TestimonialCarousel';
import { services, industries, values, testimonials } from '../utils/data';
import styles from './page.module.css';

export default function CompanyPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section - Our Identity */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Get to <span className={styles.highlight}>Know Us</span></h1>
                    <div className={styles.heroText}>
                        <p>
                            We are a software development company focused on building practical, scalable, and reliable digital products. Our team works with businesses to design, develop, and maintain mobile apps, web platforms, cloud systems, and intelligent software that solve real operational and growth challenges.
                        </p>
                        <br />
                        <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Identity</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--primary)' }}>Who We Are:</strong> A team of engineers, designers, and problem-solvers delivering end-to-end software solutions — from product design and development to cloud, AI, DevOps, and automation.
                        </p>
                        <p>
                            <strong style={{ color: 'var(--primary)' }}>What We Do:</strong> We help businesses modernize their systems, improve efficiency, and scale confidently through well-engineered digital solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Services We Offer</h2>
                    <p className={styles.sectionSubtitle}>Comprehensive digital solutions for modern businesses.</p>
                </div>
                <div className={styles.grid}>
                    {services.slice(0, 3).map((service) => (
                        <Card key={service.id} image={service.image}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{service.shortDescription}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Our Values</h2>
                    <p className={styles.sectionSubtitle}>The core principles that drive our innovation and culture.</p>
                </div>
                <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                        <div key={index} className={styles.valueCard}>
                            <span className={styles.valueIcon}>{value.icon}</span>
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p className={styles.valueDesc}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Industries Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Industries We Empower</h2>
                    <p className={styles.sectionSubtitle}>Delivering specialized solutions across diverse sectors.</p>
                </div>
                <div className={styles.grid}>
                    {industries.slice(0, 4).map((industry) => (
                        <IndustryCard
                            key={industry.id}
                            title={industry.title}
                            description={industry.description}
                            image={industry.bgImage}
                            href={`/industries/${industry.id}`}
                        />
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Testimonials</h2>
                    <p className={styles.sectionSubtitle}>What our customers think about us.</p>
                </div>
                <TestimonialCarousel items={testimonials} />
            </section>
        </main>
    );
}
