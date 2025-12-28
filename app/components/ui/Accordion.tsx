"use client";

import { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button className={styles.question} onClick={onClick}>
                {question}
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
            </button>
            <div className={styles.answerWrapper} style={{ maxHeight: isOpen ? '200px' : '0' }}>
                <div className={styles.answer}>{answer}</div>
            </div>
        </div>
    );
};

export const Accordion = ({ items }: { items: { question: string; answer: string }[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
};
