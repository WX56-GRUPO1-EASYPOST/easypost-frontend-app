import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/index.js'


// Add PrimeVue Components
import Card         from 'primevue/card';
import Button       from 'primevue/button';
import OrderList    from 'primevue/orderlist';
import FloatLabel from 'primevue/floatlabel';
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


import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css';
import FileUpload from "primevue/fileupload";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import ProgressBar from "primevue/progressbar";
import SelectButton from "primevue/selectbutton";



createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-orderList', OrderList)
    .component('pv-input-text', InputText)
    .component('pv-float-label', FloatLabel)
    .component('pv-dialog', Dialog )
    .component('pv-file-upload', FileUpload)
    .component('pv-checkbox', Checkbox)
    .component('pv-dropdown', Dropdown)
    .component('pv-textarea', Textarea)
    .component('pv-progress-bar', ProgressBar)
    .component('pv-select-button',SelectButton)
    .mount('#app')
