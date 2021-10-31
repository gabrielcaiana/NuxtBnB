<template>
  <div class="app-search">
    <input
      type="text"
      ref="citySearch"
      @changed="changed"
      placeholder="Enter your adress"
    />
    <input type="text" class="datepicker" placeholder="Check in " />
    <input type="text" class="datepicker" placeholder="Check out " />
    <button>
      <img src="/images/icons/search.svg" alt="search" />
    </button>
  </div>
</template>

<script>
export default {};
</script>
