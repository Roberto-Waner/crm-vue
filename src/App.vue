<script setup>
    import { RouterView } from 'vue-router'
</script>

<template>
    <header class="bg-slate-800">
        <div class="mx-auto max-w-6xl py-10">
            <h1 class="text-4xl font-extrabold text-white">Administrador de CLientes</h1>
        </div>
    </header>

    <main class="max-w-6xl mx-auto mt-10">
        <!-- el componente <RouterView /> sirve como un marcador de posición donde se renderizará el componente correspondiente 
            a la ruta actual. En otras palabras, muestra la vista que has configurado en tu enrutador (router/index.js) para la URL a la 
            que el usuario ha accedido. -->
        <RouterView /> 
    </main>

</template>