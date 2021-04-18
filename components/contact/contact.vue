<template>
  <div
    class="contact-page"
    :style="{ backgroundColor: data.background_color, color: data.text_color }"
  >
    <div class="contact-page__inner">
      <div class="container">
        <nav class="nav">
          <nuxt-link
            to="/"
          >
            {{ data.nav_label }}
          </nuxt-link>
        </nav>
        <div class="contact-page__main">
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
      currentYear: new Date().getFullYear()
    }
  },

  mounted () {
    const yearNode = this.$refs.year;
    const copyNode = this.$refs.copy;
    copyNode.children[0].prepend(yearNode);
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.contact-page {
  height: 100vh;
  width: 100vw;
  padding-top: $page-padding-top;
  font-size: 22px;

  &__inner {
    background: black;
  }

  &__main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);
  }

  &__header {
    margin-bottom: 75px;
    text-transform: uppercase;
  }

  &__columns {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  }

  .column {
    display: flex;
    flex-direction: column;

    &--left {
      width: 50%;
      padding-right: 30px;
    }

    &--right {
      width: 50%;
      padding-left: 30px;
      text-align: right;
    }
  }

  &__footer {
    margin-top: auto;
  }

  .column-box:not(:last-of-type) {
    margin-bottom: 30px;
  }
}
</style>