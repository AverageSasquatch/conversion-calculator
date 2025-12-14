import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Hostinger deployment
  output: "export",

  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Optimize images - use unoptimized for static export
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header

  // Trailing slash for static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
