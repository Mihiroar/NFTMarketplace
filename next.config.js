/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: "",
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === 'phase-production-build') {
    // Add production-specific configurations here
    // For example, you might want to set assetPrefix for CDN deployment
    // defaultConfig.assetPrefix = 'https://cdn.example.com/';
  }

  return nextConfig;
};

