import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const practiceAreas = [
    { title: 'Family Law', icon: '👨‍👩‍👧‍👦', href: '/practice-areas' },
    { title: 'Criminal Defense', icon: '⚖️', href: '/practice-areas' },
    { title: 'Civil Litigation', icon: '📋', href: '/practice-areas' },
    { title: 'Real Estate', icon: '🏠', href: '/practice-areas' },
    { title: 'Personal Injury', icon: '🩹', href: '/practice-areas' },
    { title: 'Estate Planning', icon: '📜', href: '/practice-areas' },
];



export default function HomePage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/image3.webp"
                        alt="Lady Justice"
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={styles.heroContent}>

                    <h1 className={styles.heroTitle}>
                        Experienced Legal Advocacy
                        <span className={styles.heroTitleAccent}> with Compassion</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Extensive legal experience with personalized service—dedicated to
                        protecting your rights and pursuing the best possible outcome.
                    </p>
                    <div className={styles.heroCtas}>
                        <Link href="/contact" className={styles.ctaPrimary}>
                            Schedule a Consultation
                        </Link>
                        <Link href="tel:570-668-5321" className={styles.ctaSecondary}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            570-668-5321
                        </Link>
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <span>Scroll to explore</span>
                    <div className={styles.scrollArrow}></div>
                </div>
            </section>



            {/* About Preview */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutImage}>
                            <Image
                                src="/images/image7.webp"
                                alt="Christine A. Holman and Jacqueline M. Pitts"
                                width={450}
                                height={550}
                                className={styles.aboutPhoto}
                            />
                            <div className={styles.aboutImageDecor}></div>
                        </div>
                        <div className={styles.aboutContent}>
                            <span className={styles.sectionLabel}>About Our Firm</span>
                            <h2 className={styles.aboutTitle}>
                                A Family Tradition of <span>Legal Excellence</span>
                            </h2>
                            <p className={styles.aboutText}>
                                Holman & Pitts Law, LLC is a family-owned law firm founded by
                                Christine A. Holman, Esq. and her daughter Jacqueline M. Pitts, Esq.
                                Together, they bring decades of combined legal experience and a
                                personal commitment to every client they serve.
                            </p>
                            <p className={styles.aboutText}>
                                As the first elected female District Attorney of Schuylkill County,
                                Attorney Holman brings a unique perspective to the practice. Now,
                                alongside her daughter, they continue a family tradition of dedicated
                                legal service.
                            </p>
                            <Link href="/about" className={styles.aboutLink}>
                                Learn More About Us
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Preview */}
            <section className={styles.practiceSection}>
                <div className={styles.container}>
                    <div className={styles.practiceHeader}>
                        <span className={styles.sectionLabel}>Our Expertise</span>
                        <h2 className={styles.practiceTitle}>Practice Areas</h2>
                        <p className={styles.practiceSubtitle}>
                            Comprehensive legal services tailored to your needs
                        </p>
                    </div>
                    <div className={styles.practiceGrid}>
                        {practiceAreas.map((area, index) => (
                            <Link
                                key={index}
                                href={area.href}
                                className={styles.practiceCard}
                            >
                                <span className={styles.practiceIcon}>{area.icon}</span>
                                <h3 className={styles.practiceCardTitle}>{area.title}</h3>
                                <span className={styles.practiceArrow}>→</span>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.practiceFooter}>
                        <Link href="/practice-areas" className={styles.practiceViewAll}>
                            View All Practice Areas
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaBackground}>
                    <Image
                        src="/images/image2.webp"
                        alt="Legal consultation"
                        fill
                        className={styles.ctaBgImage}
                        sizes="100vw"
                    />
                    <div className={styles.ctaOverlay}></div>
                </div>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Discuss Your Case?</h2>
                        <p className={styles.ctaText}>
                            We're here to help. Schedule a consultation to discuss your legal
                            needs with our experienced attorneys.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaButton}>
                                Get Started Today
                            </Link>
                            <Link href="tel:570-668-5321" className={styles.ctaPhone}>
                                Or call: 570-668-5321
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className={styles.locationSection}>
                <div className={styles.container}>
                    <div className={styles.locationGrid}>
                        <div className={styles.locationInfo}>
                            <span className={styles.sectionLabel}>Visit Us</span>
                            <h2 className={styles.locationTitle}>Our Office</h2>
                            <address className={styles.locationAddress}>
                                <strong>Holman & Pitts Law Office, LLC</strong>
                                <p>204 E Broad St</p>
                                <p>Tamaqua, PA 18252</p>
                            </address>
                            <div className={styles.locationHours}>
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                            <Link
                                href="https://maps.google.com/?q=204+E+Broad+St+Tamaqua+PA+18252"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.locationLink}
                            >
                                Get Directions
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.locationMap}>
                            <div className={styles.mapPlaceholder}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.5!2d-75.9686!3d40.7975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c5b5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2s204%20E%20Broad%20St%2C%20Tamaqua%2C%20PA%2018252!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
