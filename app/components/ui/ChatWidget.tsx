'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! I'm the OceanzCloud AI Assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userText = inputValue;
        const newUserMessage: Message = {
            id: Date.now(),
            text: userText,
            sender: 'user'
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');

        // Add a temporary loading message or just wait
        // ideally we could show a "typing..." indicator, but for now we wait

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userText, history: messages })
            });

            if (!res.ok) throw new Error('Failed to fetch response');

            const data = await res.json();

            const botResponse: Message = {
                id: Date.now() + 1,
                text: data.reply,
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);

        } catch (error) {
            console.error(error);
            const errorMessage: Message = {
                id: Date.now() + 1,
                text: "Sorry, I'm having trouble connecting to the server right now. Please try again later.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, errorMessage]);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className={styles.chatContainer}>
            <div className={`${styles.window} ${!isOpen ? styles.closed : ''}`}>
                <div className={styles.header}>
                    <div>
                        <h3 className={styles.title}>OceanzCloud Assistant</h3>
                        <span className={styles.subtitle}>Online</span>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
                </div>

                <div className={styles.messages}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
                            {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className={styles.inputArea}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className={styles.sendBtn} onClick={handleSend}>
                        ➤
                    </button>
                </div>
            </div>

            <button className={styles.launcher} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '↓' : '💬'}
            </button>
        </div>
    );
};
