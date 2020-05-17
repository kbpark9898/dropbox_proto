import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)



export default new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes : [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/main',
        name:'Main',
        component: Main
      },
      {
        path: '/contact',
        name:'Contact',
        component: Contact
      },
      {
        path: '/login',
        name:'Login',
        component: Login
      },
    ]
})
