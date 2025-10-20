<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    // defineProps({
    //     cliente: {
    //         type: Object
    //     }
    // })

    defineEmits(['actualizar-estado', 'eliminar-cliente'])

    const props = defineProps({
        cliente: {
            type: Object
        }
    })

    const nombreCliente = computed(() => {
        return props.cliente.nombre + ' ' + props.cliente.apellido
    })

    const estadoCliente = computed(() => {
        return props.cliente.estado
    })
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <!-- <p class="font-medium text-gray-900">{{ cliente.nombre }} {{ cliente.apellido }}</p> -- forma normal -->
            
            <!-- con computed -->
            <p class="font-medium text-gray-900">{{ nombreCliente }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-600">{{ cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <!-- {{ cliente.estado }} -->
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[estadoCliente ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('actualizar-estado', {id: cliente.id, estado: cliente.estado})"
            >
                {{ estadoCliente ? 'Activo' : 'Inactivo' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink 
                :to="{ name: 'editar-cliente', params: { idCliente: cliente.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
            >
            <!-- Parte de params, tambine puedes usar query o sino hash:
                params = cliente/1,
                query = cliente?id=1,
                hash = cliente#id=1
            -->
                Editar
            </RouterLink>

            <button 
                class="text-red-600 hover:text-red-900"
                @click="$emit('eliminar-cliente', cliente.id)"
            >
                Elimiar
            </button>
        </td>
    </tr>
</template>