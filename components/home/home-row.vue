<template>
  <section class="home-row">
    <homeRowImage
      v-for="(image, index) in data"
      :key="image.project.id + index"
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
    },
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