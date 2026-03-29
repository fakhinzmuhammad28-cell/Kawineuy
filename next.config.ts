/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // aktifkan kompatibilitas system lama
    legacyBrowsers: true,
    serverActions: false
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;