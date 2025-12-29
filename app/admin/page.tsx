import { prisma } from '../lib/db';
import styles from './styles.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Admin Dashboard | OceanzCloud',
};

export const dynamic = 'force-dynamic';

async function getStats() {
    const jobs = await prisma.jobApplication.count();
    const contacts = await prisma.contactSubmission.count();
    const demos = await prisma.demoRequest.count();

    return { jobs, contacts, demos };
}

async function getJobApplications() {
    return prisma.jobApplication.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20
    });
}

async function getContactSubmissions() {
    return prisma.contactSubmission.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20
    });
}

async function getDemoRequests() {
    return prisma.demoRequest.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20
    });
}

export default async function AdminPage() {
    const stats = await getStats();
    const jobApps = await getJobApplications();
    const contacts = await getContactSubmissions();
    const demos = await getDemoRequests();

    return (
        <div className={styles.container}>
            {/* Stats Cards */}
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>Job Applications</h3>
                    <p className={styles.stat}>{stats.jobs}</p>
                </div>
                <div className={styles.card}>
                    <h3>Contact Messages</h3>
                    <p className={styles.stat}>{stats.contacts}</p>
                </div>
                <div className={styles.card}>
                    <h3>Demo Requests</h3>
                    <p className={styles.stat}>{stats.demos}</p>
                </div>
            </div>

            {/* Resume Access Note */}
            <div className={styles.note}>
                <p>
                    <strong>Note:</strong> Resumes are stored in <code>public/uploads/resumes</code>.
                    You can access them via the links in the table below.
                </p>
            </div>

            {/* Sections */}
            <section className={styles.section}>
                <h2>Recent Job Applications</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Contact</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobApps.map((app: any) => (
                                <tr key={app.id}>
                                    <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                                    <td>{app.name}</td>
                                    <td>{app.jobTitle}</td>
                                    <td>{app.email}<br />{app.phone}</td>
                                    <td>
                                        <a href={app.resumePath} target="_blank" className={styles.link}>Download</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.section}>
                <h2>Recent Contact Messages</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Subject/Message</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((msg: any) => (
                                <tr key={msg.id}>
                                    <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
                                    <td>{msg.name}<br /><span className={styles.sub}>{msg.company}</span></td>
                                    <td className={styles.messageCol}>{msg.message}</td>
                                    <td>{msg.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.section}>
                <h2>Recent Demo Requests</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Email</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {demos.map((req: any) => (
                                <tr key={req.id}>
                                    <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                                    <td>{req.email}</td>
                                    <td>{req.company || '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
