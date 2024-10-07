/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_STRAPI_BASE_URL: process.env.NEXT_STRAPI_BASE_URL,
  }
};

export default nextConfig;
