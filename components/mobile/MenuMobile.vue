<template>
  <div
    class="px-7 bg-white rounded-2xl fixed bottom-0 w-screen py-4 shadow-2xl"
  >
    <div class="flex  text-2xl">
      <div v-for="(menu, index) in menus" :key="index" class="flex-1 group">
        <nuxt-link
          exact
          :to="menu.path"
          class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400"
        >
          <span class="block px-1 pt-1 pb-1">
            <i
              class="text-3xl pt-1 mb-1 block"
              :class="[`fas fa-${menu.icon}`]"
            ></i>
            <span class="block pb-2">{{ menu.name }}</span>
            <span
              class="block w-5 mx-auto h-1"
            ></span>
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: 'Home', icon: 'home', path: '/' },
        { name: 'Explore', icon: 'compass', path: '/explore' },
        { name: 'Search', icon: 'search', path: '/search' },
        { name: 'Settings', icon: 'cog', path: '/settings' },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);

.hover\:w-full:hover {
  width: 100%;
}
.group:hover .group-hover\:w-full {
  width: 100%;
}
.group:hover .group-hover\:inline-block {
  display: inline-block;
}
.group:hover .group-hover\:flex-grow {
  flex-grow: 1;
}
.nuxt-link-active {
    @apply text-indigo-500;
}
</style>
