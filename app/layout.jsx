import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';

// ✅ Font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins',
    display: 'swap',
});

// ✅ Domain
const baseUrl = 'https://jonadest-homes.vercel.app';


const ogImage = 'https://ik.imagekit.io/jonadest/og-image.jpg';

export const metadata = {
    title: 'Jonadest Home | Premier Real Estate in New Jersey',
    description:
        'Find your dream home in New Jersey with Jonadest Home. Expert agents, modern living, and a seamless buying experience.',
    keywords: [
        'real estate',
        'New Jersey',
        'homes for sale',
        'Jonadest Home',
        'NJ real estate',
        'buy home New Jersey',
        'sell home New Jersey',
        'real estate agent',
        'premier real estate',
    ],
    authors: [{ name: 'Jonadest Home' }],
    creator: 'Jonadest Home',
    publisher: 'Jonadest Home',
    metadataBase: new URL(baseUrl),
    openGraph: {
        title: 'Jonadest Home | Premier Real Estate in New Jersey',
        description:
            'Modern real estate agency helping you find the perfect home in the Garden State.',
        url: baseUrl,
        siteName: 'Jonadest Home',
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: 'Jonadest Home - Premier Real Estate in New Jersey',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jonadest Home | Premier Real Estate in New Jersey',
        description:
            'Modern real estate agency helping you find the perfect home in New Jersey.',
        images: [ogImage],
        creator: '@jonadesthome',
    },
    alternates: {
        canonical: baseUrl,
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#166534',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.variable}>
            <head>
                {/* Theme */}
                <meta name="theme-color" content="#166534" />

                {/* PWA */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Jonadest Home"
                />

                

                {/* Extra OG tags for WhatsApp/Facebook */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="Jonadest Home - Premier Real Estate in New Jersey"
                />
                <meta property="og:image:type" content="image/jpeg" />
                <meta
                    name="twitter:image:alt"
                    content="Jonadest Home - Premier Real Estate in New Jersey"
                />
            </head>
            <body className="antialiased">
                <Header />
                <Intro />
                {children}
                <Footer />
            </body>
        </html>
    );
}
