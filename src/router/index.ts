import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/about-us',
    name: 'aboutus',
    component: () => import('../views/AboutUs.vue'),
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
