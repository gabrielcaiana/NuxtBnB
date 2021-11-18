<template>
  <div class="app-user-menu">
      <template v-if="isLoggedIn">
        <img src="/images/icons/house.svg" alt="house" />
        <div class="name">{{ user.fullName }}</div>
        <img :src="user.profileURL" class="avatar" :alt="user.fullName" />
      </template>
    <GoogleAuth v-show="!isLoggedIn" class="ml-4" />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user
    },

    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    }
  }
};
</script>
