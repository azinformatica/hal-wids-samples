import Vue from 'vue'
import vuetify from 'vuetify'
import wids from 'hal-wids'
import store from '../store'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(vuetify)
Vue.use(wids, {store})

Vue.use(vuetify, {
  theme: {
    primary: '#000000',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})