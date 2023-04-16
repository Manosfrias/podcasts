/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mzstatic.com',
        port: '',
      },
    ],
  },
  compiler: {
    styledComponents: {
      displayName: true,
    },
  },
}

module.exports = nextConfig
