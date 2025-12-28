'use client';

import React, { useState, useEffect } from 'react';
import styles from './StickyNav.module.css';

const sections = [
    { id: 'process', label: 'Our Process' },
    { id: 'technologies', label: 'Tech Used' },
    { id: 'case-studies', label: 'Case Study' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'awards', label: 'Awards' },
    { id: 'faq', label: 'FAQs' },
];

export const StickyNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset

            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120, // Offset for sticky headers
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                {sections.map(section => (
                    <li key={section.id} className={styles.navItem}>
                        <button
                            className={`${styles.navLink} ${activeSection === section.id ? styles.active : ''}`}
                            onClick={() => scrollTo(section.id)}
                        >
                            {section.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
