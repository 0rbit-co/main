const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

module.exports = {
  ...withNextra,
  assetPrefix: "./",
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true // Required for static export
  }
}
