<template>
  <div class="app">
    <div class="app-container">
      <Hero />
      <SectionPremiumListings />
      <SectionRecentlyAdded class="app-background-grey" :homes="homes" />
      <SectionMore />
    </div>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'Homepage',
    meta: [
      {
        name: 'description',
        content: 'This is homepage!',
        hid: 'description',
      },
    ],
  }),

  computed: {
    device() {
      return this.$store.getters['device/getDevice'];
    },
  },

  async asyncData({ $dataApi, error }) {
    const response = await $dataApi.getHomes();

    if (!response.ok) {
      return error({
        statusCode: response.status,
        message: response.statusText,
      });
    }

    return {
      homes: response.json.hits.slice(0, 5),
    };
  },
};
</script>
