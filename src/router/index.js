import {createRouter, createWebHistory} from 'vue-router';
import LoginComponent from "../public/components/login.component.vue";
import HomeComponent from "../public/components/home.component.vue";
import RegisterCompanyComponent from "../public/components/register-company.component.vue";
import Contact from "../public/components/contact/components/contact.component.vue";
import Home from "../public/components/home.project.component.vue";
import RequestComponent from "../clients/components/request.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: LoginComponent, name: 'login'},
        {path: '/home/:userId', component: Home, name: 'home',props:true},
        {path: '/register-company', component: RegisterCompanyComponent, name: 'register-company'},
        {path: '/requests/:userId', component: RequestComponent, name: 'requests',props:true},
        {path:'/contact/:userId',component:Contact, name: 'contact',props:true},

    ]
});

export default router;