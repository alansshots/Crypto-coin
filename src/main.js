import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'flowbite'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js/auto'
import '@/plugins/apexcharts'

Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
