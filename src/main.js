import Vue from 'vue';
import App from './App.vue';
import { ValidationProvider } from 'vee-validate';
import Vuelidate from 'vuelidate'
import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faUsersCog,
  faAddressCard,
  faPortrait,
  faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt,faUsersCog,faAddressCard,faPortrait,faFileInvoiceDollar);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false;

Vue.use(Vuelidate)
Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');