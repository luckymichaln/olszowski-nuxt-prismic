<template>
  <div
    class="home-page arrows-main"
    :style="{ paddingTop: `${data.offset_top}%` }"
  >
    <nav class="nav">
      <prismic-rich-text
        class="logo"
        :field="navigationText.logotype_text"
      />
      <div class="nav__link-wrapper">
        <nuxt-link
          to="/contact"
          @mousedown.native="setPagePosition"
        >
          <div class="wrapper-inner wrapper-inner--arrow arrow--next">
            <prismic-rich-text :field="data.nav_label" />
            <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow">
              <rect x="2.39999" y="9.35562" width="29.6" height="3.2" fill="currentColor"/>
              <rect x="2.26276" y="8.55563" width="14.4" height="3.2" transform="rotate(45 2.26276 8.55563)" fill="currentColor"/>
              <rect x="12.4451" y="2.81836" width="14.4" height="3.2" transform="rotate(135 12.4451 2.81836)" fill="currentColor"/>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </nav>
    <main class="home-page__main">
      <homeRow
        v-for="(row, i) in data.body"
        :key="i"
        :data="row"
        :setPagePosition="setPagePosition"
      />
    </main>
    <socialNav class="arrows-main" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import homeRow from '~/components/homev2/home-row'
import socialNav from '~/components/socialv2/social-nav-v2'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },

    location: null,
  },

  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Tomek Olszowski | Photographer'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Photographer born and based in Cracow, Poland. Tomek graduated from Architecture in 2005, but after a couple of years it became clear that it wasn’t entirely his cup of tea. As the visual side of the projects was always more interesting to him, he started exploring graphics by post graduating from Digital Graphics. In the meantime Tomek discovered automotive photography and started doing test shots in 2009. His enthusiasm for cars drove him to intensely push and discover new passion. During the following years Tomek shot many personal projects crafting location, studio and partly CGI techniques along with postproduction. In 2011 he printed his first portfolio book.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://images.prismic.io/toshootingcarsv2/276a3b51-207f-4370-ba79-e8b65b5a271d_TomekOlszowski+Porsche_718_5.jpg?auto=compress,format'
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'https://images.prismic.io/toshootingcarsv2/276a3b51-207f-4370-ba79-e8b65b5a271d_TomekOlszowski+Porsche_718_5.jpg?auto=compress,format'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Porsche Cayman GTS'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://gracious-hoover-e9dca2.netlify.app'
        }
      ]
    }
  },

  beforeMount() {
    this.body = document.getElementsByTagName('body')[0];
    this.body.style.backgroundColor = this.data.background_color;
    this.body.style.color = this.data.text_color;
  },

  mounted() {
    document.getElementsByTagName("body")[0].style.opacity = 0;
    this.setActiveSessionPosition();

    setTimeout(() => {
      document.getElementsByTagName("body")[0].style.opacity = 1;
    }, 70);
  },

  computed: {
    ...mapGetters('pages', ['pagePosition', 'navigationText']),
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
        console.log(this.pagePosition, 'this.pagePosition')
        body.style.height = `${pageHeight}px`;
        console.log(this.pagePosition, 'this.pagePosition')

        setTimeout(() => {
          window.scrollTo(0, this.pagePosition);
        }, 50);

        setTimeout(() => {
          body.style.height = "auto";
        }, 1500);
      }
    },
  },

  components: {
    homeRow,
    socialNav
  }
}
</script>

<style lang="scss">
.home-page .nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>