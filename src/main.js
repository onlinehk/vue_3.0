import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import animate from 'animate.css'
import App from './App.vue'
import router from './router'
import store from './store/'
// import Navigation from 'vue-navigation'

// Vue.use(Navigation, { router, store });
Vue.use(BootstrapVue);
Vue.use(animate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
