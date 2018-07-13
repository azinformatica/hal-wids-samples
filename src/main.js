import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './commons/store'
import money from 'v-money'
import './commons/vendors'

Vue.config.productionTip = false

Vue.use(money, {
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    suffix: '',
    precision: 2,
    masked: true})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
