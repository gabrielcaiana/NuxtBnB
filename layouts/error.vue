<template>
  <div class="flex flex-col items-center justify-center">
    <img
      src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=ecf05e471vkmmgcyp41ti443gy7a0qryafj1mh7i473zjs8m&rid=giphy.gif&ct=g"
      alt="error 404"
      class="w-2/6"
    />
    <h1>Ooooops!</h1>
    <p>{{ error.message }} {{ error.statusCode }}</p>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'big problems!',
  }),
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
