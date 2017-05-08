import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'

import {routes} from './router.config'

import rem from './libs/rem'

import './assets/css/reset.css'
import './libs/rem.js'


Vue.use(Router)


const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
