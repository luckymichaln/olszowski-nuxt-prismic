export const state = () => ({
  singlePageData: {
    homepage: null,
    contactpage: null
  },
  projectsData: {}
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
}

export const mutations = {
  SET_SINGLE_PAGE_DATA(state, { data, pageType }) {
    state.singlePageData[`${pageType}`] = data
  },

  SET_PROJECT_PAGE_DATA(state, { data, uid }) {
    if (!state.projectsData[`${uid}`]) {
      state.projectsData[`${uid}`] = data;
    }
  }
}

export const getters = {
  homePageData: state => state.singlePageData.homepage ? state.singlePageData.homepage.body : null,
  contactPageData: state => state.singlePageData.contactpage ? state.singlePageData.contactpage : null,
  projectsData: state => state.projectsData,
}
