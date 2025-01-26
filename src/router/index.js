import { createRouter, createWebHistory } from 'vue-router'
import CreateReview from "@/views/CreateReview.vue";
import UpdateReview from "@/views/UpdateReview.vue";
import RestaurantIndex from "@/views/RestaurantIndex.vue";
import RestaurantReviews from "@/views/RestaurantReviews.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    { path: '/reviews/new', component: CreateReview },
    { path: '/reviews/:id/edit', component: UpdateReview },
    { path: '/restaurants', component: RestaurantIndex },
    { path: '/restaurants/:id/reviews', component: RestaurantReviews },
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
})

export default router