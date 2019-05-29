import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'


// import VueRouter from 'vue-router'
import App from "./App.vue";
import { store } from './_store';
import { router } from './_helpers';
import VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(VeeValidate)
Vue.use(BootstrapVue)



// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
