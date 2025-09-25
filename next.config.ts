import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Skip ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
};

export default nextConfig;
