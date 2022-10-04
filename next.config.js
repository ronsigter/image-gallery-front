/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPHQL_SERVER: process.env.GRAPHQL_SERVER,
  },
}

module.exports = nextConfig
