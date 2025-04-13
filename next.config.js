/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['www.subway.co.kr'],
  },
};

module.exports = nextConfig;
