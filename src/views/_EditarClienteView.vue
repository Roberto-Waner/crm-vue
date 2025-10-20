<script setup>
    import { onMounted, reactive, ref } from 'vue'
    import { FormKit } from '@formkit/vue'
    import { useRouter, useRoute } from 'vue-router'
    import ClienteService from '../services/_ClienteServices'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/_Heading.vue'

    const router = useRouter() // para redireccionar a otra ruta
    const route = useRoute()

    const { idCliente } = route.params

    // const formData = reactive({
    //     nombre: '',
    //     apellido: '',
    //     email: '',
    //     telefono: '',
    //     empresa: '',
    //     puesto: ''
    // })

    const formData = reactive({})
    // const formData = ref({}) --- usando tambien con "ref"

    onMounted(() => {
        ClienteService.obtenerCliente(idCliente)
            .then(({data}) => {
                // formData.nombre = data.nombre
                // formData.apellido = data.apellido
                // formData.email = data.email
                // formData.telefono = data.telefono
                // formData.empresa = data.empresa
                // formData.puesto = data.puesto

                //en vez de todo esto puesdes usar Object.assign(formData, data)
                Object.assign(formData, data)

                // otra forma pero con ref para el mapio
                // formData.value = data
            })
            .catch(error => console.log(`Hubo un error: ${error}`))
    })
    
    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) => {
        ClienteService.actualizarCliente(idCliente, data)
            .then(() => router.push({ name: 'inicio'}))
            .catch(error => console.log(`Hubo un error: ${error}`))
    }
</script>

<template>
    <div>

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
                    submit-label="Guardar Cambios"
                    incomplete-message="Por favor, completa todos los campos obligatorios"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del Cliente" 
                        validation="required"
                        :validation-messages="{ required: 'El Nombre del cliente es obligatorio' }"
                        v-model="formData.nombre"
                    />

                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del Cliente" 
                        validation="required"
                        :validation-messages="{ required: 'El Apellido del cliente es obligatorio' }"
                        v-model="formData.apellido"
                    />

                    <FormKit 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email del Cliente" 
                        validation="required|email"
                        :validation-messages="{ required: 'El Email del cliente es obligatorio', email: 'Coloca un email válido' }"
                        v-model="formData.email"
                    />

                    <FormKit 
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Teléfono: XXX-XXX-XXXX" 
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El Formato no es válido' }"
                        v-model="formData.telefono"
                    />

                    <FormKit 
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa del Cliente"
                        v-model="formData.empresa"
                    />

                    <FormKit 
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del Cliente"
                        v-model="formData.puesto"
                    />
                </FormKit>

            </div>
        </div>
    </div>        
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>