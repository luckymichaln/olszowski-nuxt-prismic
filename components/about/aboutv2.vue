<template>
  <div class="about-page">
    <div class="about-page__inner">
      <div class="container">
        <section class="about-page-box">
          <prismic-rich-text :field="data.info_row" />
        </section>
      </div>
    </div>
    <burger-menu :color="data.text_color" />
  </div>
</template>

<script>
import burgerMenu from '~/components/burger-menu/burger-menu'

export default {
  components: { burgerMenu },
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
  },

  components: {
    burgerMenu
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.about-page {
  min-height: 100vh;
  width: 100vw;
  padding: 80px 0 0;
  font-size: 22px;

  &__inner {
    height: 80vh;
    width: 100%;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  &-box {
    margin: 0 100px;
  }

  p:not(:last-of-type) {
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    font-size: inherit;
  }
}
</style>