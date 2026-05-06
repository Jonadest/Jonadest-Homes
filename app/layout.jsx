import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins',
    display: 'swap',
});

const baseUrl = 'https://jonadest-homes.vercel.app/';

// OG IMAGE
const ogImage = 'https://ik.imagekit.io/jonadest/og-image.jpg';


export const metadata = {
    title: 'Jonadest Home | Premier Real Estate',
    description:
        'Find your dream home with Jonadest Home. Expert agents, modern living, and a seamless buying experience.',

    metadataBase: new URL(baseUrl),

    openGraph: {
        title: 'Jonadest Home | Premier Real Estate',
        description:
            'Modern real estate agency helping you find the perfect home in the Garden State.',
        url: baseUrl,
        siteName: 'Jonadest Home',
        images: [
            {
                url: ogImage, // ✅ FULL URL (VERY IMPORTANT)
                width: 1200,
                height: 630,
                alt: 'Jonadest Home - Premier Real Estate',
                type: 'image/jpeg', // ✅ helps WhatsApp
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Jonadest Home | Premier Real Estate',
        description:
            'Modern real estate agency helping you find the perfect home in the Garden State.',
        images: [ogImage], // ✅ FULL URL
        creator: '@jonadesthomes',
    },

    alternates: {
        canonical: baseUrl,
    },

    robots: {
        index: true,
        follow: true,
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.variable}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className="antialiased">
                <Intro />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
