import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/index.js'

// Add PrimeVue Components
import Card         from 'primevue/card';
import Button       from 'primevue/button';
import OrderList    from 'primevue/orderlist';
import InputText    from "primevue/inputtext";
import Dialog       from 'primevue/dialog';
/*import Toolbar      from "primevue/toolbar";
import SelectButton from 'primevue/selectbutton';
import Sidebar      from 'primevue/sidebar';
import Avatar       from 'primevue/avatar';
import Menu         from 'primevue/menu';
import MenuBar      from 'primevue/menubar';
import Toolbar      from 'primevue/toolbar';*/


import 'primeicons/primeicons.css'


import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';


createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-orderList', OrderList)
    .component('pv-input-text', InputText)
    .component('pv-dialog', Dialog )
    .mount('#app')
