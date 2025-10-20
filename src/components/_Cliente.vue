<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    // defineProps({
    //     cliente: {
    //         type: Object
    //     }
    // })

    const props = defineProps({
        cliente: {
            type: Object
        }
    })

    const nombreCliente = computed(() => {
        return props.cliente.nombre + ' ' + props.cliente.apellido
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

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink></RouterLink>
        </td>
    </tr>
</template>