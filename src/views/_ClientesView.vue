<script setup>
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/_Heading.vue'
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
         <Heading>Listado de Clientes</Heading>
    </div>        
</template>