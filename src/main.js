import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/index.js'
import 'primevue/resources/themes/md-light-indigo/theme.css'

import 'primevue/resources/themes/md-light-indigo/theme.css';
// Add PrimeVue Components
import Card         from 'primevue/card';
import Button       from 'primevue/button';
import OrderList    from 'primevue/orderlist';
import Toolbar      from "primevue/toolbar";
import InputText    from "primevue/inputtext";
import Dialog       from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';
import Sidebar      from 'primevue/sidebar';
import Avatar       from 'primevue/avatar';
import Menu         from 'primevue/menu';
import MenuBar      from 'primevue/menubar';
//import Toolbar      from 'primevue/toolbar';


import 'primeicons/primeicons.css'


import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-orderList', OrderList)
    .component('pv-input-text', InputText)
    .component('pv-dialog', Dialog )
    .component('pv-toolbar',Toolbar)
    .mount('#app')
