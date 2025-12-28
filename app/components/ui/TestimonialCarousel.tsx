'use client';

import React, { useState, useEffect } from 'react';
import styles from './TestimonialCarousel.module.css';

interface Testimonial {
    name: string;
    role: string;
    text: string;
}

interface TestimonialCarouselProps {
    items: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, items.length]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carousel}>
            <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide} aria-label="Previous testimonial">
                ←
            </button>
            <div className={styles.content}>
                <span className={styles.quote}>"</span>
                <p className={styles.text}>{items[currentIndex].text}</p>
                <div className={styles.author}>
                    <span className={styles.name}>{items[currentIndex].name}</span>
                    <span className={styles.role}>{items[currentIndex].role}</span>
                </div>
            </div>
            <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide} aria-label="Next testimonial">
                →
            </button>
            <div className={styles.controls}>
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
