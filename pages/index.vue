<template>
  <div>
    <div v-for="home in homes" :key="home.objectID" style="float:left; margin: 10px">
      <nuxt-link :to="`/home/${home.objectID}`"><HomeCard :home="home" /></nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    head:() => ({
      title: "Homepage",
      meta: [{
        name: "description",
        content: "This is homepage!",
        hid: "description"
      }]
    }),

  async asyncData({ $dataApi, error }) {
      const response = await $dataApi.getHomes()

      if(!response.ok) {
        return error({
          statusCode: response.status,
          message: response.statusText
        })
      }

      return {
        homes: response.json.hits.slice(0,5)
      }
    } 
  }
</script>
<style lang="scss" scoped>

</style>