<template>
  <prismic-link
    :field="data.project"
    :style="{width: `${data.cover_width}%`, marginLeft: `${data.offset_left}%`, marginTop: `${data.offset_top}%`}"
    class="home-row-image"
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
  },

  methods: {
    srcSet(url, urlRetina) {
      const u = url.split('?')[0]
      const uR = urlRetina.split('?')[0]

      return `${u} 1x, ${uR} 2x`
    }
  },

  mounted() {
    console.log(this.data, 'data home row image')
  }
}
</script>

<style lang="scss">
.home-row-image {
  img {
    width: 100%;;
  }
}
</style>