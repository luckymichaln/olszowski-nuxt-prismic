<template>
  <section class="home-row">
    <homeRowImage
      v-for="image in data"
      :key="image.project.id"
      :data="image"
    />
  </section>
</template>

<script>
import homeRowImage from '~/components/home/home-row-image'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  mounted () {
    console.log(this.data, 'data home row')
  }
}
</script>

<style lang="scss">
  .home-row {
    display: flex;
    flex-flow: nowrap;
  }
</style>