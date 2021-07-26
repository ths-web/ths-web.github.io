import { createRouter, createWebHistory } from "vue-router";

const toppage = () => import("./pages/toppage.vue");
const company = () => import("./pages/company.vue");
const NotFound = { template: '<div>NotFound</div>' }

const routes = [
  { path: "/", component: toppage },
  { path: "/company", component: company },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
