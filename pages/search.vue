<template>
  <div>
    <p>Results for {{label}}</p>

    <div style="width: 800px; height:800px;float:right;" ref="map"></div>

    <div v-if="homes.length > 0">
      <nuxt-link v-for="home in homes" :key="home.objectID" :to="`/home/${home.objectID}`">
        <HomeRow :home="home" />
      </nuxt-link>
    </div>
    <div v-else>
      No results found!
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Homes around ${this.label}`,
    };
  },

  watchQuery: ['lat'],

  async beforeRouteUpdate(to, from, next) {
    const data = await this.$dataApi.getoHomeByLocation(
      to.query.lat,
      to.query.lng
    );
    this.homes = data.json.hits;
    this.label = to.query.label;
    this.lat = to.query.lat;
    this.lng = to.query.lng;
    this.updateMap()
    next();
  },

  async asyncData({ query, $dataApi }) {
    const data = await $dataApi.getoHomeByLocation(query.lat, query.lng);
    return {
      homes: data.json.hits,
      label: query.label,
      lat: query.lat,
      lng: query.lng,
    };
  },

  mounted() {
    this.updateMap()
  },

   methods: {
    updateMap() {
      this.$maps.showMap(this.$refs.map, this.lat, this.lng, this.getHomeMarkers());
    },

    getHomeMarkers() {
      return this.homes.map(home => {
        return {
          ...home._geoloc,
          pricePerNight: home.pricePerNight
        }
      })
    }
  },
};
</script>

<style lang="css">
  .marker {
    background-color: white;
    border: 1px solid lightgray;
    font-weight: bold;
    border-radius: 20px;
    padding: 5px 8px;
  }
</style>
