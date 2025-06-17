const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@splinetool/react-spline$": join(
        __dirname,
        "node_modules/@splinetool/react-spline/dist/react-spline.js"
      ),
    };
    return config;
  },
};

module.exports = nextConfig;
