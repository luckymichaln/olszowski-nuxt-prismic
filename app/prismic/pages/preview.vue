<template>
  <p>Loading...</p>
</template>

<script>
export default {
  mounted() {
    this.$prismic.preview()
  }
}
</script>
