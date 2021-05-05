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
          {{ data.nav_label }}
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
    <socialNav />
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
    console.log(this.data,'lsa')
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

  &__link-wrapper {
    position: relative;

    &:hover {
      a {
        opacity: 0;
      }

      &::before {
        content: '';
        position: absolute;
        top: -37px;
        left: 0;
        width: 100%;
        height: 111px;
        background: url('~/assets/icons/to_arrow.svg') center center;
        background-size: cover;
      }
    }
  }
}
</style>