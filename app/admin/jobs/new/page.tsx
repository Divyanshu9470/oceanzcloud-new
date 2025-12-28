'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { Button } from '../../../components/ui/Button';

export default function PostJobPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const [formData, setFormData] = useState({
        title: '',
        type: 'Full-time',
        location: 'Remote',
        description: '',
        skills: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to post job');
            }

            setMessage({ type: 'success', text: 'Job posted successfully! Redirecting...' });

            // Wait a moment before redirecting
            setTimeout(() => {
                router.push('/career');
                router.refresh(); // Refresh to show new data
            }, 1500);

        } catch (error) {
            setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Something went wrong.' });
            setIsLoading(false);
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Post a New Job</h1>
                <p className={styles.subtitle}>Create a new role to attract top talent to OceanzCloud.</p>

                {message && (
                    <div className={message.type === 'success' ? styles.successMessage : styles.errorMessage}>
                        {message.text}
                    </div>
                )}

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title" className={styles.label}>Job Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="e.g. Senior Frontend Engineer"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="type" className={styles.label}>Employment Type</label>
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="location" className={styles.label}>Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="e.g. Remote, San Francisco, London"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="skills" className={styles.label}>Required Skills</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="e.g. React, TypeScript, Node.js (comma separated)"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description" className={styles.label}>Job Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={styles.textarea}
                            placeholder="Describe the role, responsibilities, and requirements..."
                            required
                        />
                    </div>

                    <div className={styles.actions}>
                        <Button type="submit" variant="glow" disabled={isLoading}>
                            {isLoading ? 'Posting...' : 'Post Job'}
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    );
}
