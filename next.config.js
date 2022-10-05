/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPHQL_SERVER: process.env.GRAPHQL_SERVER,
    BUCKET_URL: process.env.BUCKET_URL
  },
}

module.exports = nextConfig
