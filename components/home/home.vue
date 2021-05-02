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
    <socialNav />
  </div>
</template>

<script>
import { mapGetters } from 'nuxt'
import homeRow from '~/components/home/home-row'
import socialNav from '~/components/social/social-nav'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

.home-page {
  padding-top: $page-padding-top;
}
</style>