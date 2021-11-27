export default {
  rootUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://nuxtbnb.gabrielcaiana.vercel.app'
      : 'http://localhost:3000',
  components: true,

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

  modules: ['@nuxtjs/dotenv', '@/modules/auth', '@/modules/algolia' ],

  buildModules: ['@nuxtjs/tailwindcss'],

  css: ['@/assets/sass/app.scss'],
  
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
    auth: {
      cookieName: 'idToken',
      clientId: process.env.CLIENT_ID
    },
    algolia: {
      appId: process.env.APP_ID,
      apiKey: process.env.API_KEY
    }
  },
  
  privateRuntimeConfig: {
    algolia: {
      appId: process.env.APP_ID,
      apiKey: process.env.SERVER_SIDE_API_KEY
    }
  }
};
