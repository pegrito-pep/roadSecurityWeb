import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import AllLearners from '@/views/learners/AllLearners.vue'
import SuperMairie from '@/views/supermairies/SuperMairie.vue'
import UtilisateursSuperMairie from '@/views/UtilisateursSuperMairie/ListUsers.vue'
import UtilisateursMairie from '@/views/Utilisateurs-Mairies/ListUsers.vue'
 import ListMairies from '@/views/mairies/ListMairies.vue'
import Notifications from '@/views/notifications/ListNotifications.vue'
import ListTaximans from '@/views/taximans/ListTaximans.vue'
import AddTaximan from '@/views/taximans/AddTaximan.vue'
import i18n from '../i18n.js'


Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: Home
    },
    { path: '/', redirect: { name: 'home' }},
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/super-mairies',
      name: 'quiz',
      component: SuperMairie
    },
    {
      path: '/super-mairies/utilisateurs',
      name: 'list-utilisateurs',
      component: UtilisateursSuperMairie
    },
    {
      path: '/mairies/utilisateurs',
      name: 'list-utilisateurs-mairie',
      component: UtilisateursMairie
    },
    
    {
      path: '/mairies',
      name: 'list-mairies',
      component: ListMairies
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    },

    {
      path: '/taximans',
      name: 'ListTaximans',
      component: ListTaximans
    },
    {
      path: '/add-usager',
      name: 'add-usager',
      component: AddTaximan
    },
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'empty', noAuth: true },
        component: () =>
            import ('../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: { layout: 'empty', noAuth: true },
        component: () =>
            import ('../views/auth/Register.vue')
    },
    {
        path: '/confirm',
        name: 'confirm',
        meta: { layout: 'empty', noAuth: true },
        component: () =>
            import ('../views/auth/Confirm.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        meta: { layout: 'empty', noAuth: true },
        component: () =>
            import ('../views/auth/ForgotPassword.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach(async(to, from, next) => {
    if (to.matched.some(record => (record.meta.noAuth && true === record.meta.noAuth))) {
        next()
    } else {
        const access_token = storage.get('access_token')
        if (!access_token || access_token == null || access_token == '') {
            next({ name: 'login' })
        }
        next()
    }
})

export default router