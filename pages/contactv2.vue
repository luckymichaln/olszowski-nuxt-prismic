<template>
  <contactv2
    :data="contactPageDataV2"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import contactv2 from '~/components/contact/contactv2';

export default {
  async asyncData({ store }) {
    if (!store.getters['pages/contactPageDataV2']) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'contactpagev2' })
    }
  },

  mounted() {
    console.log(this.contactPageDataV2, 'contactPageDataV2')
  },

  computed: {
    ...mapGetters('pages', ['contactPageDataV2'])
  },

  components: {
    contactv2
  }
}
</script>
