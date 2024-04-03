import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'test',
      component: TestView,
      children:[
        {
          path: "",
          name: "default",
          component: () => import("@/views/PostsView.vue")
        },
        {
          path: "posts",
          name: "Posts",
          component: () => import("@/views/PostsView.vue")
        },
        {
          path: "comments",
          name: "Comments",
          component: () => import("@/views/CommentsView.vue")
        },
        {
          path: "reviews",
          name: "Reviews",
          component: () => import("@/views/ReviewView.vue")
        }
      ]
    },
  ]
})

export default router
