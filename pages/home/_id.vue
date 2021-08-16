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
import homes from '@/data/homes';
export default {
  layout: 'red',
  head() {
    return {
      title: this.home.title,
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDuHhQv10LzPxrDla3XGZSB4Uc3RgaH0BY&libraries=places"`,
          hid: 'map',
          defer: true
        },
      ],
    };
  },

  data: () => ({
    home: {}
  }),

  mounted() {
    const position = new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng)

    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true,
      zoomControl: true
    }

    const map = new window.google.maps.Map(this.$refs.map, mapOptions)
    const marker = new window.google.maps.Marker({ position })
    marker.setMap(map)
  },

  created() {
    this.home = homes.find((home) => home.objectID === this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>
