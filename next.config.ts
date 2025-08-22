import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // CSP handled by vercel.json
          // {
          //   key: 'Content-Security-Policy',
          //   value: "script-src 'self' 'unsafe-eval' 'unsafe-inline';",
          // },
        ],
      },
    ];
  },
  
  // Performance optimizations
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issues
  },
};

export default nextConfig;
