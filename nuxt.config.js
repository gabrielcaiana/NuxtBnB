export default {
  components: true,

  head: {
    titleTemplate: "NuxtBnB : %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ['my-style']
    },
    meta: [{
      charset: "utf-8"
    }],
  },

  router: {
    prefetchLinks: false
  },

  plugins: ['@/plugins/maps.client'],
  
  build: {
    extractCSS: true,
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
