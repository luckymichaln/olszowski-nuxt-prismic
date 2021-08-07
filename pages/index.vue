<template>
  <home
    :data="homePageData"
  />
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import home from '~/components/home/home';

  export default {
    async asyncData({ store }) {
      if (!store.getters['pages/homePageData']) {
        await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'homepage' })
      }

      // if (!store.getters['pages/navigationText']) {
        await store.dispatch('pages/GET_NAV_TEXT')
        console.log('g')
      // }
    },

    computed: {
      ...mapGetters('pages', ['homePageData']),
    },

    components: {
      home
    }
  }
</script>
