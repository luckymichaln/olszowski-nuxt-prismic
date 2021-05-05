<template>
  <prismic-link
    class="home-row-image"
    :field="data.project"
    :style="{width: `${data.cover_width}%`, marginLeft: `${data.offset_left}%`, marginTop: `${data.offset_top}%`}"
    @mousedown.native="setPagePosition"
  >
    <img
      :src="data.cover_sd.url"
      :srcset="`${data.cover_sd.url} 1x, ${data.cover_hd.url} 2x`"
    />
    <div
      v-if="data.hovers"
      class="home-row-image__hovers"
      @mouseenter="manageHovers(hoverInterval)"
      @mouseleave="resetInterval"
      ref="hovers"
    >
      <img
        v-for="img in data.hovers"
        :key="img.url"
        :src="img.url"
      />
    </div>
  </prismic-link>
</template>

<script>
export default {
  data() {
    return {
      intervalId: null,
      intervalImages: null,
      intervalIndex: 5,
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },

    setPagePosition: Function,

    hoverInterval: {
      type: Number,
      default: null
    },
  },

  mounted() {
    if (this.data.hovers) {
      this.intervalImages = this.$refs.hovers.children
    }
  },

  methods: {
    manageHovers(int) {
      this.intervalImages[0].style.zIndex = '10'
      setTimeout(() => {
        Array(this.intervalImages)[0].forEach(el => el.style.visibility = 'visible')
      }, 5);

      let i = 1
      let zI = 11
      this.intervalId = setInterval(() => {
        if (i >= this.intervalImages.length) { i = 0 }

        this.intervalImages[i].style.zIndex = `${zI}`;
        i++
        zI++
      }, int)
    },

    resetInterval() {
      clearInterval(this.intervalId)
      const images = this.$refs.hovers.children;
      Array(images)[0].forEach(el => {
        el.style.visibility = 'hidden'
        el.style.zIndex = this.intervalIndex
      })
    }
  }
}
</script>

<style lang="scss">
.home-row-image {
  position: relative;

  &__hovers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
      visibility: hidden;
    }
  }
}
</style>