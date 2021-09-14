<template>
  <span>
    {{ displayText }}
    <button v-if="isTooLong && !isExpanded" @click="isExpanded = true" class="link" type="button">read more</button>
    <button v-if="isTooLong && isExpanded" @click="isExpanded = false" class="link" type="button">read less</button>
  </span>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      target: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        isExpanded: false,
        chunks: []
      }
    },

    computed: {
      isTooLong() {
        return this.chunks.length === 2
      },

      displayText() {
        if(!this.isTooLong || this.isExpanded) return this.chunks.join(' ')
        return  `${this.chunks[0]}...`
      }
    },

    created() {
      this.chunks = this.getChunks()
    },

    methods: {
      getChunks() {
        const position = this.text.indexOf(' ', this.target)
        if(this.text.length <= this.target || position === -1 ) return [this.text]
        return [this.text.substring(0, position), this.text.substring(position)]
      }
    }
  }
</script>

<style scoped>
.link {
  color: blue;
  background-color: #fff;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}

  .link:focus {
    border: none;
    outline: none;
  }
</style>