import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createApp } from 'vue';
import App from './App.vue';
import { store } from './vuex/root.store';

const app = createApp(App);
app.use(antd).use(store).mount('#app');
