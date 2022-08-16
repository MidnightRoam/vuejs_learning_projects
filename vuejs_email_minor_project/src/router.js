import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Login from "@/views/Login";
import Forget from "@/views/Forget";
import AppEmailBody from "@/components/AppEmailBody";
import NotFound from "@/views/NotFound";
// import Mail from "@/views/Mail";

const Mail = () => import('@/views/Mail') // Lazy-loading оптимизация

const router = createRouter({
    history: createWebHistory(), // Сохранение переходов в приложении по слешу
    routes: [
        { path: '/login', component: Login, alias: '/' }, // localhost:port/login
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'home',
            beforeEnter() {
                console.log('beforeEnter')
            }},
        { path: '/mail', component: Mail, children: [
                { path: ':mailId?', component: AppEmailBody, props: true }
            ]},
        { path: '/forget', component: Forget, meta: {cantEnter: true} },
        { path: '/:notFound(.*)', component: NotFound } // страница 404, (.*) регулярное выражение
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => { // защита роутов
    if (to.meta.cantEnter) {
        next({name: 'home'})
    } else {
        next()
    }
})

router.afterEach((to, from) => {

})

export default router