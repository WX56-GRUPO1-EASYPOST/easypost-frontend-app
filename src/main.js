import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/index.js'

// Add PrimeVue Components
import Card         from 'primevue/card';
import Button       from 'primevue/button';
import InputText from "primevue/inputtext";
import 'primeicons/primeicons.css'

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('Card', Card)
    .component('Button', Button)
    .component('pv-input-text', InputText)
    .mount('#app')
