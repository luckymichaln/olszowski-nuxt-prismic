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
                X
                <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow">
                  <rect x="2.39999" y="9.35562" width="29.6" height="3.2" fill="currentColor"/>
                  <rect x="2.26276" y="8.55563" width="14.4" height="3.2" transform="rotate(45 2.26276 8.55563)" fill="currentColor"/>
                  <rect x="12.4451" y="2.81836" width="14.4" height="3.2" transform="rotate(135 12.4451 2.81836)" fill="currentColor"/>
                </svg>
              </div>
            </nuxt-link>
          </div>
        </nav>
        <section>
          <h1>Direct contact</h1>
          <prismic-rich-text :field="data.direct_column" />
        </section>
        <section>
          <h2>Inquiries</h2>
          <ul>
            <li
              v-for="(el, i) in data.inquries"
              :key="i"
            >
              <prismic-rich-text
                :field="el.inqurie_column"
              />
            </li>
          </ul>
        </section>
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

  beforeMount() {
    this.body = document.getElementsByTagName('body')[0]
    this.body.style.backgroundColor = this.data.background_color
    this.body.style.color = this.data.text_color
  },

  mounted () {
    console.log(this.data, 'about');
    if (window.innerWidth <= 768) {
      const elements = document.getElementsByClassName('contact-page__columns')[0];
      elements.style.opacity = 0;
      setTimeout(() => {
        window.scrollTo(0,0);
        elements.style.opacity = 1;
      }, 300);
    }

    const allLinks = document.querySelectorAll('.contact-page__main a')
    allLinks.forEach(node => {
      const svg = document.getElementById('arrow').cloneNode(true)
      node.prepend(document.createElement('div').appendChild(svg))
    })
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.contact-page {
  min-height: 100vh;
  width: 100vw;
  padding: 80px 0 0;
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
      margin-bottom: 75px;

      @media(min-width: 879px) {
        padding-left: 30px;
        text-align: right;
      }
    }

    a {
      word-break: break-word;
    }
  }

  &__footer {
    padding-bottom: 80px;

    @media(min-width: 879px) {
      margin-top: auto;
      padding-bottom: 75px;
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

    &__main {
      height: calc(100vh - 160px);
    }
  }
}
</style>