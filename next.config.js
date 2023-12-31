/** @type {import('next').NextConfig} */
const withImages = require('next-images'); //Image를 사용할 때 필요! _ 안 쓰면 엔박남

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      loader: 'babel-loader'
    });
    return config;
  },
};

module.exports = nextConfig;
module.exports = withImages();
