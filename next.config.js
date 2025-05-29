/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['localhost'],
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true,
  },
  // Ensure proper handling of static files
  trailingSlash: true,
  // Disable server-side features
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig 