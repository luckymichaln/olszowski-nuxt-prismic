<template>
  <prismic-link
    class="home-row-image"
    :field="data.project"
    :style="{width: `${data.cover_width}%`, marginLeft: `${data.offset_left}%`, marginTop: `${data.offset_top}%`}"

  >
    <img
      :src="data.cover_sd.url"
      :srcset="`${data.cover_sd.url} 1x, ${data.cover_hd.url} 2x`"
    />
  </prismic-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    setPagePosition: Function,
  }
}
</script>