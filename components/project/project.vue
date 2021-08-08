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
          <div class="wrapper-inner">
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
    text-transform: uppercase;
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

    .wrapper-inner {
      &:hover {
        span {
          text-decoration: underline;
        }
      }

      svg {
        display: none;
      }

      @media (min-width: 768px) {
        svg {
          position: absolute;
          top: -59px;
          right: calc(100% + 20px);
          transform: rotate(180deg) scale(0.16);
          width: 234px;
          height: 151px;
          display: none;
        }

        &:hover svg {
          display: block;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 0 !important;
  }
}
</style>