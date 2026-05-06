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
                type: 'image/png', // 🔥 IMPORTANT
            },
        ],
        type: 'website',
        locale: 'en_US',
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

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        'real estate',
        'homes for sale',
        'property listings',
        'real estate agents',
        'home buying',
        'home selling',
        'real estate market',
        'real estate agency',
        'real estate company',
        'real estate services',
    ],
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
                <meta name="theme-color" content="#166534" />
                {/* Favicons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Additional Social Meta Tags for WhatsApp/Facebook */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="Delposh Beauty & Fitness"
                />
                <meta property="og:image:type" content="image/png" />
                <meta
                    name="twitter:image:alt"
                    content="Delposh Beauty & Fitness"
                />
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
