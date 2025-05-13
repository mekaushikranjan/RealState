/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
    domains: ['images.unsplash.com'],
  },
  basePath: '/realstate',
  assetPrefix: '/realstate/',
  trailingSlash: true,
}

module.exports = nextConfig 