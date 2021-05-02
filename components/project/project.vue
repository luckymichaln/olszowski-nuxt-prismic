<template>
  <div class="project-page">
    <div class="container">
      <nav class="nav">
        <nuxt-link
          to="/"
        >
          {{ data.nav_label }}
        </nuxt-link>
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
  padding-top: $page-padding-top;
  font-size: 22px;

  &__text {
    margin-bottom: 120px;
    text-transform: uppercase;
  }
}
</style>