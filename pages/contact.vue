<template>
  <contact :data="contactPageData"/>
</template>

<script>
import { mapGetters } from 'vuex';
import contact from '~/components/contact/contact';

export default {
  async asyncData({ store }) {
    if (!store.getters['pages/contactPageData']) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'contactpage' })
    }
  },

  computed: {
    ...mapGetters('pages', ['contactPageData'])
  },

  mounted() {
      console.log(this.contactPageData, 'contactPageData')
    },
}
</script>

<style lang="scss">
  .contact-page {
    height: 100vh;
    width: 100vw;
    color: white;
    background: black;
  }
</style>