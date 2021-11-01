<template>
  <div class="app">
    <div class="app-container">
      <div class="app-hero">
        <h2>
          - Settle in somewhere new. Discover stays to live, work, or just
          relax.
        </h2>
      </div>
    </div>
    <SectionPremiumListings />
    <SectionRecentlyAdded class="app-background-grey" :homes="homes" />
    <SectionMore />
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
<style lang="scss" scoped></style>
