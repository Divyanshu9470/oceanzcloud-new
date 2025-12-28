import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.linksContainer}>
          {/* Column 1: Services */}
          <div className={styles.column}>
            <h4>Services We Offer</h4>
            <Link href="/services/mobile-app-development" className={styles.link}>Mobile App Development</Link>
            <Link href="/services/product-design" className={styles.link}>Product Design & Ideation</Link>
            <Link href="/services/software-development" className={styles.link}>Software Development</Link>
            <Link href="/services/cloud-solutions" className={styles.link}>Cloud Solutions</Link>
            <Link href="/services/devops" className={styles.link}>DevOps & Automation</Link>
            <Link href="/services/blockchain" className={styles.link}>Blockchain Development</Link>
            <Link href="/services/ai-machine-learning" className={styles.link}>AI & Machine Learning</Link>
            <Link href="/services/digital-transformation" className={styles.link}>Digital Transformation</Link>
          </div>

          {/* Column 2: Portfolio */}
          <div className={styles.column}>
            <h4>Portfolio</h4>
            <Link href="/portfolio/taqa" className={styles.link}>TAQA Distribution Abu Dhabi</Link>
            <Link href="/portfolio/dubai-municipality" className={styles.link}>Dubai Municipality</Link>
            <Link href="/portfolio/igl-connect" className={styles.link}>IGL Connect</Link>
            <Link href="/portfolio" className={styles.link}>...more</Link>
          </div>

          {/* Column 3: Industries */}
          <div className={styles.column}>
            <h4>Industries</h4>
            <Link href="/industries/logistics" className={styles.link}>Logistics Softwares</Link>
            <Link href="/industries/healthcare" className={styles.link}>Healthcare Softwares</Link>
            <Link href="/industries/travel" className={styles.link}>Travel Applications</Link>
            <Link href="/industries/gaming" className={styles.link}>Gaming Applications</Link>
            <Link href="/industries/ecommerce" className={styles.link}>E-Commerce Apps</Link>
            <Link href="/industries/fintech" className={styles.link}>Fintech Applications</Link>
            <Link href="/industries/automotive" className={styles.link}>Automotive Softwares</Link>
            <Link href="/industries/edtech" className={styles.link}>EdTech Applications</Link>
          </div>

          {/* Column 4: Resources */}
          <div className={styles.column}>
            <h4>Resources</h4>
            <Link href="/about" className={styles.link}>Company</Link>
            <Link href="/career" className={styles.link}>Career With Us</Link>
            <Link href="/contact" className={styles.link}>Contact Us</Link>
            <Link href="/insights" className={styles.link}>Insights</Link>
            <Link href="/faq" className={styles.link}>FAQS</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
          </div>
        </div>

        {/* Column 5: Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.brand}>
            <Image
              src="/images/oceanzcloud-logo-v4.png"
              alt="OceanzCloud"
              width={240}
              height={55}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.callUs}>
            <span className={styles.label}>Call us</span>
            <a href="tel:+917204409011" className={styles.phone}>+91 72044-09011</a>
          </div>
          <div className={styles.address}>
            <p>Pisa, Block B, 14th Inari,</p>
            <p>Rustamjee layout, WhiteFiled,</p>
            <p>Bengaluru, 560066</p>
          </div>
          <a href="mailto:info@oceanzcloud.com" className={styles.email}>info@oceanzcloud.com</a>

          <div className={styles.socials}>
            {/* Simple SVG Icons */}
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} Oceanzcloud. All Right Reserved.
      </div>
    </footer>
  );
};
