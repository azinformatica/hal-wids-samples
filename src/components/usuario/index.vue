<template>
    <div>
        <titulo></titulo>
        <usuario-atual :usuario-logado="usuarioLogado"></usuario-atual>

        <v-datetime-picker
                label="Select Datetime"
                :datetime="datetime"
                v-model="datetime">
        </v-datetime-picker>
    </div>
</template>

<script>
    import Titulo from './Titulo'
    import UsuarioAtual from './UsuarioAtual'
    import sandbox from './Sandbox';

    import VDatetimePicker from 'vuetify-datetime-picker';

    export default {
        components: {
            Titulo, UsuarioAtual, VDatetimePicker
        },
        data() {
            return {
                datetime: ""
            }
        },
        computed: {
            usuarioLogado() {
                return sandbox.getUserName();
            }
        }
    }
</script>
