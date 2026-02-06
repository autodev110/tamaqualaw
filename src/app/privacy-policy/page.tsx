'use client';

import styles from './page.module.css';

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2>1. Introduction</h2>
                        <p>
                            Holman & Pitts Law, LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website tamaqualaw.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <p>
                            We collect several types of information from and about users of our Website, including information:
                        </p>
                        <ul>
                            <li>By which you may be personally identified, such as name, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
                            <li>That is about you but individually does not identify you; and/or</li>
                            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>
                            We use information that we collect about you or that you provide to us, including any personal information:
                        </p>
                        <ul>
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it.</li>
                            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                        </ul>

                        <h2>4. Disclaimer Regarding Attorney-Client Relationship</h2>
                        <p>
                            Transmission of information to or from this Website does not create an attorney-client relationship between you and Holman & Pitts Law, LLC, nor is it intended to do so. The transmission of the Website, in part or in whole, and/or any communication with us via Internet e-mail through this site does not constitute or create an attorney-client relationship between us and any recipients.
                        </p>

                        <h2>5. Contact Us</h2>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
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
