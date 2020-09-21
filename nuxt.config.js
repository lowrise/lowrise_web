export default {
  target: 'static',
  head: {
    title: 'lowrise_web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // './assets/styles/index'
  ],
  styleResources: {
    scss: ['./assets/styles/index.scss'],
  },
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
  ],
  build: {
    publicPath: '/_static/',
    extractCSS: true,
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[name]_[local]__[hash:base64:4]',
        },
      },
    },
  }
}
