"use client";

import { useState } from 'react';

import { Button } from '../components/ui/Button'; // Ensure this matches ButtonProps
import styles from './page.module.css';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(result.message);
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
                setMessage(result.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to send message.');
        }
    };

    return (
        <>

            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>
                            Ready to start your next project? Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <h3>Email</h3>
                                <p>hello@oceanzcloud.com</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Location</h3>
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="company">Company (Optional)</label>
                            <input type="text" id="company" name="company" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required className={styles.textarea}></textarea>
                        </div>

                        <Button type="submit" variant="primary" disabled={status === 'loading'} className={styles.submitBtn}>
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </Button>

                        {status === 'success' && <p className={styles.successMsg}>{message}</p>}
                        {status === 'error' && <p className={styles.errorMsg}>{message}</p>}
                    </form>
                </section>
            </main>

        </>
    );
}
