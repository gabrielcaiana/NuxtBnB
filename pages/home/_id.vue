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
    <div v-for="review in reviews" :key="review.objectID">
      <img
        :src="review.reviewer.image"
        :title="review.reviewer.name"
        :alt="review.reviewer.name"
      /><br />
      {{ review.reviewer.name }} <br />
      {{ formatDate(review.date) }} <br />
      <ShortText :text="review.comment" :target="150" />
    </div>

    <img :src="user.image" :alt="user.name"><br/>
    {{ user.name }} <br />
    {{ formatDate(user.joined) }}<br />
    {{ user.reviewCount}} <br />
    {{ user.description }}<br />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title,
    };
  },

  async asyncData({ params, $dataApi, error }) {
    const homeResponse = await $dataApi.getHome(params.id);
    if (!homeResponse.ok) {
      return error({
        statusCode: homeResponse.status,
        message: homeResponse.statusText,
      });
    }

    const reviewsResponse = await $dataApi.getReviewsByHomeId(params.id);
    if (!reviewsResponse.ok) {
      return error({
        statusCode: reviewsResponse.status,
        message: reviewsResponse.statusText,
      });
    }

    const userResponse = await $dataApi.getUserByHomeId(params.id);
    if (!userResponse.ok) {
      return error({
        statusCode: userResponse.status,
        message: userResponse.statusText,
      });
    }

    return {
      home: homeResponse.json,
      reviews: reviewsResponse.json.hits,
      user: userResponse.json.hits[0]
    };
  },

  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.home._geoloc.lat,
      this.home._geoloc.lng
    );
  },

  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);

      return date.toLocaleDateString(undefined, {
        month: `long`,
        year: `numeric`,
      });
    },
  },
};
</script>
