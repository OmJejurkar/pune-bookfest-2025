import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for local development
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
