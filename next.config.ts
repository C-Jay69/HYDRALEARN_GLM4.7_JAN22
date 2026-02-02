import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configured for Vercel deployment with SSR/API support
  
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@genkit-ai', '@google/generative-ai'],
};

export default nextConfig;
