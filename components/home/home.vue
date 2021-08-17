<template>
  <div
    class="home-page arrows-main"
    :style="{ paddingTop: `${data.offset_top}%` }"
  >
    <nav class="nav">
      <p class="logo">{{ navigationText.logotype_text }}</p>
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
import homeRow from '~/components/home/home-row'
import socialNav from '~/components/social/social-nav'

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

  .wrapper-inner--arrow svg {
    transform: rotate(0deg) scale(0.15);
    left: 7px;
    top: -64px;

    @media (min-width: 1350px) {
      transform: rotate(0deg) scale(0.16);
      left: 24px;
      top: -62px;
    }
  }
}
</style>