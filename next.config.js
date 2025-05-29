/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Disable server-side image optimization for Netlify
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 