/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'standalone',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'babel-plugin-styled-components',
        libraryDirectory: 'es',
        style: true
      }
    ],
    ['styled-components', { ssr: true }]
  ]
}

module.exports = nextConfig
