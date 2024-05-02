import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/index.js'
import Dialog from 'primevue/dialog';
import 'primevue/resources/themes/md-light-indigo/theme.css';


// Add PrimeVue Components
import Card         from 'primevue/card';
import Button       from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Sidebar      from 'primevue/sidebar';
import Avatar       from 'primevue/avatar';
import Menu         from 'primevue/menu';
import MenuBar      from 'primevue/menubar';
import Toolbar      from 'primevue/toolbar';

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('Card', Card)
    .component('Button', Button)
    .component('pv-dialog', Dialog, )
    .mount('#app')
