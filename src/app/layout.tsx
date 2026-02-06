import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Holman & Pitts Law, LLC | Experienced Legal Advocacy',
    description: 'Extensive legal experience with personalized service—dedicated to protecting your rights across family law, criminal defense, civil litigation, personal injury, real estate, and estate planning in Schuylkill and Carbon Counties.',
    keywords: 'law firm, attorney, lawyer, Schuylkill County, Tamaqua, family law, criminal defense, civil litigation, personal injury, real estate, estate planning',
    openGraph: {
        title: 'Holman & Pitts Law, LLC',
        description: 'Experienced Legal Advocacy with Compassion and Results',
        type: 'website',
        locale: 'en_US',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
