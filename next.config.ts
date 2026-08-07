/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ibb.co" },      // আগেরটি
      { protocol: "https", hostname: "i.ibb.co.com" }, // এটিও যোগ করুন
    ],
  },
};

export default nextConfig;