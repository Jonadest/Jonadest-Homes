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

const baseUrl = 'https://jonadest-homes.vercel.app';
const ogImage = `${baseUrl}/og-image.jpg`;

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
                url: ogImage,
                width: 1200,
                height: 630,
                alt: 'Jonadest Home - Premier Real Estate',
                type: 'image/jpeg',
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
        images: [ogImage],
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

                {/* Hardcoded OG tags for Facebook/Instagram */}
                <meta
                    property="og:title"
                    content="Jonadest Home | Premier Real Estate"
                />
                <meta
                    property="og:description"
                    content="Modern real estate agency helping you find the perfect home in the Garden State."
                />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta
                    property="og:image:alt"
                    content="Jonadest Home - Premier Real Estate"
                />
                <meta property="og:url" content={baseUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Jonadest Home" />
                <meta property="og:locale" content="en_US" />

                {/* Facebook-specific tags */}
                <meta property="fb:app_id" content="" />
                <meta name="facebook-domain-verification" content="" />
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
