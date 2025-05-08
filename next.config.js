/** @type {import('next').NextConfig} */
// Bundle analyzer wraps config when ANALYZE=true
const nextConfig = {
  images: {
    // Allow external images from any host by default; adjust patterns as needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// Use CommonJS export to avoid MODULE_TYPELESS_PACKAGE_JSON warning
// Enable bundle analysis when ANALYZE environment variable is set
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);