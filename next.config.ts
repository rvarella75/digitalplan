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
          // Removed CSP header to allow Next.js default behavior
          // {
          //   key: 'Content-Security-Policy',
          //   value: "default-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline' blob:; img-src 'self' data: blob: https:; font-src 'self' data: blob:; connect-src 'self' 'unsafe-inline' https://n8n.profutureconsulting.com https://calendly.com; frame-src 'self' https://calendly.com; object-src 'none'; base-uri 'self'; form-action 'self';",
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
