import {createRouter, createWebHistory} from 'vue-router';
import LoginComponent from "../public/pages/login.page.vue";
import RegisterCompany from "../public/pages/register-company.page.vue";
import Contacts from "../public/pages/contacts.page.vue";
import EnterpriseHome from "../core/enterprises/pages/enterprise-home.page.vue";
import PageNotFound from "../public/pages/PageNotFound.page.vue"
import Requests from "../core/enterprises/pages/requests.page.vue"
import ManageProject from "../core/enterprises/pages/manage-project.page.vue"
import ClientHome from "../core/clients/pages/client-home.page.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: LoginComponent, name: 'login'},
        {path: '/enterprise-home', component: EnterpriseHome},
        {path: '/register-company', component: RegisterCompany, name: 'register-company'},
        {path: '/requests', component: Requests},
        {path: '/contact', component: Contacts},
        {path: '/:projectId/manage', component: ManageProject, name: 'manage'},
        {path:'/client-home',component:ClientHome},
        {path: '/:pathMatch(.*)*', component: PageNotFound,name:'pageNotFound'}

    ]
});

export default router;