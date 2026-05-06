import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';

// Domain
const baseUrl = 'https://jonadesthome.com';

// OG Image (MUST be public, fast, no redirects)
const ogImage = 'https://ik.imagekit.io/jonadest/og-image.jpg';

export const metadata = {
    metadataBase: new URL(baseUrl),

    title: {
        default: 'Jonadest Home | Premier Real Estate in New Jersey',
        template: '%s | Jonadest Home',
    },

    description:
        'Find your dream home in New Jersey with Jonadest Home. Expert agents, modern living, and a seamless buying experience.',

    openGraph: {
        title: 'Jonadest Home | Premier Real Estate in New Jersey',
        description:
            'Modern real estate agency helping you find the perfect home in New Jersey.',
        url: baseUrl,
        siteName: 'Jonadest Home',
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: 'Jonadest Home - Premier Real Estate in New Jersey',
                type: 'image/jpeg',
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
        'New Jersey',
        'homes for sale',
        'Jonadest Home',
        'NJ real estate',
        'buy home New Jersey',
        'sell home New Jersey',
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
        <html lang="en">
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

                {/* Favicons */}
                <link rel="icon" href="/favicon.ico" sizes="48x48" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Manifest */}
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
