<template>
  <div>
    <template v-if="!isMobile">
      <Header />
      <nuxt />
    </template>
    <template v-else>
      <Mobile /> 
    </template>
  </div>
</template>

<script>
import Mobile from "./mobile.vue"
  export default {
    components: { Mobile },

    computed: {
      isMobile() {
        return this.$store.state.device.isMobile;
      }
    },
}
</script>