import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚠️ CRITICAL CHANGE: Force static export
  output: 'export',
  
  // ⚠️ Required for 'export'
  images: {
    unoptimized: true,
  },
  
  // Your existing settings
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@genkit-ai', '@google/generative-ai'],
  
  // Remove or comment these if they exist:
  // basePath: '',
  // assetPrefix: '',
  // trailingSlash: true,
};

export default nextConfig;