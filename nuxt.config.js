export default {
  rootUrl: process.env.NODE_ENV === "production" ? 'https://nuxtbnb.gabrielcaiana.vercel.app' : 'http://localhost:3000',
  components: true,

  head: {
    titleTemplate: "NuxtBnB : %s",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{
      charset: "utf-8"
    }],
  },

  router: {
    prefetchLinks: false
  },

  plugins: ['@/plugins/maps.client', '@/plugins/dataApi'],

  modules: ['@nuxtjs/dotenv'],

  buildModules: ['@nuxtjs/tailwindcss'],
  
  build: {
    extractCSS: true,
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
