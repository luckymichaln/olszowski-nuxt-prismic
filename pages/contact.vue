<template>
  <contact
    :data="contactPageData"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import contact from '~/components/contact/contact';

export default {
  async asyncData({ store }) {
    if (!store.getters['pages/contactPageData']) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'contactpage' })
    }

    if (!store.state.socialNav) {
      await store.dispatch('pages/GET_SOCIAL_NAV')
    }
  },

  computed: {
    ...mapGetters('pages', ['contactPageData'])
  },
}
</script>
