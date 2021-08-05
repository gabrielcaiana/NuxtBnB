<template>
  <div>
    <div v-for="home in homes" :key="home.objectID" style="float:left; margin: 10px">
      <HomeCard :home="home" />
    </div>
  </div>
</template>

<script>
import homes from '@/data/homes'
  export default {
    data:() => ({
      homes: homes.slice(0,3)
    })
  }
</script>
<style lang="scss" scoped>

</style>