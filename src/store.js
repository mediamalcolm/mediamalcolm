import Vue from 'vue';
import Vuex from 'vuex';
import articles from '@/data/articles.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: articles,
    drawer: false,
    article: null,
    items: [
      {
        text: 'About',
        to: '/about',
      },
      {
        text: 'FAQ',
        to: '/faq',
      },
      {
        text: 'Contact',
        to: '/contact',
      },
    ],
  },
  getters: {
    articles: state => {
      return state.articles;
    },
    categories: state => {
      const categories = [];

      for (const article of state.articles) {
        if (!article.category || categories.find(category => category.text === article.category)) continue;

        const text = article.category;

        categories.push({
          text,
          to: `/category/${text}`,
        })
      }

      return categories.sort().slice(0, 4);
    },
    links: (state, getters) => {
      return state.items;
    },
    article: state => {
      return state.article;
    },
    filteredArticles: state => (filter) => {
      return state.articles.filter(article => article.category === filter);
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setArticle: (state, payload) => (state.article = payload),
  },
  actions: {

  },
})
