<template>
  <div class="app-background-grey">
    <div class="app-wrapper">
      <div class="app-double-column">
        <div class="app-padded-vertical">
          <h2 class="app-subtitle">Description</h2>
          <div class="app-description">{{home.description}}</div>
        </div>
        <div class="app-padded-vertical">
          <div v-for="(feature, index) in home.features" :key="index" class="app-tag">
            {{ feature }}
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      home: {
        typ: Object,
        required: true
      }
    }
  }
</script>