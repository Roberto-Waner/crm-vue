<script setup>
    // import { RouterLink } from 'vue-router'
    import { reactive } from 'vue'
    import axios from 'axios'
    import { FormKit } from '@formkit/vue'
    import { useRoute, useRouter} from 'vue-router'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/_Heading.vue'

    // const route = useRoute() obtener información de la ruta actual
    const router = useRouter() // para redireccionar a otra ruta

    // console.log(route)
    // console.log(route.fullPath)
    // console.log(route.hash)
    // console.log(route.name)
    // console.log(router)

    defineProps({
        titulo: {
            type: String
        }
    })

    // para inicializar el formulario con datos
    // const formData = {
    //     nombre: 'Roberto'
    // }

    // de la misma forma se puede hacer con ref
    /*const formData = reactive({
        nombre: 'Roberto'
    })*/

    const handleSubmit = (data) => {
        // console.log(data)
        axios.post('http://localhost:4000/clientes', data)
            // .then(response => console.log(response))
            .then(response => {
                console.log(response)
                //Redireccionar
                // window.location.href = '/' recarga la pagina con javascript
                // router.push('/')
                router.push({ name: 'inicio' })
            })
            .catch(error => console.log(`Hubo un error: ${error}`))
    }
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
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Agregar Cliente"
                    incomplete-message="Por favor, completa todos los campos obligatorios"
                    @submit="handleSubmit"
                >
                    <!-- :value="formData" para inicializar el formulario con datos-->
                    <!-- :actions="false" para remover el botón de submit que saler por defecto en FormKit-->
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del Cliente" 
                        validation="required"
                        :validation-messages="{ required: 'El Nombre del cliente es obligatorio' }"
                    />
                        <!-- 
                            prefix-icon="avatarMan" para poner un icono al inicio del input
                            validation-visibility="submit" para que las validaciones se muestren solo al enviar el formulario
                            validation-visibility="blur" para que las validaciones se muestren al salir del input
                            validation-visibility="live" para que las validaciones se muestren mientras se escribe
                            validation-visibility="dirty" para que las validaciones se muestren si el input ha sido modificado
                            :validation-messages="{ required: 'El Nombre del cliente es obligatorio' }" para personalizar los mensajes de error
                            help="Coloca el nombre del cliente" para poner un mensaje debajo del input
                        -->

                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del Cliente" 
                        validation="required"
                        :validation-messages="{ required: 'El Apellido del cliente es obligatorio' }"
                    />

                    <FormKit 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email del Cliente" 
                        validation="required|email"
                        :validation-messages="{ required: 'El Email del cliente es obligatorio', email: 'Coloca un email válido' }"
                    />

                    <FormKit 
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Teléfono: XXX-XXX-XXXX" 
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El Formato no es válido' }"
                    />

                    <!-- 
                        rule in
                        "+": Indica que el campo es opcional. Si el campo está vacío, no se aplican las demás reglas de validación.
                        "*": Indica que el campo es obligatorio. Si el campo está vacío, se aplican las demás reglas de validación.
                        matches: Indica que el valor del campo debe coincidir con la expresión regular proporcionada
                        "|": Se utiliza para separar múltiples reglas de validación. Por ejemplo, "required|email" significa que el campo es obligatorio y debe ser un email válido.
                        "?": Indica que este campo es opcional. Siempre y cuando el campo esté vacio, pero si tiene algún valor, debe cumplir con las demás reglas de validación.
                    -->

                    <FormKit 
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa del Cliente"
                    />

                    <FormKit 
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del Cliente"
                    />

                    <!-- <FormKit ------------ para agregar un botón de submit ------------
                        type="submit" 
                        label="Agregar Cliente"
                    /> -->
                </FormKit>
                <!-- 
                    <FormKit> es un componente de la librería FormKit para Vue.js. 
    
                    Funciona como un contenedor (equivalente a la etiqueta <form>) 
                    que agrupa todos los campos de entrada (inputs) y se encarga de 
                    gestionar automáticamente la validación, los mensajes de error y 
                    el envío de los datos del formulario.

                    Cuando se usa FormKit, no es necesario usar el preventDefault() 
                    en el evento submit, ya que FormKit lo maneja internamente.
                -->

            </div>
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

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>