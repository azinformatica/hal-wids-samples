import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './commons/store'
import money from 'v-money'
import accounting from 'accounting'
import './commons/vendors'
import VDatetimePicker from 'vuetify-datetime-picker'

Vue.config.productionTip = false
Vue.use(VDatetimePicker)
Vue.use(accounting)
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
