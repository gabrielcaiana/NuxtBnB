<template>
  <div>
    <img :src="home.images[0]" :alt="home.title" style="width: 200px" /><br />
    {{ home.title }}<br />
    {{ home.location.adress }} {{ home.location.city }} {{ home.location.state
    }}<br />
    {{ home.guests }} guests <br />
    {{ home.pricePerNight }} / night<br />
  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Object,
      required: true
    }
  }
};
</script>
