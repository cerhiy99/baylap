/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },

  images: {
    domains: ['localhost']
  }

  // інші налаштування...
}

module.exports = nextConfig
