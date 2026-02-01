import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // CRITICAL FOR VERCEL: Add basePath
  basePath: '', // Leave empty if using root domain
  
  // Use 'standalone' for better Vercel deployment
  output: 'standalone',
  
  transpilePackages: ['@genkit-ai', '@google/generative-ai'],
  images: {
    unoptimized: true,
  },
  
  // Add these for better routing
  trailingSlash: false,
};

export default nextConfig;
