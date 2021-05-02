const PrismicConfig = require('./prismic.config');
// const Prismic = require('prismic-javascript');

export default {
  assetsSubDirectory: '/static',
  assetsPublicPath: '/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'olszowski-nuxt-prismic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/prismic',
    'nuxt-lazy-load',
  ],

  prismic: {
    endpoint: PrismicConfig.apiEndpoint,
    apiOptions: {
      access_token: PrismicConfig.token,
    },
  },

  // generate: {
  // async routes() {
  // const client = Prismic.client(PrismicConfig.apiEndpoint, { accessToken: PrismicConfig.token })
  // const servicePages = Prismic.Predicates.at('document.type', 'service_page')
  // const projectPages = Prismic.Predicates.at('document.type', 'projects_single')
  // const serviceResponse = await client.query(servicePages)
  // const projectResponse = await client.query(projectPages)
  // /*logger.info('hi there. response=', response)*/

  // const allServicesRoutes = serviceResponse.results.map(el => `/services/${el.uid}/`)
  // const allProjectRoutes = projectResponse.results.map(el => `/projects/${el.uid}/`)
  // return [...allServicesRoutes, ...allProjectRoutes]
  // }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
