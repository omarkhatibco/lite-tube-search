/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  swcMinify: true,
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
    newNextLinkBehavior: true,
    serverComponents: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',

    emotion: true,
  },
};

module.exports = nextConfig;
