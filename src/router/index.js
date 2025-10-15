import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/_ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  /* 
    archivo router/index.js define las rutas de tu aplicación 
    Vue.js. En este caso, estás configurando una única ruta:
  */
  routes: [
    {
      path: '/', /* Especifica que esta ruta corresponde a la raíz de tu dominio (por ejemplo, http://localhost:5173/). */
      name: 'inicio', /* Asigna un nombre a la ruta. por ejemplo, al usar router-link o al navegar programáticamente con router.push(). */
      component: Inicio, /* Especifica el componente que se renderizará cuando el usuario navegue a esta ruta. En este caso, se renderizará el componente Inicio que has importado desde ../views/_ClientesView.vue. */
      props: { titulo: 'Listado de Clientes' } /* Pasa props al componente Inicio. En este caso, estás pasando una prop llamada titulo con el valor 'Listado de Clientes'. Esto permite que el componente Inicio reciba datos dinámicos desde la ruta. */
    },
    {
      path: '/agregar',
      name: 'agregar-cliente',
      component: () => import('../views/_NuevoClienteView.vue'),
      props: { titulo: 'Agregar CLiente' }
    }
  ],
})

export default router

/* cuando un usuario visita la raíz de tu aplicación, Vue Router renderizará el componente Inicio. */

/* 
  Ruta inicio (/): El componente Inicio se carga junto con el código principal de tu aplicación desde el principio.

  Ruta agregar-cliente (/agregar-cliente): El componente _NuevoClienteView.vue solo se descargará y cargará cuando el usuario visite la ruta /agregar-cliente por primera vez.
*/