import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Your current images
      { protocol: "https", hostname: "img.rocket.new" },

      // Unsplash (if you're using it)
      { protocol: "https", hostname: "images.unsplash.com" },

      // If you ever used source.unsplash.com links
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
};

export default nextConfig;