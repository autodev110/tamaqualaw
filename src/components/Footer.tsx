import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    Copyright © {currentYear}{' '}
                    <Link href="/" className={styles.link}>
                        Holman & Pitts Law Office, LLC
                    </Link>{' '}
                    - All Rights Reserved.
                </p>
                <div className={styles.legalLinks}>
                    <Link href="/privacy-policy" className={styles.legalLink}>
                        Privacy Policy
                    </Link>
                    <span className={styles.separator}>|</span>
                    <Link href="/terms-of-service" className={styles.legalLink}>
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
