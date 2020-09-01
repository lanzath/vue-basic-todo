import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Kanban from '@/views/kanban/Kanban';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kanban',
    name: 'Kanban',
    component: Kanban
  }
];

const router = new VueRouter({ routes });

export default router;
