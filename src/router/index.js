import {createRouter, createWebHistory} from 'vue-router';
import LoginComponent from "../public/components/login.component.vue";
import HomeComponent from "../public/components/home.component.vue";
import RegisterCompanyComponent from "../public/components/register-company.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: LoginComponent, name: 'login'},
        {path: '/home', component: HomeComponent, name: 'home'},
        {path: '/register-company', component: RegisterCompanyComponent, name: 'register-company'}
    ]
});

export default router;



