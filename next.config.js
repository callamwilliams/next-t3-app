/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import("next").NextConfig} */


const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  { 
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
  transpilePackages: ['lucide-react'],
  typescript: { ignoreBuildErrors: true },
  experimental: {},
});

