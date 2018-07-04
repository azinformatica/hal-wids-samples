<template>
    <div>
        <titulo></titulo>
        <usuario-atual :usuario-logado="usuarioLogado"></usuario-atual>
    </div>
</template>

<script>
    import Titulo from './Titulo'
    import UsuarioAtual from './UsuarioAtual'
    import sandbox from './Sandbox';

    export default {
        components: {
            Titulo, UsuarioAtual
        },
        computed: {
            usuarioLogado() {
                return sandbox.getUserName();
            }
        }
    }
</script>
