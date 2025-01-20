/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '/UAsite', // Replace with your repository name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 