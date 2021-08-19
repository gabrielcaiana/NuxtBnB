<template>
  <div>
    <div style="display:flex;">
      <img
        v-for="(image, index) in home.images"
        :key="index"
        :src="image"
        alt="somenthing descriptive..."
        width="200"
        height="150"
      />
    </div>
    {{ home.title }}<br />
    ${{ home.pricePerNight }}<br />
    <img src="/images/marker.svg" width="20" height="20" />{{
      home.location.address
    }}
    {{ home.location.city }} {{ home.location.state }} {{ home.location.country
    }}<br />
    <img src="/images/star.svg" width="20" height="20" />{{ home.reviewValue }}
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
    {{ home.bathrooms }} bath<br />
    <div style="width: 800px; height:800px;" ref="map"></div>
  </div>
</template>

<script>

export default {
  layout: 'red',
  head() {
    return {
      title: this.home.title
    };
  },

  async asyncData({ params, $dataApi }) {
    const response = await $dataApi.getHome(params.id)
    debugger
    return {
      home: response.json
    }
  },

  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  },
};
</script>

<style lang="scss" scoped></style>
