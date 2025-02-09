/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'kk', 'en'],
    localeDetection: true
  },
  images: {
    domains: ['picsum.photos'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = nextConfig
