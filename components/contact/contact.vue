<template>
  <div class="contact-page arrows-main">
    <div class="contact-page__inner">
      <div class="container">
        <nav class="nav">
          <div class="nav__link-wrapper">
            <nuxt-link
              to="/"
            >
              <div class="wrapper-inner wrapper-inner--arrow arrow--back">
                <prismic-rich-text
                  :field="data.nav_label"
                  :style="{ fontSize: innerWidth <= fontSizeChange ? `${data.nav_font_size_medium}px` : `${data.nav_font_size_large}px` }"
                />
                <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow">
                  <rect x="2.39999" y="9.35562" width="29.6" height="3.2" fill="currentColor"/>
                  <rect x="2.26276" y="8.55563" width="14.4" height="3.2" transform="rotate(45 2.26276 8.55563)" fill="currentColor"/>
                  <rect x="12.4451" y="2.81836" width="14.4" height="3.2" transform="rotate(135 12.4451 2.81836)" fill="currentColor"/>
                </svg>
              </div>
            </nuxt-link>
          </div>
        </nav>
        <div
          class="contact-page__main arrows--links"
          ref="pageMainNode"
        >
          <header class="contact-page__header">
            <prismic-rich-text
              :field="data.hero_heading"
            />
          </header>
          <div class="contact-page__columns">
            <div
              v-if="data.left_column"
              class="column column--left"
            >
              <prismic-rich-text
                v-for="(el, i) in data.left_column"
                :key="i"
                :field="el.row"
              />
            </div>
            <div
              v-if="data.right_column"
              class="column column--right"
            >
              <prismic-rich-text
                v-for="(el, i) in data.right_column"
                class="column-box"
                :key="i"
                :field="el.row"
              />
            </div>
          </div>
          <footer class="contact-page__footer">
            <span
              class="footer-year"
              ref="year"
            >&#169; {{ currentYear }} </span>
            <prismic-rich-text
              class="footer-copy"
              ref="copy"
              :field="data.copyrights"
            />
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          content: 'https://images.prismic.io/toshootingcarsv2/276a3b51-207f-4370-ba79-e8b65b5a271d_TomekOlszowski+Porsche_718_5.jpg'
        },
        {
          hid: 'og:image_source',
          property: 'og:image_source',
          content: 'https://images.prismic.io/toshootingcarsv2/276a3b51-207f-4370-ba79-e8b65b5a271d_TomekOlszowski+Porsche_718_5.jpg'
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'https://images.prismic.io/toshootingcarsv2/276a3b51-207f-4370-ba79-e8b65b5a271d_TomekOlszowski+Porsche_718_5.jpg'
        },
      ]
    }
  },

  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      currentYear: new Date().getFullYear(),
      innerWidth: null,
      fontSizeChange: 1300,
    }
  },

  beforeMount() {
    this.body = document.getElementsByTagName('body')[0]
    this.body.style.backgroundColor = this.data.background_color
    this.body.style.color = this.data.text_color
  },

  mounted () {
    if (window) this.innerWidth = window.innerWidth

    if (window.innerWidth <= 768) {
      const elements = document.getElementsByClassName('contact-page__columns')[0];
      elements.style.opacity = 0;
      setTimeout(() => {
        window.scrollTo(0,0);
        elements.style.opacity = 1;
      }, 300);
    }

    const yearNode = this.$refs.year
    const copyNode = this.$refs.copy
    copyNode.children[0].prepend(yearNode)

    const allLinks = document.querySelectorAll('.contact-page__main a')
    allLinks.forEach(node => {
      const svg = document.getElementById('arrow').cloneNode(true)
      node.prepend(document.createElement('div').appendChild(svg))
    })

    this.checkFontSize()
  },

  methods: {
    checkFontSize() {
      if (window) {
        window.addEventListener('resize', ev => {
          this.innerWidth = ev.target.innerWidth
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.contact-page {
  min-height: 100vh;
  width: 100vw;
  padding: 80px 0 80px;
  font-size: 22px;

  &__main {
    display: flex;
    flex-direction: column;
  }

  &__header {
    width: calc(100% - (100% / 3));
    margin-bottom: 75px;
  }

  &__columns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 879px) {
      flex-direction: row;
      margin-bottom: 60px;
    }
  }

  .column {
    display: flex;
    flex-direction: column;

    &--left {
      width: 100%;
      margin-bottom: 40px;

      div:not(:last-child) {
        margin-bottom: 30px;
      }

      @media(min-width: 879px) {
        width: 50%;
        padding-right: 30px;
        margin-bottom: 0;
      }
    }

    &--right {
      width: 100%;

      @media(min-width: 879px) {
        width: 50%;
        padding-left: 30px;
        text-align: right;
      }
    }

    a {
      word-break: break-word;
    }
  }

  &__footer {
    margin-top: 40px;

    @media(min-width: 879px) {
      margin-top: auto;
    }
  }

  .column-box:not(:last-of-type) {
    margin-bottom: 30px;
  }

  .nav__link-wrapper {
    position: relative;
    display: inline-block;
  }

  @media (min-width: 768px) {
    font-size: inherit;
    padding-bottom: 0;

    &__main {
      height: calc(100vh - 160px);
    }
  }
}
</style>