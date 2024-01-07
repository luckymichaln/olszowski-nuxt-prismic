<template>
  <about
    :data="aboutPageData"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import about from '~/components/about/about';

export default {
  async asyncData({ store }) {
    if (!store.getters['pages/aboutPageData']) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'aboutpage' })
    }
  },

  computed: {
    ...mapGetters('pages', ['aboutPageData'])
  },

  components: {
    about
  }
}
</script>
