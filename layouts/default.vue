<template>
  <div>
    <header style="background-color: #eee;">
      <nuxt-link to="/">Home</nuxt-link>
      <input type="text" ref="citySearch" @changed="changed">
    </header>
    <nuxt />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$maps.makeAutoComplete(this.$refs.citySearch)
    },

    methods: {
      changed(event) {
        const place = event.detail

        if(!place.geometry) return

        this.$router.push({
          name: 'search',
          query: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            label: this.$refs.citySearch.value
          }
        })
      }
    },
  }
</script>