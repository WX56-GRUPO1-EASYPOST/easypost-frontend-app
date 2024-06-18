import {createRouter, createWebHistory} from 'vue-router';
import LoginComponent from "../public/pages/login.page.vue";
import RegisterCompany from "../public/pages/register-company.page.vue";
import Contacts from "../public/pages/contacts.page.vue";
import EnterpriseHome from "../core/enterprises/pages/enterprise-home.page.vue";
import PageNotFound from "../public/pages/PageNotFound.page.vue"
import Requests from "../core/enterprises/pages/requests.page.vue"
import ClientHome from "../core/clients/pages/client-home.page.vue"
import RequestForm from "../core/clients/pages/request-form.page.vue";
import DashboardPage from "../core/clients/pages/dashboard.page.vue";
import ManageProject from "../core/enterprises/pages/manage-project.vue";
//import Gestionar from "../core/enterprises/pages/manage-project.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: LoginComponent, name: 'login'},
        {path: '/register-company', component: RegisterCompany, name: 'register-company'},

        {path: '/enterprise-home', component: EnterpriseHome},
        {path: '/requests', component: Requests},
        {path: '/:projectId/manage', component: ManageProject, name: 'manage'},

        {path:'/client-home',component:ClientHome},
        {path: '/:enterpriseId/request', component: RequestForm},
        {path: '/:projectId/dashboard', component: DashboardPage},

        {path: '/contact', component: Contacts},

        {path: '/:pathMatch(.*)*', component: PageNotFound,name:'pageNotFound'}

    ]
});

export default router;