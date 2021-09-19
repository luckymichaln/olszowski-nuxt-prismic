<template>
  <div
    class="project-page arrows-main"
    :style="{ paddingTop: `${data.offset_top}%` }"
  >
    <nav class="nav">
      <div class="nav__link-wrapper">
        <nuxt-link
          to="/"
        >
          <div class="wrapper-inner arrow--back">
            <prismic-rich-text
              :field="data.nav_label"
            />
            <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.39999" y="9.35562" width="29.6" height="3.2" fill="currentColor"/>
              <rect x="2.26276" y="8.55563" width="14.4" height="3.2" transform="rotate(45 2.26276 8.55563)" fill="currentColor"/>
              <rect x="12.4451" y="2.81836" width="14.4" height="3.2" transform="rotate(135 12.4451 2.81836)" fill="currentColor"/>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </nav>
    <div class="container project-page__text">
      <prismic-rich-text
        class="project-page__info"
        :field="data.project_info"
      />
    </div>

    <projectRow
      v-for="(row, index) in data.body"
      :key="index"
      :data="row"
    />
    <prismic-rich-text
      class="project-page__info project-page__info--bottom"
      :field="data.project_info"
    />
  </div>
</template>

<script>
import projectRow from '~/components/project/project-row'

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
          content: (this.data.social_image && this.data.social_image.url) ? this.data.social_image.url.split('?')[0] : null
        },
        {
          hid: 'og:image_source',
          property: 'og:image_source',
          content: (this.data.social_image && this.data.social_image.url) ? this.data.social_image.url.split('?')[0] : null
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.data.social_image.alt
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://gracious-hoover-e9dca2.netlify.app'
        }
      ]
    }
  },

  data () {
    return {
      body: null,
    }
  },

  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  beforeMount() {
    this.body = document.getElementsByTagName('body')[0];
    this.body.style.backgroundColor = this.data.background_color;
    this.body.style.color = this.data.text_color;
  },

  mounted() {
    if (window.innerWidth <= 768) {
      const elements = document.getElementsByClassName('project-row');
      elements.forEach(element => {
        element.style.opacity = 0;
      })
      setTimeout(() => {
        window.scrollTo(0,0);
        elements.forEach(element => {
          element.style.opacity = 1;
        })
      }, 300);
    }
  },

  components: {
    projectRow
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.project-page {
  &__text {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
  }

  &__info {
    margin-top: 80px;
    display: none;

    &--bottom {
      padding: 0 15px 80px;
      font-size: 22px;
      display: block;
    }

    @media (min-width: 768px) {
      display: block;

      &--bottom {
        display: none;
      }
    }
  }

  .nav__link-wrapper {
    position: relative;
    display: inline-block;
  }

  @media (max-width: 768px) {
    padding-top: 0;
  }
}
</style>