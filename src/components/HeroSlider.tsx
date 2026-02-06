'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const slides = [
    {
        image: '/images/image3.webp',
        alt: 'Lady Justice statue with scales',
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className={styles.hero}>
            <div className={styles.sliderContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            className={styles.image}
                            sizes="100vw"
                        />
                    </div>
                ))}
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <p className={styles.phone}>570-668-5321</p>
                <h1 className={styles.title}>
                    Experienced Legal Advocacy with
                    <br />
                    Compassion and Results
                </h1>
                <p className={styles.subtitle}>
                    Extensive legal experience with personalized service
                </p>
                <Link href="/contact" className={styles.cta}>
                    Schedule a Consultation
                </Link>
            </div>

            {slides.length > 1 && (
                <div className={styles.dots}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
