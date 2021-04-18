<template>
  <div class="home-page">
    <nav class="nav">
      <nuxt-link
        to="/contact"
      >
        {{ data.nav_label }}
      </nuxt-link>
    </nav>
    <div>
      <homeRow
        v-for="(row, i) in data.body"
        :key="i"
        :data="row.items"
      />
    </div>
  </div>
</template>

<script>
import homeRow from '~/components/home/home-row'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.home-page {
  padding-top: $page-padding-top;
}
</style>