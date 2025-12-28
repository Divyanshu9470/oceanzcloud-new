import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import styles from './page.module.css';

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <div className={styles.content}>
                        <p>Last updated: December 2025</p>

                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to OceanzCloud. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website.
                        </p>

                        <h2>2. Data We Collect</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            Identity Data, Contact Data, Technical Data, and Usage Data.
                        </p>

                        <h2>3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            to provide the services you request, to communicate with you, and to improve our platform.
                        </p>

                        <h2>4. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: privacy@oceanzcloud.com.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
