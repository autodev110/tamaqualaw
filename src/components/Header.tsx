'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <Link
                        href="/"
                        className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href="/practice-areas"
                        className={`${styles.navLink} ${isActive('/practice-areas') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Practice Areas
                    </Link>
                </div>

                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <h1>Holman & Pitts Law, LLC</h1>
                </Link>

                <div className={styles.navRight}>
                    <Link
                        href="/about"
                        className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.menuBar}></span>
                    <span className={styles.menuBar}></span>
                    <span className={styles.menuBar}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <Link
                        href="/"
                        className={`${styles.mobileLink} ${isActive('/') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href="/practice-areas"
                        className={`${styles.mobileLink} ${isActive('/practice-areas') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Practice Areas
                    </Link>
                    <Link
                        href="/about"
                        className={`${styles.mobileLink} ${isActive('/about') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className={`${styles.mobileLink} ${isActive('/contact') ? styles.active : ''}`}
                        onClick={closeMenu}
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}
