import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "@/views/Portfolio.vue";

const routes = [
  {
    path: "/:username",
    name: "Portfolio",
    component: Portfolio,
    props: true, // 👈 IMPORTANT
  },
  {
    path: "/",
    redirect: "/defaultuser",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/defaultuser",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
