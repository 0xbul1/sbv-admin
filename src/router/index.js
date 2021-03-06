import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';
// import Wrapper from '../views/Wrapper.vue';

Vue.use(VueRouter);
// /* Layout */
// import Layout from '@/layout'
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' },
    }],
  },
  // {
  //   path: '/',
  //   name: 'Wrapper',
  //   component: Wrapper,
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
