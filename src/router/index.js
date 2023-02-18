import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "resource-list",
          component: () => import("../views/front/ResourceListView.vue"),
        },
        {
          path: "resource",
          component: () => import("../views/front/ResourceView.vue"),
        },
        {
          path: "login",
          component: () => import("../views/front/LoginView.vue"),
        },
        {
          path: "signup",
          component: () => import("../views/front/SignupView.vue"),
        },
      ],
    },
  ],
});

export default router;
