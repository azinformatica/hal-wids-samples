<template>
    <div>
        <az-container>
            <az-internal-bar>
                <div v-bind:class="estaSalvo?'show':'hide'">
                    <div class="itens">
                        <div class="item">
                            <label>Código</label>
                            <span>123</span>
                        </div>
                        <div class="item">
                            <label>Situação</label>
                            <span>Em elaboração</span>
                        </div>
                        <div class="item">
                            <label>Data/Hora criação</label>
                            <span>10/04/2018</span>
                        </div>
                    </div>
                    <div class="actions">
                        <a class="action">Devolver</a>
                        <a class="action-primary">Avançar</a>
                        <a class="icon">
                            <v-icon>get_app</v-icon>
                        </a>
                        <a class="icon">
                            <v-icon>print</v-icon>
                        </a>
                    </div>
                </div>
            </az-internal-bar>

            <div class="az-tabs">
                <v-tabs left>
                    <v-tab>
                        Dados da Licitação
                    </v-tab>
                    <v-tab :disabled=!estaSalvo>
                        Dados do Edital
                    </v-tab>
                    <v-tab :disabled=!estaSalvo>
                        Lotes
                    </v-tab>
                    <v-tab-item>
                        <div class="az-form-content">
                            <v-container fluid grid-list-xl>
                                <v-layout wrap align-center>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-text-field
                                                v-model="numeroProcesso"
                                                required
                                                label="Número do Processo"
                                                :disabled=modoVisualizacao
                                                placeholder="Ex. 000.000.123/2018"
                                                hint="Formato xxx.xxx.xxx/xxxx"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="modalidades"
                                                v-model="modalidade"
                                                label="Modalidade"
                                                :disabled=modoVisualizacao
                                                placeholder="Selecione"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="tipos"
                                                v-model="tipo"
                                                label="Tipo"
                                                :disabled=modoVisualizacao
                                                placeholder="Selecione"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="tiposDisputa"
                                                v-model="tipoDisputa"
                                                label="Disputa por"
                                                :disabled=modoVisualizacao
                                                placeholder="Selecione"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="tiposRecurso"
                                                v-model="tipoRecurso"
                                                label="Recurso"
                                                :disabled=modoVisualizacao
                                                placeholder="Selecione"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <div class="az-checkbox">
                                            <div class="checkbox-label">
                                                Registro de Preço
                                            </div>
                                            <div>
                                                <v-radio-group v-model="registroPreco" row>
                                                    <v-radio label="Sim" value=true></v-radio>
                                                    <v-radio label="Não" value=false></v-radio>
                                                </v-radio-group>
                                            </div>
                                        </div>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="tiposComissao"
                                                v-model="tipoComissao"
                                                label="Comissão"
                                                :disabled=modoVisualizacao
                                                placeholder="Selecione"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <div class="az-text">
                                            <label>
                                                Pregoeiro
                                            </label>
                                            <p>
                                                {{pregoeiro}}
                                            </p>
                                        </div>
                                    </v-flex>

                                    <v-flex xs12 sm3 d-flex>
                                    <v-datetime-picker
                                            label="Data/Hora Inicio Envio de Propostas"
                                            color="cyan darken-4"
                                            locale="pt-br"
                                            placeholder="00:00"
                                            preppend-icon="event"
                                            v-model="datetime">
                                    </v-datetime-picker>
                                    </v-flex>
                                    <v-flex xs12 sm12 d-flex>
                                        <v-textarea
                                                name="objeto"
                                                label="Objeto"
                                                placeholder="Ex. Compra de Material de Expediente"
                                                value=""
                                                required
                                                hint="Descreva o objeto do processo"
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div class="az-form-content">
                            <v-container fluid grid-list-xl>
                                <v-layout wrap align-center>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="tipoGrupamento"
                                                v-model="e1"
                                                label="Tipo de Grupamento"
                                                placeholder="Ex. Lote"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-text-field
                                                v-model="name"
                                                required
                                                label="Nome"
                                                placeholder="Lote01"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-text-field
                                                required
                                                label="Valor de Referência"
                                                placeholder="R$ 0,00"
                                                v-model.lazy="price" v-money="money"
                                                maxLength="24"
                                        ></v-text-field>
                                    </v-flex>
                                    {{priceFormatted}}
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="tipoBeneficio"
                                                v-model="e2"
                                                label="Tipo de Benefício"
                                                placeholder="Ex. Diferenciado"
                                        ></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm12 d-flex>
                                        <v-text-field
                                                v-model="descricao"
                                                required
                                                label="Descrição"
                                                placeholder="Ex. Lote único da licitação para compra de materiais de expediente"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div class="az-form-content">
                            teste aba 3
                        </div>
                    </v-tab-item>
                </v-tabs>
            </div>
        </az-container>
    </div>

</template>

<script>
    var accounting = require("accounting");

    export default {
        data() {
            return {
                tipoGrupamento: [
                    {text: "Lote"}
                ],
                tiposRecurso: [
                    {text: "Bid"}
                ],
                tipoBeneficio: [
                    {text: "Diferenciado"},
                    {text: "Exclusivo"}
                ],
                tiposDisputa: [
                    {text: "Valor unitário"},
                    {text: "Lote"}
                ],
                tiposComissao: [
                    {text: "Comissão 01"},
                    {text: "Comissão 02"},
                    {text: "Comissão 03"},
                    {text: "Comissão 04"},
                    {text: "Comissão 05"}
                ],
                tipoComissao: null,
                modalidades: [
                    {text: "Pregão Eletrônico"},
                    {text: "Pregão Presencial"}
                ],
                tipos: [
                    {text: "Menor Preço"},
                    {text: "Maior Desconto"},
                    {text: "Preço e Nota"}
                ],
                pregoeiro: "Cesar Ricardo Da Silva Nelson",
                e1: null,
                e2: null,
                renderTime: false,
                renderDate: true,
                name: null,
                registroPreco: null,
                modalidade: null,
                tipo: null,
                numeroProcesso: null,
                tipoDisputa: null,
                tipoRecurso: null,
                descricao: null,
                modoVisualizacao: false,
                estaSalvo: true,
                preco: 0,
                precoFormatado : null,
                money: {
                    decimal: ',',
                    thousands: '.',
                    prefix: 'R$ ',
                    suffix: '',
                    precision: 2,
                    masked: false
                },
                datetime:new Date()
            }
        },
        watch: {
            preco: function(val, oldVal) {
                this.precoFormatado = accounting.unformat(val,",");
            }
        }
    };
</script>

<style lang="less">

</style>

