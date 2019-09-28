import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => import(/* webpackChunkName: "auth" */ './views/Auth')
        },
        {
            path: '/quiz',
            name: 'Quiz',
            component: () => import(/* webpackChunkName: "quiz" */ './views/Quiz')
        },
        {
            path: '/funds',
            name: 'Funds',
            component: () => import(/* webpackChunkName: "funds" */ './views/Funds')
        }
    ]
})
