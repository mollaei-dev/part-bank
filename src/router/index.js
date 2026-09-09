import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import PersonalInfoPage from '@/pages/PersonalInfoPage.vue'
import ConfirmInfoPage from '@/pages/ConfirmInfoPage.vue'
import UploadIDPage from '@/pages/UploadIDPage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    meta: { guestOnly: true },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/personal-info',
    name: 'personal-info',
    component: PersonalInfoPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/confirm-info',
    name: 'confirm-info',
    component: ConfirmInfoPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/upload-id',
    name: 'upload-id',
    component: UploadIDPage,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    return { name: 'login' }
  }
  if (to.meta.guestOnly && token) {
    return { name: 'dashboard' }
  } else return
})

export default router
