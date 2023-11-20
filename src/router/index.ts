import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
// import Zhuce from "@views/zhuce.vue";
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
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
