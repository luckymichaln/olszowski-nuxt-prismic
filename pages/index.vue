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
