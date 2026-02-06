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
            </div>
        </footer>
    );
}
