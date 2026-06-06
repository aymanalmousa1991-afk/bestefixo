const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['mongodb'],
  },
  // Geen build cache om grote bestanden te voorkomen op Cloudflare Pages
  generateBuildId: () => 'build-' + Date.now(),
  webpack(config, { dev, isServer }) {
    // Geen cache in productie — Cloudflare heeft 25MB limiet
    if (!dev) {
      config.cache = false;
    }
    if (dev) {
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules'],
      };
    }
    return config;
  },
  async headers() {
    const allowedOrigins = process.env.CORS_ORIGINS || 'https://bestefixo.nl';
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://bestefixo.nl;" },
          { key: "Access-Control-Allow-Origin", value: allowedOrigins },
          { key: "Access-Control-Allow-Methods", value: "GET, POST" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
