import Image from 'next/image';
import styles from './page.module.css';

const practiceAreas = [
    {
        id: 'family-law',
        title: 'Family Law',
        image: '/images/image1.webp',
        description: 'Divorce, custody, support, and other family matters handled with care and expertise.',
    },
    {
        id: 'civil-litigation',
        title: 'Civil Litigation',
        image: '/images/image2.webp',
        description: 'Representing clients in civil disputes with strategic and effective advocacy.',
    },
    {
        id: 'criminal-defense',
        title: 'Criminal Defense',
        image: '/images/image3.webp',
        description: 'Protecting your rights with experienced criminal defense representation.',
    },
    {
        id: 'real-estate',
        title: 'Real Estate',
        image: '/images/image4.webp',
        description: 'Residential and commercial real estate transactions and legal matters.',
    },
    {
        id: 'personal-injury',
        title: 'Personal Injury',
        image: '/images/image5.webp',
        description: 'Fighting for fair compensation when you\'ve been injured due to negligence.',
    },
    {
        id: 'estate-planning',
        title: 'Estate Administration & Planning',
        image: '/images/image6.webp',
        description: 'Wills, trusts, and estate administration to protect your legacy.',
    },
];

export default function PracticeAreasPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Practice Areas</h1>
                    <p className={styles.description}>
                        Extensive legal experience with personalized service—dedicated to
                        protecting your rights and pursuing the best possible outcome in every case
                        across family law, criminal defense, civil litigation, personal injury, real estate,
                        and estate planning in Schuylkill and Carbon Counties.
                    </p>
                </div>
            </section>

            <section className={styles.areasSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our practice includes:</h2>
                    <div className={styles.areasGrid}>
                        {practiceAreas.map((area) => (
                            <article key={area.id} className={styles.areaCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className={styles.image}
                                    />
                                    <div className={styles.imageOverlay}></div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.areaTitle}>{area.title}</h3>
                                    <p className={styles.areaDescription}>{area.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
