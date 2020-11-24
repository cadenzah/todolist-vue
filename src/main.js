import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import { conditional } from './directives';
Vue.directive('conditional', conditional);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
