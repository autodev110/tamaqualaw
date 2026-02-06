'use client';

import styles from '../privacy-policy/page.module.css';

export default function TermsOfServicePage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Holman & Pitts Law, LLC ("we," "us," or "our"), concerning your access to and use of the tamaqualaw.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>

                        <h2>2. Authorization and Use</h2>
                        <p>
                            You agree to use this Site only for lawful purposes. You represent and warrant that all information you submit will be true, accurate, current, and complete. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                        </p>

                        <h2>3. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>

                        <h2>4. Legal Advice Disclaimer</h2>
                        <p>
                            The materials on this Site have been prepared by Holman & Pitts Law, LLC for informational purposes only and are not legal advice. This information is not intended to create, and receipt of it does not constitute, an attorney-client relationship. Internet subscribers and online readers should not act upon this information without seeking professional counsel.
                        </p>

                        <h2>5. Third-Party Websites</h2>
                        <p>
                            The Site may contain links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us.
                        </p>

                        <h2>6. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of the Commonwealth of Pennsylvania. Holman & Pitts Law, LLC and yourself irrevocably consent that the courts of Pennsylvania shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>

                        <h2>7. Contact Us</h2>
                        <p>
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <address>
                            Holman & Pitts Law Office, LLC<br />
                            204 E Broad St<br />
                            Tamaqua, PA 18252<br />
                            Phone: 570-668-5321
                        </address>
                    </div>
                </div>
            </section>
        </div>
    );
}
