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