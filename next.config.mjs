/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.100.8', 'localhost:3000'],

    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'X-Robots-Tag',
                        value: 'index, follow',
                    },
                    // Allow Facebook scraper
                    {
                        key: 'X-Frame-Options',
                        value: 'ALLOW-FROM https://www.facebook.com',
                    },
                ],
            },
            // Specific headers for OG image
            {
                source: '/og-image.jpg',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                ],
            },
        ];
    },

    turbopack: {},

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
};

export default nextConfig;
