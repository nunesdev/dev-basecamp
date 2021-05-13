import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage, {
  name: 'ls'
})

import './assets/sass/app.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true
});

import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')