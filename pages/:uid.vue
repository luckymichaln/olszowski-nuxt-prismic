<template>
  <project
    :data="projectsData[currentProject]"
  />
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import project from '~/components/project/project'

export default {
  async asyncData({ store, route }) {
    store.commit('pages/SET_CURRENT_PROJECT', { data: route.params.uid })

    if (!store.state.pages.projectsData[`${route.params.uid}`]) {
      await store.dispatch('pages/GET_PAGE_DATA', { pageType: 'project', uid: route.params.uid })
      console.log(this, 'this')
    }
  },

  computed: {
    ...mapState('pages', ['currentProject']),
    ...mapGetters('pages', ['projectsData']),
  }
}
</script>
