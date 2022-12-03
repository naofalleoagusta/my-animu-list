/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "80",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "80",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 604800,
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
