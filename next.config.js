/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['pbs.twimg.com', 'img.icons8.com']
  }
}

module.exports = nextConfig
