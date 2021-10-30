<template>
  <div>
    <p>{{ label }} / {{ lat }} / {{ lng }}</p>
    
    <ul>
      <li v-for="home in homes" :key="home.objectID">
        {{ home.title}} <br />
        {{home.type}}
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    watchQuery: ['lat'],

      async beforeRouteUpdate(to, from, next) {
        const data = await this.$dataApi.getoHomeByLocation(to.query.lat, to.query.lng)
        this.homes = data.json.hits
        this.label = to.query.label
        this.lat = to.query.lat
        this.lng = to.query.lng
        next()
      },

    async asyncData({query, $dataApi}) {
      const data = await $dataApi.getoHomeByLocation(query.lat, query.lng)
      return {
        homes: data.json.hits,
        label: query.label,
        lat: query.lat,
        lng: query.lng,
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>