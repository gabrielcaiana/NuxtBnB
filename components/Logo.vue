<template>
  <div class="app-logo">
    <nuxt-link to="/">
      <img :width="size" src="/images/logo.svg" alt="logo" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    size: String
  }
};
</script>
