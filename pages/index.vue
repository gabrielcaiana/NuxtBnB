<template>
  <div>
    <div v-for="home in homes" :key="home.objectID" style="float:left; margin: 10px">
      <nuxt-link :to="`/home/${home.objectID}`"><HomeCard :home="home" /></nuxt-link>
    </div>
  </div>
</template>

<script>
import homes from '@/data/homes'
  export default {
    head:() => ({
      title: "Homepage",
      meta: [{
        name: "description",
        content: "This is homepage!",
        hid: "description"
      }]
    }),

    data:() => ({
      homes: homes.slice(0,3)
    })
  }
</script>
<style lang="scss" scoped>

</style>