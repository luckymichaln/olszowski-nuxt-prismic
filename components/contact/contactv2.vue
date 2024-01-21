<template>
  <div class="contact-page-v2 arrows-main">
    <div class="contact-page-v2__inner">
      <section class="contact-page-v2-row">
        <h1>Direct contact</h1>
        <prismic-rich-text :field="data.direct_column" />
      </section>
      <section class="contact-page-v2-row">
        <h2>Inquiries</h2>
        <ul class="contact-page-v2-columns">
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
    <burger-menu :color="data.text_color" />
  </div>
</template>

<script>
import burgerMenu from '~/components/burger-menu/burger-menu.vue'

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
  },

  components: {
    burgerMenu
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.contact-page-v2 {
  width: 100vw;
  display: flex;
  font-size: 24px;
  align-items: center;
  padding: 40px 30px 100px;

  h1, h2 {
    margin-bottom: 40px;
  }

  &__inner {
    width: 100%;
  }

  &-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    p {
      &:not(:last-of-type) {
        margin-bottom: 6px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }

  &-columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    li {
      margin-bottom: 40px;

      &:not(:last-child) {
        padding-right: 30px;
      }
    }
  }

  @media (min-width: 768px) {
    font-size: inherit;
    min-height: 100vh;
    padding: 0;

    &__inner {
      width: 100%;
      padding: 0 60px;
    }
  }

  @media (min-width: 1030px) {
    &-columns {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1330px) {
    font-size: 30px;

    &-columns {
      flex-direction: row;
      flex-wrap: nowrap;
    }

    &__inner {
      padding: 0 14vw;
    }
  }
}
</style>