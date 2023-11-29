/** @type {import('next').NextConfig} */
const withImages = require('next-images'); //Image를 사용할 때 필요! _ 안 쓰면 엔박남

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      loader: 'file-loader',
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
module.exports = withImages();
