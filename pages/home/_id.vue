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
      >
    </div>
    {{ home.title }}<br />
    ${{home.pricePerNight}}<br />
    {{home.location.address}} {{ home.location.city}} {{home.location.state}} {{home.location.country}}<br />
    {{home.reviewValue}}
    {{home.guests}} guests, {{home.bedrooms}} rooms, {{home.beds}} beds, {{home.bathrooms}} bath<br />
  </div>
</template>

<script>
import homes from '@/data/homes'
  export default {
    data:() => ({
      home: {}
    }),
    created() {
      this.home = homes.find(home => home.objectID === this.$route.params.id)
      console.log(this.home)
    }
  }
</script>

<style lang="scss" scoped>

</style>