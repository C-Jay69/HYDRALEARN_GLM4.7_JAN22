import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // REMOVE "output: 'standalone'" - Vercel doesn't need this
  // output: "standalone",  // ← Comment out or delete this line
  
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  
  // Optional: Add these for better Vercel compatibility
  images: {
    unoptimized: true, // If you're having image optimization issues
  },
};

export default nextConfig;