import Login from "@/pages/Login"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: Login
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router