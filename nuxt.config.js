export default {
  head: {
    titleTemplate: 'NuxtBnB : %s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
    ],
  },

  router: {
    prefetchLinks: false,
  },

  plugins: ['@/plugins/maps.client', '@/plugins/dataApi', '@/plugins/auth.client'],

  modules: ['@/modules/auth', '@/modules/algolia' ],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/dotenv'],

  css: ['@/assets/sass/app.scss'],

  components: [{ path: '@/components', pathPrefix: false }],
  
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },

  router: {
    middleware: ['mobile']
  },

  publicRuntimeConfig: {
    rootUrl: process.env.NODE_ENV === 'production' ? 'nuxtbnb.gabrielcaiana.vercel.app' : 'http://localhost:3000',
    auth: {
      cookieName: 'idToken',
      clientId: '910129429438-1ud3l6t6cplbp3pit1rvk896je2itqtd.apps.googleusercontent.com'
    },
    algolia: {
      appId: 'GQFVRWZZKC',
      apiKey: '70cc5e3e3d95236576a2465f103065dc'
    }
  },
  
  privateRuntimeConfig: {
    algolia: {
      appId: 'GQFVRWZZKC',
      apiKey: '7dbce04a324a5e3fa200e27dffddfc5a'
    }
  }
};
