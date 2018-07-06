import Vue from 'vue'
import Router from 'vue-router'
// import Comics from '@/page/Comics';
// import ComicChapter from '@/page/ComicChapter';
// import ComicDetail from '@/page/ComicDetail';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/comics',
    name: 'Comics',
    component: () =>
      import ('@/page/Comics')
  }, {
    path: '/comics/:id',
    name: 'ComicDetail',
    component: () =>
      import ('@/page/ComicDetail')
  }, {
    path: '/comics/:id/chapter/:cid',
    name: 'ComicChapter',
    component: () =>
      import ('@/page/ComicChapter')
  }, {
    path: '*',
    redirect: '/comics'
  }]
})
