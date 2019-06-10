import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/inicio';
import Usuario from './components/usuario/usuario';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    component: Inicio
  }, {
    path: '/usuario',
    component: Usuario
  }]
})