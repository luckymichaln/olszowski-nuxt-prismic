<template>
  <about
    :data="aboutPageDataV2"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import about from '~/components/about/aboutv2';

export default {
  async asyncData({ store }) {
    if (!store.getters['pages/aboutPageDataV2']) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'aboutpage' })
    }
  },

  mounted() {
    console.log(this.aboutPageDataV2, 'aboutPageDataV2')
  },

  computed: {
    ...mapGetters('pages', ['aboutPageDataV2'])
  },

  components: {
    about
  }
}
</script>
