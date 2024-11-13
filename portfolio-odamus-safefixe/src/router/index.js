import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Accueil.vue"),
    },

    // {
    //   path: '/competences',
    //   name: 'competences',
    //   component: () => import('@/views/Competences.vue')
    // },
    //
    // {
    //   path: '/projets',
    //   name: 'projets',
    //   component: () => import('@/views/Projets.vue')
    // },
    //
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('@/views/Contact.vue')
    // },
    //
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
