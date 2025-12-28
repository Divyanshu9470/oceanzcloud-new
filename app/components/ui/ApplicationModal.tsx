"use client";

import { useState, useRef } from 'react';
import styles from './ApplicationModal.module.css';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export const ApplicationModal = ({ isOpen, onClose, jobTitle }: ApplicationModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const formData = new FormData(e.currentTarget);
        formData.append('jobTitle', jobTitle);

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: 'Application submitted successfully! Check your email for confirmation.' });
                formRef.current?.reset();
                setTimeout(() => {
                    onClose();
                    setMessage(null);
                }, 3000);
            } else {
                setMessage({ type: 'error', text: data.error || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to submit application.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                <h2 className={styles.title}>Apply for {jobTitle}</h2>
                <p className={styles.subtitle}>Please fill in the details below.</p>

                {message && (
                    <div className={`${styles.message} ${styles[message.type]}`}>
                        {message.text}
                    </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" required placeholder="john@example.com" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required placeholder="+1 234 567 890" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="resume">Resume (PDF/Doc) *</label>
                        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="coverLetter">Cover Letter</label>
                        <textarea id="coverLetter" name="coverLetter" rows={4} placeholder="Tell us why you're a great fit..."></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
};
