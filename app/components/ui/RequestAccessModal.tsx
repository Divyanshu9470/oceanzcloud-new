'use client';

import React, { useState } from 'react';
import styles from './RequestAccessModal.module.css';

interface RequestAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        company: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/demo/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.modal} onClick={e => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={onClose}>&times;</button>
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚀</div>
                        <h2 className={styles.title}>Request Received!</h2>
                        <p className={styles.subtitle}>
                            Thanks for your interest. Our team will review your request and get back to you shortly with full access credentials.
                        </p>
                        <button className={styles.submitButton} onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <h2 className={styles.title}>Request Full Access</h2>
                <p className={styles.subtitle}>
                    Unlock the full potential of OceanzCloud. Fill out the form below to request a demo account.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Work Email</label>
                        <input
                            type="email"
                            required
                            className={styles.input}
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Company Name (Optional)</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                        {isLoading ? 'Sending Request...' : 'Submit Request'}
                    </button>
                </form>
            </div>
        </div>
    );
};
