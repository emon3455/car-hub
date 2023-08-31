/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "i.ibb.co",
        },
        {
          protocol: "https",
          hostname: "ibb.co",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "xsgames.co",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
