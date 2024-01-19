export const state = () => ({
  singlePageData: {
    homepage: null,
    homepagev2: null,
    contactpage: null,
    contactpagev2: null,
    aboutpage: null,
    aboutpagev2: null
  },
  projectsData: {},
  currentProject: '',
  socialNav: null,
  pagePosition: null,
  navText: null,
})

export const actions = {
  async GET_PAGE_DATA({ commit }, { pageType, uid }) {
    console.log(pageType, 'pageType');
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
  },

  async GET_NAV_TEXT({ commit }) {
    try {
      let doc = {}
      const result = await this.$prismic.api.getSingle('navigation')
      doc = result.data

      if (doc) {
        commit('SET_NAV_TEXT', { data: doc })
      }

    } catch (err) {
      console.error('error retrieving main navigation text', { err })
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

  SET_NAV_TEXT(state, { data }) {
    state.navText = data
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
          const hovers = [hover_image_1, hover_image_2, hover_image_3, hover_image_4, hover_image_5, ].filter(el => el.url);

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
  homePageDataV2: state => {
    if (!state.singlePageData.homepagev2) { return null }

    return {
      ...state.singlePageData.homepagev2,
      body: state.singlePageData.homepagev2.body.map(row => {
        return row.items.map(cover => {
          const { hover_image_1, hover_image_2, hover_image_3, hover_image_4, hover_image_5, hover_image_6, hover_image_7, hover_image_8, hover_image_9, hover_image_10 } = cover;
          const hovers = [hover_image_1, hover_image_2, hover_image_3, hover_image_4, hover_image_5, hover_image_6, hover_image_7, hover_image_8, hover_image_9, hover_image_10].filter(el => el.url);

          return {
            cover_sd: {
              ...cover.cover_sd,
              ...cover.cover_sd.url && { url: cover.cover_sd.url.split('?')[0] },
            },
            cover_hd: {
              ...cover.cover_hd,
              ...cover.cover_hd.url && { url: cover.cover_hd.url.split('?')[0] },
            },
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
  contactPageDataV2: state => state.singlePageData.contactpagev2 ? state.singlePageData.contactpagev2 : null,
  aboutPageDataV2: state => state.singlePageData.aboutpage ? state.singlePageData.aboutpage : null,
  projectsData: state => {
    console.log(state.projectsData, 'state.projectsData');
    if (!state.projectsData[state.currentProject]) { return null }

    return {
      ...state.projectsData,
      [state.currentProject]: {
        ...state.projectsData[state.currentProject],
        body: state.projectsData[state.currentProject].body.map(row => {
          return {
            ...row,
            items: row.items.map(item => {
              return {
                ...item,
                image_hd: {
                  ...item.image_hd,
                  url: item.image_hd.url.split('?')[0]
                },
                image_sd: {
                  ...item.image_sd,
                  url: item.image_sd.url.split('?')[0]
                },
                image_mobile: {
                  ...item.image_mobile,
                  url: item.image_mobile.url.split('?')[0]
                },
              }
            })
          }
        })
      }
    }
  },
  pagePosition: state => state.pagePosition,
  navigationText: state => state.navText
}
