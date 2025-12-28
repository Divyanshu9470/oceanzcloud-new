"use client";

import { useState } from 'react';
import styles from './JobCard.module.css';
import { ApplicationModal } from './ApplicationModal';

interface JobCardProps {
    title: string;
    type: string;
    location: string;
    description: string;
    skills: string[];
}

export const JobCard = ({ title, type, location, description, skills }: JobCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.card}>
                <div className={styles.header}>
                    <div>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.location}>
                            <span>📍</span> {location}
                        </div>
                    </div>
                    <span className={styles.type}>{type}</span>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <span key={index} className={styles.skill}>{skill}</span>
                    ))}
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className={styles.applyBtn}
                    style={{ border: 'none', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
                >
                    Apply Now
                </button>
            </div>

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={title}
            />
        </>
    );
};
