import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['cdn.pixabay.com'],
  },
};

export default nextConfig;
