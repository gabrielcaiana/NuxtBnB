<template>
  <div class="app-search">
    <input
      type="text"
      ref="citySearch"
      @changed="changed"
      placeholder="Enter your adress"
    />
    <input type="text" class="datepicker" placeholder="Check in " />
    <input type="text" class="datepicker" placeholder="Check out " />
    <button>
      <img src="/images/icons/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$maps.makeAutoComplete(this.$refs.citySearch);
  },

  methods: {
    changed(event) {
      const place = event.detail;

      if (!place.geometry) return;

      this.$router.push({
        name: 'search',
        query: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          label: this.$refs.citySearch.value,
        },
      });
    },
  },
};
</script>
