import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/7.x/avataaars/svg**',
      },
    ],
  },
  // Optimize for stability
  experimental: {
    // Disable problematic features that cause EMFILE errors
    serverComponentsExternalPackages: [],
  },
  // Reduce file watching overhead
  webpack: (config, { dev }) => {
    if (dev) {
      // Optimize file watching for macOS
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          '**/public/**',
        ],
      };
    }
    return config;
  },
};

export default nextConfig;