import Vue from 'vue';
import Router from 'vue-router';

import Inicio from './components/inicio';
import Usuario from './components/usuario/usuario';

import UsuarioLista from './components/usuario/usuarioLista';
import UsuarioDetalhe from './components/usuario/usuarioDetalhe';
import UsuarioEditar from './components/usuario/usuarioEditar';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }
  },
  routes: [{
    path: '/',
    component: Inicio
  }, {
    path: '/usuario',
    component: Usuario,
    props: true,
    children: [
      { path: '', component: UsuarioLista },
      { path: ':id', component: UsuarioDetalhe, props: true },
      { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
    ]
  }, {
    path: '/redirecionar',
    redirect: '/usuario'
  }, {
    path: '*',
    redirect: '/'
  }]
})