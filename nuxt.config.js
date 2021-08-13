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
  build: {
    extractCSS: true,
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
