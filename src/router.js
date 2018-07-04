import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home'
import Usuario from './components/usuario'
import Orgao from './components/orgao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cadastro/usuario',
      name: 'usuario',
      component: Usuario,
    },
    {
        path: '/cadastro/orgao',
        name: 'orgao',
        component: Orgao,
    }
  ]
})
