<template>
  <div class="app-padded-vertical px-10">
    <div class="app-wrapper">
      <div class="app-carousel">
        <div class="app-carousel-header">
          <h2>Recently Added</h2>
        </div>
        <div class="app-carousel-items">
          <nuxt-link
          :to="`/home/${home.objectID}/`"
            v-for="(home, index) in homes"
            :key="index"
            class="app-house">
            <div class="app-house-header">
              <img :src="home.images[0]" width="360" height="175" provider="cloudinary"/>
            </div>
            <div class="app-house-body">
              <div class="app-rating">
                {{ home.reviewValue }}
                <span>({{ home.reviewCount }})</span>
              </div>
              <h2>{{ home.title }}</h2>
              <div class="app-address">
                {{ home.address }}
              </div>
              <div class="app-price">
                ${{ home.pricePerNight }}
                <span>/ night</span>
              </div>
              <div class="app-house-footer">
                <img src="/images/icons/house-blue.svg" width="16px">
                <div class="app-house-guests">
                  {{ home.guests }} guests
                </div>
              </div>
            </div>
          </nuxt-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    homes: {
      type: Array,
      default: []
    }
  }
}
</script>