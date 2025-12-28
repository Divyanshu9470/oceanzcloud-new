import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import styles from './page.module.css';

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <div className={styles.content}>
                        <p>Last updated: December 2025</p>

                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to OceanzCloud. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions.
                            Please read them carefully. If you do not agree with any part of these terms, you must not use our website or services.
                        </p>

                        <h2>2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by OceanzCloud, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>

                        <h2>3. User Representations</h2>
                        <p>
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.
                        </p>

                        <h2>4. Prohibited Activities</h2>
                        <p>
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>

                        <h2>5. Limitation of Liability</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>

                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at: terms@oceanzcloud.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
