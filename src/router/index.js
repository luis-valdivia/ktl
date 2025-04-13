// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutUs.vue'
import Services from '@/pages/ServicesPage.vue'
import Contact from '@/pages/ContactUs.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
