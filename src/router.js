import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Login.vue';
import Register from './views/Register.vue';
Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/vet',
      name: 'veterinario',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/mascotas',
      name: 'mascotas',
      // lazy-loaded
      component: () => import('./views/Mascotas.vue')
    },
    {
      path: '/historias_clinicas',
      name: 'historias_clinicas',
      // lazy-loaded
      component: () => import('./views/Historias.vue')
    }
  ]
});