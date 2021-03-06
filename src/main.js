import Vue from 'vue';
import App from './App.vue';
import { ValidationProvider } from 'vee-validate';
import Vuelidate from 'vuelidate'
import { router } from './router';
import store from './store';
import moment from 'moment';
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
  faFileInvoiceDollar,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt,faUsersCog,faAddressCard,faPortrait,faFileInvoiceDollar,faShoppingCart);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false;
Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});
Vue.use(Vuelidate)
Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');