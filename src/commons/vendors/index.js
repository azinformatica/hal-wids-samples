import Vue from 'vue'
import vuetify from 'vuetify'
import wids from 'hal-wids'
import store from '../store'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(vuetify)
Vue.use(wids, {store})