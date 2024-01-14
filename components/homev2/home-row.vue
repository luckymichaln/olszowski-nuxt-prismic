<template>
  <section class="home-row">
    <homeRowImageCopy
      v-for="(image, index) in data"
      :key="image.project.id + index"
      :data="image"
      :hoverInterval="image.hover_interval"
      :setPagePosition="setPagePosition"
    />
  </section>
</template>

<script>
import homeRowImageCopy from '~/components/home/home-row-image-copy'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },

    setPagePosition: Function
  },

  components: {
    homeRowImageCopy
  }
}
</script>

<style lang="scss">
  .home-row {
    display: flex;
    flex-flow: nowrap;
    line-height: 0;

    @media (max-width: 767px) {
      flex-wrap: wrap;

      &-image {
        margin-top: 30px !important;
      }

      &:first-child .home-row-image:first-child {
        margin-top: 0 !important;
      }
    }
  }
</style>