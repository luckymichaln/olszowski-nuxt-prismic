<template>
  <prismic-link
    class="home-row-image"
    :field="data.project"
    :style="{width: `${data.cover_width}%`, marginLeft: `${data.offset_left}%`, marginTop: `${data.offset_top}%`}"
  >
    <img
      :src="data.cover_image.url"
      :srcset="`${data.cover_image.url} 1x, ${data.cover_image.retina.url} 2x`"
    />
  </prismic-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.home-row-image {
  display: flex;
  height: 100%;

  img {
    width: 100%;;
  }
}
</style>