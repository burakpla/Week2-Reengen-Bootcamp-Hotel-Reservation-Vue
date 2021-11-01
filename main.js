import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from 'vuelidate';
import mitt from 'mitt';
import { router } from "./router";

const emitter = mitt();

Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  emitter,
  router,
  render: h => h(App)
}).$mount('#app')