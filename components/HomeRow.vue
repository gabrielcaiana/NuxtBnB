<template>
  <div style="clear:left;">
    <img :src="home.images[0]" :alt="home.title" style="width: 200px; float: left; padding: 10px;" /><br />
    {{ home.title }}<br />
    {{ home.location.adress }} {{ home.location.city }} {{ home.location.state}} <br />
    {{ pluralize(home.guests, "guest") }},
    {{ pluralize(home.bedrooms, "room") }},
    {{ pluralize(home.beds, "bed")}},
    {{ pluralize(home.bathrooms, "room")}} <br />
    {{ home.pricePerNight }} / night <br />
    <img src="/images/star.svg" width="20" height="20" /> 
    ({{ home.reviewCount }})
  </div>
</template>

<script>
import pluralize from "@/utils/pluralize"

export default {
  props: {
    home: {
      type: Object,
      required: true
    }
  },

  methods:{
    pluralize
  }
};
</script>
