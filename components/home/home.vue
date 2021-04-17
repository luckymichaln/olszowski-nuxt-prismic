<template>
  <div class="home-page">
    <div class="container">
      <nav class="nav">
        <nuxt-link
          to="/contact"
        >
          Contact
        </nuxt-link>
      </nav>
    </div>
    <div>
      <homeRow
        v-for="(row, i) in rows"
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
    rows: {
      type: Array,
      default: () => []
    }
  },
}
</script>
