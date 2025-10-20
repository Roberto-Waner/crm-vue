<script setup>
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/_Heading.vue'
import TdCliente from '../components/_Cliente.vue'

const clientes = ref([])

// Llamada a la API
onMounted(() => {
    consultarAPI()
})

const consultarAPI = () => {
    // Con promesas
    axios.get('http://localhost:4000/clientes')
        // .then(response => {
        //     // console.log(response.data)
        //     console.log(response)
        // })
        .then(({ data }) => clientes.value = data)
        .catch(error => console.log(`Hubo un error: ${error}`))
}

defineProps({
    titulo: {
        type: String
    }
})

const clientesExisten = computed(() => {
    return clientes.value.length > 0
})
</script>

<template>
    <div>
        <!-- <div class=""> 
            <RouterLink to="/agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div> -->

        <!-- <div class=""> otra forma de hacerlo
            <RouterLink 
            :to="{ name: 'agregar-cliente' }"
            class="block md:inline-block rounded bg-blue-600 py-2 px-3" 
        >
                Agregar Cliente
            </RouterLink>
        </div> -->

        <!-- con stylos dinamicos -->
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>

        <!-- <h1 class="text-4xl font-extrabold text-slate-500">Clientes</h1> -->
        <!-- <Heading>Listado de Clientes</Heading> -->

        <!-- aqui se recibe la prop titulo -->
        <Heading>{{ titulo }}</Heading>

        <div v-if="clientesExisten" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <TdCliente
                                v-for="cliente in clientes"
                                :key="cliente.id"
                                :cliente="cliente"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-else class="flow-root mx-auto mt-10 p-5 bg-white shadow">
            <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <p class="text-center">No hay clientes</p>
            </div>
        </div>
    </div>
</template>