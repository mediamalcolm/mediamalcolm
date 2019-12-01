import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/home/Index.vue'
import About from './components/about/Index.vue'
import Faq from './components/faq/Index.vue'
import Contact from './components/contact/Index.vue'
import Article from './components/home/Article.vue'
import Portfolio from './components/portfolio/Index.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
    },
    {
      path: '*',
      redirect: '/',

    },
  ],
})
