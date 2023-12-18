import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/Zhuce",
      name: "Zhuce",
      component: () => import("../views/zhuce.vue"),
    },
    {
      path: "/Home",
      name: "Home",
      meta: {
        requireAuth: true, //此时表示进入这个路由是需要登录的
      },
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
