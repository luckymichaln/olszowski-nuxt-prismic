<template>
  <home
    :data="homePageDataV2"
  />
</template>

<script>
  import { mapGetters } from 'vuex';
  import home from '~/components/homev2/home';

  export default {
    async asyncData({ store }) {
      if (!store.getters['pages/homePageData']) {
        await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'homepagev2' })
      }

      if (!store.getters['pages/navigationText']) {
        await store.dispatch('pages/GET_NAV_TEXT')
      }
    },

    computed: {
      ...mapGetters('pages', ['homePageDataV2']),
    },

    components: {
      home
    }
  }
</script>
