import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [40, 75, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
