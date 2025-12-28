'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Button } from '../components/ui/Button';
import { RequestAccessModal } from '../components/ui/RequestAccessModal';

export default function DemoPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        requests: 12450,
        latency: 45,
        uptime: 99.99
    });

    // Simulate live data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                requests: prev.requests + Math.floor(Math.random() * 10),
                latency: Math.max(20, Math.min(80, prev.latency + (Math.random() - 0.5) * 10)),
                uptime: 99.99
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const activityLog = [
        { id: 1, action: "Deployment success: v2.4.0", time: "2 mins ago" },
        { id: 2, action: "Auto-scaling triggered: +2 instances", time: "15 mins ago" },
        { id: 3, action: "Security check completed", time: "1 hour ago" },
        { id: 4, action: "Database backup verified", time: "2 hours ago" },
        { id: 5, action: "New API key generated", time: "4 hours ago" }
    ];

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Live Platform Demo</h1>
                <p className={styles.subtitle}>
                    Experience the power of OceanzCloud's real-time analytics and management interface.
                    This is a simulated view of our client dashboard.
                </p>
                <div style={{ marginTop: '24px' }}>
                    <Button variant="glow" onClick={() => setIsModalOpen(true)}>Request Full Access</Button>
                </div>
            </div>

            <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className={styles.dashboard}>
                <aside className={styles.sidebar}>
                    <div
                        className={`${styles.navItem} ${activeTab === 'overview' ? styles.active : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <span>📊</span> Overview
                    </div>
                    <div
                        className={`${styles.navItem} ${activeTab === 'analytics' ? styles.active : ''}`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        <span>📈</span> Analytics
                    </div>
                    <div
                        className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <span>⚙️</span> Settings
                    </div>
                </aside>

                <div className={styles.content}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statLabel}>Total Requests</span>
                            <span className={styles.statValue}>{stats.requests.toLocaleString()}</span>
                            <span className={`${styles.statChange} ${styles.positive}`}>+12.5%</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statLabel}>Avg. Latency</span>
                            <span className={styles.statValue}>{Math.round(stats.latency)}ms</span>
                            <span className={`${styles.statChange} ${stats.latency > 60 ? styles.negative : styles.positive}`}>
                                {stats.latency > 60 ? '+5%' : '-2%'}
                            </span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statLabel}>Uptime</span>
                            <span className={styles.statValue}>{stats.uptime}%</span>
                            <span className={`${styles.statChange} ${styles.positive}`}>Stable</span>
                        </div>
                    </div>

                    <div className={styles.chartSection}>
                        <h3 className={styles.chartTitle}>Server Load Distribution</h3>
                        <div className={styles.barChart}>
                            {[40, 60, 35, 80, 55, 70, 45, 90, 65, 50, 75, 60].map((height, i) => (
                                <div
                                    key={i}
                                    className={styles.bar}
                                    style={{ height: `${height}%` }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.chartSection}>
                        <h3 className={styles.chartTitle}>Recent Activity</h3>
                        <div className={styles.activityFeed}>
                            {activityLog.map(item => (
                                <div key={item.id} className={styles.activityItem}>
                                    <span>{item.action}</span>
                                    <span className={styles.activityTime}>{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
