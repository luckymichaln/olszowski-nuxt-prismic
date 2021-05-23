<template>
  <div
    class="home-page"
    :style="{ paddingTop: `${data.offset_top}%` }"
  >
    <nav class="nav">
      <p class="logo">Tomek Olszowski</p>
      <div class="nav__link-wrapper">
        <nuxt-link
          to="/contact"
          @mousedown.native="setPagePosition"
        >
          <div class="wrapper-inner wrapper-inner--arrow">
            <span>
              {{ data.nav_label }}
            </span>
            <svg width="173" height="111" xmlns="http://www.w3.org/2000/svg" id="arrow">
              <g>
                <line transform="rotate(45 187.493 46.7574)" stroke="currentColor" stroke-width="25" id="svg_6" y2="46.75739" x2="239.69642" y1="46.75739" x1="135.28954" fill="none"/>
                <line stroke="currentColor" stroke-width="25" id="svg_3" y2="74.87087" x2="213.4426" y1="74.87087" x1="0.78523" fill="none"/>
                <line transform="rotate(-45 187.448 102.946)" stroke="currentColor" stroke-width="25" id="svg_5" y2="102.94626" x2="239.76579" y1="102.94626" x1="135.13134" fill="none"/>
              </g>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </nav>
    <div>
      <homeRow
        v-for="(row, i) in data.body"
        :key="i"
        :data="row"
        :setPagePosition="setPagePosition"
      />
    </div>
    <socialNav class="arrows-main" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import homeRow from '~/components/home/home-row'
import socialNav from '~/components/social/social-nav'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
  },

  mounted() {
    document.getElementsByTagName("body")[0].style.opacity = 0;
    this.setActiveSessionPosition();

    setTimeout(() => {
      document.getElementsByTagName("body")[0].style.opacity = 1;
    }, 70);
  },

  computed: {
    ...mapGetters('pages', ['pagePosition'])
  },

  methods: {
    setPagePosition() {
      let position = window.scrollY;
      this.$store.commit("pages/SET_PAGE_POSITION", { data: position });
    },

    setActiveSessionPosition() {
      let body = document.getElementsByTagName("body")[0];
      let height = `${this.pagePosition}`;
      let pageHeight = parseInt(height) + 1000;

      if (this.pagePosition) {
        body.style.height = `${pageHeight}px`;

        setTimeout(() => {
          window.scrollTo(0, this.pagePosition);
        }, 30);

        setTimeout(() => {
          body.style.height = "auto";
        }, 200);
      }
    }
  },
}
</script>

<style lang="scss">
.home-page .nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .wrapper-inner--arrow svg {
    transform: rotate(0deg) scale(0.74);
    left: -27px;
  }
}
</style>