<template>
  <div class="home-page">
    <nav class="nav">
      <nuxt-link
        to="/contact"
      >
        {{ data.nav_label }}
      </nuxt-link>
    </nav>
    <div>
      <homeRow
        v-for="(row, i) in data.body"
        :key="i"
        :data="row.items"
      />
    </div>
    <socialNav />
  </div>
</template>

<script>
import { mapGetters } from 'nuxt'
import homeRow from '~/components/home/home-row'
import socialNav from '~/components/social/social-nav'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
  },

  beforeMount() {
    // this.setTopPosition()
  },

  mounted() {
    // this.setActiveSessionPosition();
  },

  computed: {
    // ...mapGetters('pages', ['pagePosition'])
  },

  methods: {
    // setTopPosition() {
    //   if (!this.pagePosition) {
    //     window.scrollTo(0, 0);
    //   }
    // },

    // setActiveSessionPosition() {
    //   let body = document.getElementsByTagName('body')[0];
    //   let height = `${this.pagePosition}`;
    //   let pageHeight = parseInt(height) + 1000;

    //   if (this.pagePosition) {
    //     body.style.height = `${pageHeight}px`;
    //     body.style.overflow = 'hidden';

    //     window.scrollTo(0, this.pagePosition);

    //     setTimeout(() => {
    //       body.style.height = 'auto';
    //       body.style.overflow = 'visible';
    //     }, 1000);
    //   }
    // },

    // setPagePosition() {
    //   let position = window.scrollY;
    //   this.$store.commit("SET_PAGE_POSITION", { data: position });
    //   this.$store.commit("SET_PAGE_REDIRECT", { data: false });
    // },
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.home-page {
  padding-top: $page-padding-top;
}
</style>