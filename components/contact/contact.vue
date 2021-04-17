<template>
  <div class="contact-page">
    <div class="container">
      <div class="nav">
        <nuxt-link
          to="/"
        >
          Work
        </nuxt-link>
      </div>
    </div>
    <div class="hero-heading">
      <prismic-rich-text
        :field="data.hero_heading"
      />
    </div>

    <div
      v-if="data.right_column"
      class="right-column"
    >
      <prismic-rich-text
        v-for="(el, i) in data.right_column"
        :key="i"
        :field="el.row"
      />
    </div>
    <div
      v-if="data.left_column"
      class="left-column"
    >
      <prismic-rich-text
        v-for="(el, i) in data.left_column"
        :key="i"
        :field="el.row"
      />
    </div>
    <footer>
      <p>&#169; {{ currentYear }} Copyright by Tomek Olszowski<br/>All rights reserved</p>
    </footer>

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
  }
}
</script>

<style>

</style>