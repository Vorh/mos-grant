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
        path: '/requests',
        name: 'Requests',
        component: () => import('../component/requests/RequestsView.vue'),

        children: [
            {
                path: '/:id',
                name: 'RequestDetail',
                component: () => import('../component/requests/RequestDetail.vue'),
            }
        ]
    },

    {
        path: '/account',
        name: 'Account',
        component: () => import('../component/account/AccountView.vue'),
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


export default router;
