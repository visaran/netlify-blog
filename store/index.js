export const state = () => ({
  blogPosts: [],
  aboutPage: {}
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setAboutPage(state, aboutPage) {
    state.aboutPage = aboutPage;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/assets/content/blog/",
      false,
      /\.json$/
    );

    let pages = await require.context(
      "~/assets/content/page/",
      false,
      /\.json$/
    );

    let aboutPage = pages.keys().map(key => {
      let res = pages(key);
      res.slug = key.slice(2, -5);
      return res;
    });

    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit("setBlogPosts", blogPosts);
    await commit("setAboutPage", aboutPage);
  }
};
