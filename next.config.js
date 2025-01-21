/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure trailing slashes for static export
  trailingSlash: true,
}

module.exports = nextConfig 