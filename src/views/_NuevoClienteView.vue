<script setup>
    // import { RouterLink } from 'vue-router'
    import { FormKit } from '@formkit/vue'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/_Heading.vue'

    defineProps({
        titulo: {
            type: String
        }
    })
</script>

<template>
    <div>
        <!-- <div class="">
            <RouterLink 
                :to="{ name: 'inicio' }"
                class="block md:inline-block rounded bg-blue-600 py-2 px-3"  
            >
                Volver
            </RouterLink>
        </div> -->

        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <FormKit
                type="form"
            >

            </FormKit>
            <!-- 
                <FormKit> es un componente de la librería FormKit para Vue.js. 

                Funciona como un contenedor (equivalente a la etiqueta <form>) 
                que agrupa todos los campos de entrada (inputs) y se encarga de 
                gestionar automáticamente la validación, los mensajes de error y 
                el envío de los datos del formulario.
            -->
        </div>
    </div>        
</template>

<!-- 
    Es el equivalente a la etiqueta <a> de HTML, pero para aplicaciones de una sola página (SPA) 
    hechas con Vue. Su principal ventaja es que evita que la página se recargue por completo.

    :to="{ name: 'inicio' }": Esta es la parte más importante. Le dice al router a qué ruta navegar. 
    En este caso, en lugar de usar una URL directa como /, está usando el nombre de la ruta ('inicio') 
    que definiste en tu archivo router/index.js. Esto es una buena práctica porque si cambias la URL (path) en el futuro, 
    no necesitas actualizar tus enlaces.

    Renderizado: Vue Router lo convertirá en una etiqueta <a href="/">Volver</a> en el HTML final.

    Navegación: Cuando un usuario hace clic en el enlace "Volver", vue-router intercepta el evento, 
    previene la recarga de la página, actualiza la URL en la barra de direcciones del navegador y 
    renderiza el componente asociado a la ruta 'inicio' (en este caso, Inicio.vue) dentro de tu <RouterView />.
-->