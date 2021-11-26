<template>
  <div class="app-user-menu">
    <div v-show="isLoggedIn">
      <div class="relative flex items-center cursor-pointer"  @click="onDropDown">
         <img src="/images/icons/house.svg" alt="house" />
      <div class="name mt-1">{{ user.fullName }}</div>
      <img :src="user.profileURL" class="avatar" :alt="user.fullName" />

      <div
        v-if="dropdown"
        class="absolute right-0 top-10 mt-2 py-2 w-32 bg-white rounded-md shadow-2xl z-20"
      >
        <a
          @click="logout"
          href="#"
          class="block px-4 py-2 text-sm  text-gray-700 hover:bg-blue-500 hover:text-white"
        >
          Logout
        </a>
      </div>
      </div>
    </div>
    <GoogleAuth v-show="!isLoggedIn"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },

  methods: {
    onDropDown() {
      this.dropdown = !this.dropdown;
    },

    logout() {
      this.$auth.signOut();
    }
  }
};
</script>
