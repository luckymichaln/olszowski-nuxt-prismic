<template>
  <div class="contact-page">
    <div class="contact-page__inner">
      <div class="container">
        <nav class="nav">
          <div class="nav__link-wrapper">
            <nuxt-link
              to="/"
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
        <div
          class="contact-page__main arrows-main"
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
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },

  beforeMount() {
    this.body = document.getElementsByTagName('body')[0]
    this.body.style.backgroundColor = this.data.background_color
    this.body.style.color = this.data.text_color
  },

  mounted () {
    const yearNode = this.$refs.year
    const copyNode = this.$refs.copy
    copyNode.children[0].prepend(yearNode)

    const allLinks = document.querySelectorAll('.contact-page__main a')
    allLinks.forEach(node => {
      const svg = document.getElementById('arrow').cloneNode(true)
      node.prepend(document.createElement('div').appendChild(svg))
    })
  },

  beforeDestroy() {
    this.body.style.backgroundColor = '#fff'
    this.body.style.color = '#000'
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.contact-page {
  height: 100vh;
  width: 100vw;
  padding-top: 40px;

  &__main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);
  }

  &__header {
    width: calc(100% - (100% / 3));
    margin-bottom: 75px;
    text-transform: uppercase;
  }

  &__columns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;

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

  @media(min-width: 879px) {
    margin-top: 40px;
  }
}
</style>