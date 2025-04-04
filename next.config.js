/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  reactStrictMode: true,
  trailingSlash: true, // Ensures pages export with trailing slash (about/index.html)
};

module.exports = nextConfig;
