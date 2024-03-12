// Composables
import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, } from 'vue-router'

//Layout
import AuthDefaultayout from "@/layouts/default/AuthLayout.vue";


// Auth
import LoginPage from "@/views/auth/login/LoginPage.vue";
import RegisterPage from "@/views/auth/register/RegisterPage.vue";
import ResetPassword from "@/views/auth/reset-password/ResetPasswordPage.vue";
import ResetPasswordResetToken from "@/views/auth/reset-password/ResetPasswordResetToken.vue";

//Misc
import NotFound from '@/views/msic/NotFound.vue';

const routes = [
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
  { path: '/', name: 'home', component: AuthDefaultayout },
  {
    path: '/auth',
    component: AuthDefaultayout,
    meta: { anonymousOnly: true },
    children: [
      { path: 'login', name: 'auth.login', component: LoginPage },
      { path: 'register', name: 'auth.register', component: RegisterPage },
      { path: 'reset-password', name: 'auth.reset.password', component: ResetPassword },
      { path: 'reset-password/token/:token', name: 'auth.reset.password.token', component: ResetPasswordResetToken },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
