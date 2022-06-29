import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/pages/Auth-page";
import Analitics from "@/pages/Analitics-page";

const routes = [
  {
    path: "/",
    component: Auth,
  },
  {
    path: "/analitics",
    component: Analitics,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/" && !localStorage.getItem("leadhit-site-id"))
    next({ path: "/" });
  else next();
});

export default router;
