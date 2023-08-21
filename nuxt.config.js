export default {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  target: 'static',
  head: {
    title: 'lowrise_web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' }
    ]
  },
  css: [
    '@/assets/styles/index',
  ],
  styleResources: {
    scss: ['@/assets/styles/index.scss'],
  },
  plugins: [
    '@/plugins/gtag',
    '@/plugins/contentful',
  ],
  components: true,
  modules: [],
  build: {
    publicPath: '/_static/',
    extractCSS: true,
    sassOptions: {
      fiber: false,
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[name]_[local]__[hash:base64:4]',
        },
      },
    },
  }
}
