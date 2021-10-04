import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/forma",
    name: "Forma",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Forma.vue"),
  },
  {
    path: "/lab12",
    name: "EXPRESS",
    component: () => import("../views/EXPRESS.vue"),
  },
  {
    path: "/lab14",
    name: "HtmlDinamico",
    component: () => import("../views/HtmlDinamico.vue"),
  },
  {
    path: "/lab15",
    name: "MVC",
    component: () => import("../views/MVC.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
