/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow other devices on your network to access dev server
    allowedDevOrigins: ['192.168.100.8', 'localhost:3000'],

    // Headers for CORS and bot access
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
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=0, must-revalidate',
                    },
                ],
            },
        ];
    },

    turbopack: {
        // Empty for now, will be used if needed
    },

    // For webpack (if you switch from turbopack)
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
