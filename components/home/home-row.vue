<template>
  <section class="home-row">
    <homeRowImage
      v-for="(image, index) in data"
      :key="image.project.id + index"
      :data="image"
      :hoverInterval="image.hover_interval"
      :setPagePosition="setPagePosition"
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
    },

    setPagePosition: Function
  },

  mounted() {
    console.log(this.data, 'dsd')
  }
}
</script>

<style lang="scss">
  .home-row {
    display: flex;
    flex-flow: nowrap;
    line-height: 0;
  }
</style>