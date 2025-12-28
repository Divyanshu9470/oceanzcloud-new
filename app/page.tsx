import Link from 'next/link';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { IndustryCard } from './components/ui/IndustryCard';
import { Accordion } from './components/ui/Accordion';
import { services, industries, portfolio, faqs } from './utils/data';
import styles from './page.module.css';
import Hero3DLoader from './components/Hero3DLoader';

// const Hero3D = dynamic(() => import('./components/Hero3D'), { ssr: false });

export default function Home() {
    return (
        <>

            <main className={styles.main}>
                <Hero3DLoader />
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            We Build Software That Helps <br />
                            <span className={styles.heroHighlight}>Businesses Grow</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            From mobile and web development to AI, cloud, DevOps, and automation — we design and deliver reliable digital solutions tailored to real business needs.
                        </p>
                        <div className={styles.heroButtons}>
                            <Button variant="glow" size="lg" href="/contact">Get Started</Button>
                            <Button variant="secondary" size="lg" href="/demo">View Demo</Button>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Services We Offer</h2>
                        <p className={styles.sectionSubtitle}>Comprehensive digital solutions for modern businesses.</p>
                    </div>
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <Card key={service.id} image={service.image}>
                                <div className={styles.cardIcon}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>
                                    {service.shortDescription}
                                </p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Industries Section */}
                <section id="industries" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Industries We Transform</h2>
                    <div className={styles.grid}>
                        {industries.map((industry) => (
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

                {/* Portfolio Section */}
                <section id="portfolio" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Portfolio</h2>
                    <div className={styles.grid}>
                        {portfolio.map((item) => (
                            <Link href={`/portfolio/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                                <Card>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardText}>{item.category}</p>
                                    {/* Display stats if available, just taking the first one for brevity/card layout */}
                                    {item.stats && Object.entries(item.stats).length > 0 && (
                                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                            <strong style={{ color: 'var(--primary-color)' }}>
                                                {Object.entries(item.stats)[0][0]}: {Object.entries(item.stats)[0][1]}
                                            </strong>
                                        </div>
                                    )}
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <Button variant="outline" size="lg" href="/portfolio">View All Case Studies</Button>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <Accordion items={faqs} />
                </section>

            </main>

        </>
    );
}
