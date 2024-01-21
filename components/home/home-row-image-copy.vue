<template>
  <span
    :style="{
      width: `${data.cover_width}%`,
      marginLeft: `${data.offset_left}%`,
      marginTop: `${data.offset_top}vw`
    }"
    class="home-row-image-box"
    @mousedown="setPagePosition"
  >
    <prismic-link
      :class="{
        'home-row-image': true,
        'home-row-image--mobile': data.project.uid
      }"
      :field="data.project"
      :style="{
        pointerEvents: data.project.uid ? 'all' : 'none'
      }"
    >
      <span
        v-if="data.project.uid"
        class="home-row-image-link-icon"
      >
        +
      </span>
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
          :src="`${img.url}&q=100`"
        />
      </div>
    </prismic-link>
  </span>
</template>

<script>
import about from '../about/about.vue';

export default {
  components: { about },
  data() {
    return {
      intervalId: null,
      intervalImages: null,
      intervalIndex: 10,
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
    if (this.$refs.hovers) {
      this.$refs.hovers.addEventListener('contextmenu', ev => {
        if (ev.target.offsetParent.classList.contains('home-row-image__hovers')) {
          ev.preventDefault();
        }
      })
    }
    if (this.data.hovers && this.$refs.hovers && this.$refs.hovers.children) {
      this.intervalImages = this.$refs.hovers.children
    }
  },

  beforeDestroy() {
    this.intervalImages = null
  },

  methods: {
    manageHovers(int) {
      if (window.innerWidth >= 768) {
        const images = this.$refs.hovers;
        images.classList.remove('hidden');
        this.intervalImages[0].style.zIndex = '10'
        setTimeout(() => {
          Array(this.intervalImages)[0].forEach(el => el.style.visibility = 'visible')
        }, 15);

        let i = 1
        let zI = 11

        console.log(this.intervalImages.length, 'this.intervalImages.length')
        this.intervalId = setInterval(() => {
          if (this.intervalImages) {
            if (i >= this.intervalImages.length) { i = 0 }

            this.intervalImages[i].style.zIndex = `${zI}`;
            i++
            zI++
          }
        }, int)
      }
    },

    resetInterval() {
      if (window.innerWidth >= 768) {
        clearInterval(this.intervalId)
        if (this.$refs.hovers) {
          const imagesParent = this.$refs.hovers;
          const images = imagesParent.children;
          imagesParent.classList.add('hidden');
          setTimeout(() => {
            Array(images)[0].forEach(el => {
              el.style.visibility = 'hidden'
              el.style.zIndex = this.intervalIndex
            })
          }, 10);
        }
      }
    }
  },

  components: {
    about,
  }
}
</script>

<style lang="scss">
.home-row-image-box {
  @media (max-width: 767px) {
    width: 100% !important;
    margin-left: 0 !important;
  }
}
.home-row-image {
  position: relative;
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  min-height: 50px;

  &:not(.home-row-image--mobile) {
    display: none;

    @media (min-width: 767px) {
      display: block;
    }
  }

  &-link-icon {
    position: absolute;
    right: 17px;
    bottom: 28px;
    font-size: 50px;
    color: #f5f5f5;
    z-index: 9999;
    cursor: inherit;
    pointer-events: none;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__hovers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.hidden img {
      visibility: hidden !important;
    }

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