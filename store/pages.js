export const state = () => ({
  singlePageData: {
    homepage: null,
    contactpage: null
  },
  projectsData: {},
  currentProject: '',
  socialNav: null,
  pagePosition: null,
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
  },

  SET_PAGE_POSITION(state, { data }) {
    state.pagePosition = data
  },
}

export const getters = {
  homePageData: state => {
    if (!state.singlePageData.homepage) { return null }

    return {
      ...state.singlePageData.homepage,
      body: state.singlePageData.homepage.body.map(row => {
        return row.items.map(cover => {
          const { hover_image_1, hover_image_2, hover_image_3, hover_image_4, hover_image_5 } = cover;
          const hovers = [hover_image_1, hover_image_2, hover_image_3, hover_image_4, hover_image_5].filter(el => el.url);

          return {
            cover_sd: cover.cover_sd,
            cover_hd: cover.cover_hd,
            cover_width: cover.cover_width,
            offset_left: cover.offset_left,
            offset_top: cover.offset_top,
            project: cover.project,
            ...(hovers.length && { hover_interval: cover.hover_interval || 500 }),
            ...(hovers.length && { hovers })
          }
        })
      }),
    }
  },
  contactPageData: state => state.singlePageData.contactpage ? state.singlePageData.contactpage : null,
  projectsData: state => state.projectsData,
  pagePosition: state => state.pagePosition
}
