<template>
    <h2>Você está logado como: {{ usuarioLogado }}</h2>
</template>

<script>
    export default {
        props: ['usuarioLogado']
    }
</script>

