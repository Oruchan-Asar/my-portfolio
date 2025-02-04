/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This will allow all domains - you may want to restrict this
      },
    ],
  },
};

module.exports = nextConfig;
