<template>
  <home
    :data="homePageData"
  />
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import home from '~/components/home/home';

  export default {
    scrollToTop: false,

    async asyncData({ store }) {
      if (!store.getters['pages/homePageData']) {
        await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'homepage' })
      }

      if (!store.state.socialNav) {
        await store.dispatch('pages/GET_SOCIAL_NAV')
      }
    },

    computed: {
      ...mapGetters('pages', ['homePageData']),
    },

    mounted () {
      console.log(this.homePageData)
    },

    components: {
      home
    }
  }
</script>
