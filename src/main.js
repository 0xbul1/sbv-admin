import Vue from 'vue';
import { IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

// Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.component('BIcon', BIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
