import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home'
import Form from './components/formulario'
import Usuario from './components/usuario'
import Listagem from './components/orgao/listagem'

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
        component: Listagem,
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: Form,
    }


  ]
})
