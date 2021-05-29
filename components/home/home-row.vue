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
}
</script>

<style lang="scss">
  .home-row {
    display: flex;
    flex-flow: nowrap;
    line-height: 0;

    @media (max-width: 767px) {
      flex-wrap: wrap;

      &:not(:first-child) .home-row-image {
        margin-top: 30px !important;
      }
    }
  }
</style>