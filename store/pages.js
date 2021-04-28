export const state = () => ({
  singlePageData: {
    homepage: null,
    contactpage: null
  },
  projectsData: {},
  currentProject: '',
  socialNav: null,
})

export const actions = {
  async GET_PAGE_DATA({ commit }, { pageType, uid }) {
    try {
      let doc = {}
      const result = uid ? await this.$prismic.api.getByUID(`${pageType}`, `${uid}`) : await this.$prismic.api.getSingle(`${pageType}`)
      doc = result.data
      if (doc && uid) {
        commit('SET_PROJECT_PAGE_DATA', { data: doc, uid });
        return;
      }
      if (doc && !uid) {
        commit('SET_SINGLE_PAGE_DATA', { data: doc, pageType });
        return;
      }
      console.error('unable to retrieve pageData:', pageType, uid);
      return doc
    } catch (err) {
      console.error('error retrieving single page data:', { err, pageType })
    }
  },

  async GET_SOCIAL_NAV({ commit }) {
    try {
      let doc = {}
      const result = await this.$prismic.api.getSingle('social')
      doc = result.data

      if (doc) {
        commit('SET_SOCIAL_NAV', { data: doc })
        console.log(doc, 'dovvvv')
      }

    } catch (err) {
      console.error('error retrieving social nav', { err })
    }
  }
}

export const mutations = {
  SET_SINGLE_PAGE_DATA(state, { data, pageType }) {
    state.singlePageData[`${pageType}`] = data
  },

  SET_PROJECT_PAGE_DATA(state, { data, uid }) {
    if (!state.projectsData[`${uid}`]) {
      state.projectsData[`${uid}`] = data;
    }
  },

  SET_SOCIAL_NAV(state, { data }) {
    state.socialNav = data
  },

  SET_CURRENT_PROJECT(state, { data }) {
    state.currentProject = data
  }
}

export const getters = {
  homePageData: state => state.singlePageData.homepage ? state.singlePageData.homepage : null,
  contactPageData: state => state.singlePageData.contactpage ? state.singlePageData.contactpage : null,
  projectsData: state => state.projectsData,
  socialNav: state => state.socialNav,
}
