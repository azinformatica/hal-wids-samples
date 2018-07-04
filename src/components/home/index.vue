<template>
  <div>
  	<az-toolbar>
		<div slot="actions">
		<v-btn depressed flat class="btn-primario"><v-icon>add_circle</v-icon>Novo</v-btn>
		<v-btn depressed flat class="btn-secundario"><v-icon>get_app</v-icon>Importar</v-btn>
		</div>
		<div slot="adSearch1" class="adSearch">
            <div class="lista">
                <v-select
                    :items="situacoes"
                    v-model="e1"
                    multiple
                    label="Situações"
                ></v-select>

                <v-select
                    :items="orgaos"
                    v-model="e2"
                    label="Órgão"
                ></v-select>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>

                <v-text-field
                    id="testing"
                    name="input-1"
                    label="Label Text"
                ></v-text-field>
            </div>
		</div>
	</az-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      situacoes: [
        { text: "Selecione" },
        { text: "Em Elaboração" },
        { text: "Enviado" },
        { text: "Recebido" },
        { text: "Finalizado" },
        { text: "Estornado" }
      ],
      orgaos: [
        { text: "SAD" },
        { text: "SES" },
        { text: "SED" },
        { text: "DETRAN" }
      ],
      e1: null,
      e2: null
    };
  }
};
</script>

