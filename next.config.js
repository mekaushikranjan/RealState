/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
    domains: ['images.unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/realstate' : '',  // Add your repository name here
}

module.exports = nextConfig 