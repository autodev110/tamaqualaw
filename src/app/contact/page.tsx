'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const businessHours = [
    { day: 'Mon', hours: '09:00 am – 05:00 pm' },
    { day: 'Tue', hours: '09:00 am – 05:00 pm' },
    { day: 'Wed', hours: '09:00 am – 05:00 pm' },
    { day: 'Thu', hours: '09:00 am – 05:00 pm' },
    { day: 'Fri', hours: '09:00 am – 05:00 pm' },
    { day: 'Sat', hours: 'Closed' },
    { day: 'Sun', hours: 'Closed' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSubmitMessage('Thank you for your message. We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Contact Us</h1>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Form */}
                        <div className={styles.formColumn}>
                            <h2 className={styles.formTitle}>Drop us a line!</h2>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                        className={styles.input}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email*"
                                        className={styles.input}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message"
                                        className={styles.textarea}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>

                                {submitMessage && (
                                    <p className={styles.successMessage}>{submitMessage}</p>
                                )}
                            </form>

                            <p className={styles.disclaimer}>
                                This site is protected by reCAPTCHA and the Google{' '}
                                <Link href="https://policies.google.com/privacy" className={styles.link}>
                                    Privacy Policy
                                </Link>{' '}
                                and{' '}
                                <Link href="https://policies.google.com/terms" className={styles.link}>
                                    Terms of Service
                                </Link>{' '}
                                apply.
                            </p>
                        </div>

                        {/* Business Info */}
                        <div className={styles.infoColumn}>
                            <p className={styles.legalNotice}>
                                Please provide your contact information and some brief information on
                                your legal needs. I understand that submitting my information does not
                                create an attorney-client relationship, which will only be established
                                if and when a formally signed retainer agreement is completed for legal
                                services. For security reasons, please do not use this form to submit
                                any sensitive information to the law office.
                            </p>

                            <div className={styles.businessInfo}>
                                <h3 className={styles.businessName}>
                                    Holman & Pitts Law Office, LLC
                                </h3>
                                <p className={styles.address}>
                                    204 E Broad St, Tamaqua, PA 18252
                                </p>
                                <p className={styles.phone}>
                                    <Link href="tel:570-668-5321">570-668-5321</Link>
                                </p>
                            </div>

                            <div className={styles.hours}>
                                <h3 className={styles.hoursTitle}>Hours</h3>
                                <div className={styles.hoursList}>
                                    {businessHours.map((item) => (
                                        <div key={item.day} className={styles.hoursRow}>
                                            <span className={styles.day}>{item.day}</span>
                                            <span className={styles.time}>{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.socialSection}>
                                <Link
                                    href="https://www.facebook.com/HolmanPittsLaw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    <svg
                                        className={styles.socialIcon}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    Connect With Us
                                </Link>
                            </div>

                            <Link
                                href="https://maps.google.com/?q=204+E+Broad+St+Tamaqua+PA+18252"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.directionsLink}
                            >
                                Get directions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
