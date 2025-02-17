import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.lenta.ru',
      },
      {
        protocol: 'https',
        hostname: '**.gazeta.ru',
      },
      {
        protocol: 'https',
        hostname: '**.mk.ru',
      },
      {
        protocol: 'https',
        hostname: '**.icdn.ru',
      },
      // Добавьте другие домены по мере необходимости
    ],
  },
}

export default nextConfig;
