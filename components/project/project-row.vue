<template>
  <section class="project-row">
    <div
      v-for="image in data.items"
      :key="image.image.url"
      class="project-row-image"
      :style="{width: `${image.image_width}%`, marginLeft: `${image.offset_left}%`, marginTop: `${image.offset_top}%`}"
    >
      <img
        :src="image.image.url"
        :srcset="`${image.image.url} 1x, ${image.image.retina.url} 2x`"
      />
    </div>
  </section>
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
  .project-row {
    display: flex;
    flex-wrap: nowrap;
    line-height: 0;
  }
</style>