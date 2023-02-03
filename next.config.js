/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['pbs.twimg.com', 'avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
