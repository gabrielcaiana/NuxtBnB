<template>
  <div class="pa-4">
    Admin
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
  export default {
    asyncData( { $config, redirect }) {
      if(!Cookie.get($config.auth.cookieName)) {
        redirect('/no-access/')
        return;
      }
    },
  }
</script>