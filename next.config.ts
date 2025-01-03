import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
  },
  images: {
    domains: ['placehold.jp', 'images.microcms.io', 'images.microcms-assets.io'],
  },
};

export default nextConfig;
