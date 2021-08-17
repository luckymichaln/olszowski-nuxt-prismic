<template>
  <section
    class="project-row"
    :style="{ marginBottom: `${data.primary.margin_bottom}%` }"
  >
    <div
      v-for="image in data.items"
      :key="image.image_sd.url"
      class="project-row-image"
      :style="{width: `${image.image_width}%`, marginLeft: `${image.offset_left}%`, marginTop: `${image.offset_top}%`}"
    >
      <img
        :src="image.image_sd.url"
        :srcset="`${image.image_sd.url} 1x, ${image.image_hd.url} 2x`"
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
  },
}
</script>

<style lang="scss">
  .project-row {
    display: flex;
    flex-wrap: nowrap;
    line-height: 0;
    min-height: 15px;

    @media (max-width: 767px) {
      margin-bottom: 0 !important;
      flex-wrap: wrap;

      .project-row-image {
        width: 100% !important;
        margin-left: 0 !important;
        margin-top: 30px !important;
      }

      &:first-of-type .project-row-image:first-child {
        margin-top: 0 !important;
      }
    }
  }
</style>