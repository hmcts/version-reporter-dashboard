import {createApp} from 'vue';
import './assets/style.css';
import App from './App.vue';
import router from './router';
import SmartTable from 'vuejs-smart-table';

createApp(App)
    .use(SmartTable)
    .use(router)
    .mount('#app');
