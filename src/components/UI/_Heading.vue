<template>
    <h1 class="text-4xl font-extrabold text-slate-500">
        <slot></slot>
    </h1>       
</template>

<!-- 
    <slot> es un espacio reservado que un componente hijo (como _Heading.vue) 
    define para que el componente padre que lo utiliza pueda "inyectar" su 
    propio contenido HTML o texto en ese lugar.

    Permite que un componente padre (el que usa a _Heading.vue) "inyecte" su 
    propio contenido (como texto u otro HTML) dentro de este componente hijo.

    Así, _Heading.vue define el estilo del <h1>, y el <slot> permite que el 
    texto del título sea diferente cada vez que lo usas.
-->