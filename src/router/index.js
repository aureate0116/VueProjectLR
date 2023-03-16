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
          component: () => import("../views/front/IndexView.vue"),
        },
        {
          path: "resource-list/:resTopic",
          component: () => import("../views/front/ResourceListView.vue"),
        },
        {
          path: "resource/:resourceId",
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
        {
          path: "user-home",
          component: () => import("../views/front/UserHomeLayout.vue"),
          children: [
            {
              path: "user-resources/:userid",
              component: () => import("../views/front/UserResourcesView.vue"),
            },
          ],
        },
        {
          path: "user-info/:userId",
          component: () => import("../views/front/UserInfoLayout.vue"),
          children: [
            {
              path: "user-profile/:userId",
              component: () => import("../views/front/UserProfileView.vue"),
            },
            {
              path: "user-account/:userId",
              component: () => import("../views/front/UserAccount.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
