<template>
  <nuxt-link
    to="/"
  >
    Work
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, route }) {
    if (!store.state.pages.projectsData[`${route.params.uid}`]) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'project', uid: route.params.uid })
    }
  },

  computed: {
    ...mapGetters('pages', ['projectsData']),
  },

  mounted () {
    console.log(this.projectsData, 'projectsData')
  }
}
</script>

<style>

</style>