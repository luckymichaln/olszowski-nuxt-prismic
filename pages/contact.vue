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
  },

  computed: {
    ...mapGetters('pages', ['contactPageData'])
  },

  components: {
    contact
  }
}
</script>
