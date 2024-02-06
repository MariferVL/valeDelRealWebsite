/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000', 
          },
        ],
      },
      {
        source: '/_next/static/:path*', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000', 
          },
        ],
      },
      {
        source: '/videos/:path*', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000', 
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
