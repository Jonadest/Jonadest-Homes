import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';

export const metadata = {
    metadataBase: new URL('https://jonadesthome.com'),
    title: 'Jonadest Home | Premier Real Estate in New Jersey',
    description:
        'Find your dream home in New Jersey with Jonadest Home. Expert agents, modern living, and a seamless buying experience.',
    keywords: ['real estate', 'New Jersey', 'homes for sale', 'Jonadest Home'],
    openGraph: {
        title: 'Jonadest Home | Premier Real Estate in New Jersey',
        description:
            'Modern real estate agency helping you find the perfect home.',
        url: 'https://jonadesthome.com',
        siteName: 'Jonadest Home',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Jonadest Home',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                
                  <Intro/>
                  {children}
                
                <Footer />
            </body>
        </html>
    );
}
