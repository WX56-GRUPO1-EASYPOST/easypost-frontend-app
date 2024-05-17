import {createRouter, createWebHistory} from 'vue-router';
import LoginComponent from "../public/pages/login.page.vue";
//import HomeComponent from "../public/pages/home.page.vue";
import RegisterCompany from "../public/pages/register-company.page.vue";
import Contact from "../public/pages/contact.page.vue";
import Home from "../core/enterprises/pages/home.page.vue";
import RequestComponent from "../core/enterprises/components/request.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: LoginComponent, name: 'login'},
        {path: '/home/:userId', component: Home, name: 'home',props:true},
        {path: '/register-company', component: RegisterCompany, name: 'register-company'},
        {path: '/requests/:userId', component: RequestComponent, name: 'requests',props:true},
        {path:'/contact/:userId',component:Contact, name: 'contact',props:true},

    ]
});

export default router;