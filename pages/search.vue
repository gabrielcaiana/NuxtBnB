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