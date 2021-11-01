<template>
  <div class="app-padded-vertical">
    <div class="app-wrapper">
      <h2 class="app-title">Premium Listings</h2>
      <div class="app-gallery">
        <nuxt-link
          :to="listing.url"
          v-for="(listing, index) in listings"
          :key="index"
          class="app-gallery-item"
          :class="`city-${listing.id}`">
          <div>
            <h3>{{ listing.city }}</h3>
            <p>{{ listing.country }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const listings = [
  { id: 'paris', city: 'Paris', country: 'France', url: '/search?lat=48.856614&lng=2.3522219&label=Paris,%20France' },
  { id: 'new-york', city: 'New York', country: 'USA', url:'/search?lat=40.7127753&lng=-74.0059728&label=New%20York,%20USA' },
  { id: 'london', city: 'London', country: 'UK', url: '/search?lat=51.5073509&lng=-0.1277583&label=London,%20UK' },
  { id: 'dubai', city: 'Dubai', country: 'UAE', url: '/search?lat=25.2048493&lng=55.2707828&label=Dubai%20-%20United%20Arab%20Emirates' }
]
export default {
  data () {
    return { listings }
  }
}
</script>