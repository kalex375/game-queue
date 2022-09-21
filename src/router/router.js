import {createRouter, createWebHistory} from "vue-router"
import LoginPage from '@/pages/LoginPage'

export const DASHBOARD = 'DASHBOARD'

const routes = [
    {
        path: '/',
        name: 'sign-in',
        component: LoginPage,
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('@/pages/ForgotPasswordPage.vue'),
    },
    {
        path: '/registration',
        name: 'sign-up',
        component: () => import('@/pages/RegistrationPage.vue'),
    },
    {
        path: '/forgot-password/verification',
        name: 'verification',
        component: () => import('@/pages/VerificationPage.vue'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('@/pages/CreateNewPasswordPage.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: { requiresAuth: true },
        component: () => import('@/pages/DashboardPage.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to,from,next) => {
    console.log(to.matched);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('TOKEN_USER')) {
            next()
        } else {
            next({name: 'sign-in'})
        }
    } else {
        next()
    }
})

export default router;