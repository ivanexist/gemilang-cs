import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "raw.githubusercontent.com",
      "images.unsplash.com",
      "vercel.app",
      "shtheme.com",
    ],
  },
  output: "standalone",
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  // Disable static optimization for pages with dynamic data
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
};

export default nextConfig;
