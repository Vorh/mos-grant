import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [

    {
        path: '/',
        name: 'Grant',
        component: () => import('../component/grant/GrantView.vue'),
    },

    {
        path: '/new',
        name: 'GrantNew',
        component: () => import('../component/grant/GrantNewView.vue'),
    },

    {
        path: '/document',
        name: 'GrantDocument',
        component: () => import('../component/grant/GrantDocument.vue'),
    },

    {
        path: '/send',
        name: 'GrantSendRequest',
        component: () => import('../component/grant/GrantSendRequest.vue'),
    },

    {
        path: '/end',
        name: 'GrantRequestEnd',
        component: () => import('../component/grant/GrantRequestEnd.vue'),
    },

    {
        path: '/requests',
        name: 'Requests',
        component: () => import('../component/requests/RequestsView.vue'),

    },

    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../component/detail/Detail.vue'),
    },

    {
        path: '/account',
        name: 'Account',
        component: () => import('../component/account/AccountView.vue'),
    },


    {
        path: '/stats',
        name: 'Stats',
        component: () => import('../component/stats/StatsView.vue'),
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


export default router;
