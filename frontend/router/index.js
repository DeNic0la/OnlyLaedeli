import VueRouter from 'https://unpkg.com/vue-router@4.0.5/dist/vue-router.global.js'
  import comp from '../components/comp.vue';

    const routes = [{
      path: '/comp',
      name: 'comp',
      component: comp
      // uncomment below to use lazy loading - also, remove import statement for this component at top of file.
      // component: () => import('../components/comp.vue')
    },];

    const router = VueRouter.createRouter({
      // ask if user wants to "Use history mode for router? (Requires proper server setup for index fallback in production)"
      // https://next.router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

      // history: createWebHistory(),
      routes
    });

    export default router;
    