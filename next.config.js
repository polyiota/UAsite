/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static site generation
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 