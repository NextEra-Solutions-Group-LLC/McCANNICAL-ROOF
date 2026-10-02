import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ibb.co" },     
      { protocol: "https", hostname: "i.ibb.co.com" }, 
    ],
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/service-areas', destination: '/service-area', permanent: true },
      { source: '/reviews', destination: '/#reviews', permanent: true },
      { source: '/latest-news', destination: '/blog', permanent: true },
      { source: '/storm-damage-roof-repair-cedar-park-tx', destination: '/blog/storm-damage-roof-repair-cedar-park-tx', permanent: true },
    
    ];
  },
};

export default nextConfig;
