import './bootstrap';
import Vue from 'vue';
import './plugins/axios';
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false


Vue.use(router);
Vue.use(store);

new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    render: h => h(App),
});
