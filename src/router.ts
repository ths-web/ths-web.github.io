import { createRouter, createWebHistory } from "vue-router";

const toppage = () => import("./pages/toppage.vue");
const company = () => import("./pages/company.vue");
const concept = () => import("./pages/concept.vue");
const business = () => import("./pages/business.vue");
const product = () => import("./pages/product.vue");
const recruit = () => import("./pages/recruit.vue");
const contact = () => import("./pages/contact.vue");
const NotFound = { template: '<div>NotFound</div>' }

const routes = [
  { path: "/", component: toppage },
  { path: "/company", component: company },
  { path: "/concept", component: concept },
  { path: "/business", component: business },
  { path: "/product", component: product },
  { path: "/recruit", component: recruit },
  { path: "/contact", component: contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
