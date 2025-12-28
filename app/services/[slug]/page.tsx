import { notFound } from 'next/navigation';
import { services, industries, portfolio } from '../../utils/data';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { StickyNav } from '../../components/ui/StickyNav';
import { Accordion } from '../../components/ui/Accordion';
import styles from './page.module.css';
import Image from 'next/image';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    // @ts-ignore - Temporary ignore until interface is fully updated globally
    const { process, techStack, awards, testimonials, faqs } = service;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.iconWrapper}>{service.icon}</div>
                        <h1 className={styles.title}>{service.title}</h1>
                        <p className={styles.description}>{service.fullDescription}</p>
                        <Button variant="glow" size="lg">Schedule a Consultation</Button>
                    </div>
                </div>

                {process && <StickyNav />}

                <div className={styles.contentContainer}>
                    {/* Process Section */}
                    {process && (
                        <section id="process" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Our Process</h2>
                            <div className={styles.processGrid}>
                                {process.map((step: any, index: number) => (
                                    <div key={index} className={styles.processCard}>
                                        <span className={styles.stepNumber}>0{index + 1}</span>
                                        <h3 className={styles.processTitle}>{step.title}</h3>
                                        <p className={styles.processDesc}>{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Tech Stack Section */}
                    {techStack && (
                        <section id="technologies" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Technologies Used</h2>
                            <div className={styles.techGrid}>
                                {techStack.map((category: any, index: number) => (
                                    <div key={index} className={styles.techCategory}>
                                        <h3 className={styles.techCategoryTitle}>{category.category}</h3>
                                        <div className={styles.techTags}>
                                            {category.techs.map((tech: string, i: number) => (
                                                <span key={i} className={styles.techTag}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Case Studies (Linked from Portfolio) */}
                    <section id="case-studies" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Related Case Studies</h2>
                        <div className={styles.grid}>
                            {portfolio.slice(0, 3).map((item) => (
                                <div key={item.id} className={styles.card}>
                                    <span className={styles.category}>{item.category}</span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Testimonials */}
                    {testimonials && (
                        <section id="testimonials" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Client Testimonials</h2>
                            <div className={styles.testimonialGrid}>
                                {testimonials.map((t: any, index: number) => (
                                    <div key={index} className={styles.testimonialCard}>
                                        <p className={styles.quote}>"{t.text}"</p>
                                        <div className={styles.author}>
                                            <strong>{t.name}</strong>
                                            <span>{t.role}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Awards */}
                    {awards && (
                        <section id="awards" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Awards & Recognition</h2>
                            <div className={styles.awardsGrid}>
                                {awards.map((award: any, index: number) => (
                                    <div key={index} className={styles.awardCard}>
                                        <span className={styles.awardIcon}>🏆</span>
                                        <div>
                                            <h3 className={styles.awardTitle}>{award.title}</h3>
                                            <p className={styles.awardDesc}>{award.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* FAQs */}
                    {faqs && (
                        <section id="faq" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                            <div className={styles.faqContainer}>
                                <Accordion items={faqs} />
                            </div>
                        </section>
                    )}

                    {/* CTA Section */}
                    <section className={styles.ctaSection}>
                        <h2 className={styles.sectionTitle}>Ready to Transform Your Business?</h2>
                        <Button variant="primary" size="lg">Get in Touch</Button>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
