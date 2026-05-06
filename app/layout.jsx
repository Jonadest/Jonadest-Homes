import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';

// Domain
const baseUrl = 'https://jonadesthome.com';

// OG Image (ImageKit CDN)
const ogImage = 'https://ik.imagekit.io/jonadest/og-image.jpg';

export const metadata = {
    title: 'Jonadest Home | Premier Real Estate in New Jersey',
    description:
        'Find your dream home in New Jersey with Jonadest Home. Expert agents, modern living, and a seamless buying experience.',

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
        'real estate agent',
        'premier real estate',
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
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Additional Social Meta Tags for WhatsApp/Facebook */}
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
