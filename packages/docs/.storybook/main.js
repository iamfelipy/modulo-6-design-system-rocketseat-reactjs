module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-controls',
    '@storybook/addon-a11y'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      // esse caminho não vai funcionar
      // precisar o mesmo nome do repositorio do github pages que o projeto esta
      // criei um repositorio so pra esse modulo para poder fazer o deploy
      config.base = '/05-design-system/'
    }

    return config
  }
}