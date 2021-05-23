<template>
  <div
    class="project-page"
    :style="{ paddingTop: `${data.offset_top}%` }"
  >
    <div class="container">
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

      <prismic-rich-text
        class="project-page__text"
        :field="data.project_info"
      />
    </div>

    <projectRow
      v-for="(row, index) in data.body"
      :key="index"
      :data="row"
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
          content: this.data.body[0].items[0].image_sd.url
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.data.body[0].items[0].image_sd.url
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.data.body[0].items[0].image_sd.alt
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

  beforeDestroy() {
    this.body.style.backgroundColor = '#fff'
    this.body.style.color = '#000'
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.project-page {
  padding-bottom: $page-padding-bottom;

  &__text {
    margin-bottom: 120px;
    text-transform: uppercase;
  }

  .nav__link-wrapper {
    position: relative;
    display: inline-block;

    .wrapper-inner {
        &:hover {
          span {
            opacity: 0;
          }

          svg {
            display: block;
          }
        }

        svg {
          position: absolute;
          top: -59px;
          left: -89px;
          transform: rotate(180deg) scale(0.74);
          width: 234px;
          height: 151px;
          display: none;
      }
    }
  }
}
</style>