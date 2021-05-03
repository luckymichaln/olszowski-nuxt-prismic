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
    console.log(this.pagePosition, 'pagePosition')
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
      console.log(position, 'positionposition')
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
@import '~/assets/styles/variables/layout';

.home-page {
  padding-top: $page-padding-top;
}
</style>