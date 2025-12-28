import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/images/oceanzcloud-logo-v4.png"
                    alt="OceanzCloud"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className={styles.logoImage}
                    style={{ width: 'auto', height: '40px' }}
                />
            </Link>

            <nav className={styles.nav}>
                <Link href="/services" className={styles.navLink}>Services</Link>
                <Link href="/industries" className={styles.navLink}>Industries</Link>
                <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
                <Link href="/about" className={styles.navLink}>Company</Link>
                <Link href="/career" className={styles.navLink}>Career</Link>
            </nav>

            <div className={styles.actions}>
                <Link href="/contact" className={styles.ctaButton}>
                    Schedule Call
                </Link>
            </div>
        </header >
    );
};
