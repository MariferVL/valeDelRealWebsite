/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
  },
  trailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Realiza cambios personalizados en la configuración de Webpack aquí

    // Importante: devuelve la configuración modificada
    return config;
  },
};

module.exports = nextConfig;
