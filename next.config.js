/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'default', 
    formats: ['image/avif', 'image/webp'], 
  },
};

module.exports = nextConfig;