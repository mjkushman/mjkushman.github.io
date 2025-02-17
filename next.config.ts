import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  basePath: "",
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo*",
      },
    ],
  },
};

export default nextConfig;
