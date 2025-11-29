import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: ()=> import('../component/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: ()=> import('../component/Projects.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('../component/Contact.vue')
    },
    {
      path: '/projects/sae',
      name: 'sae',
      component: ()=> import('../component/projects/Sae.vue')
    },
    {
      path: '/projects/app',
      name: 'app',
      component: () => import('../component/projects/App-zf.vue')
    },
    {
      path: '/projects/scrutateur',
      name: 'scrutateur',
      component: ()=> import('../component/projects/Scrutateur.vue')
    }
  ],
})

export default router
