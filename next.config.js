/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.output.libraryTarget = "commonjs2";
    return config;
  },
};

module.exports = nextConfig;
