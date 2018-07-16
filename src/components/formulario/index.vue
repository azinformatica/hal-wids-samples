<template>
    <div>
        <az-container>
            <az-internal-bar>
                <div v-bind:class="estaSalvo?'show':'hide'">
                    <div class="itens">
                        <div class="item">
                            <label>Número do Processo</label>
                            <span>000.000.001/2018</span>
                        </div>
                        <div class="item">
                            <label>Situação</label>
                            <span>Em elaboração</span>
                        </div>
                    </div>
                    <div class="actions">
                        <a class="action">Cancelar Publicação</a>
                        <a class="action-primary">Publicar</a>
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
                                                :disabled=true
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
                                            placeholder="00/00/0000 00:00"
                                            preppend-icon="event"
                                            v-model="datetime">
                                    </v-datetime-picker>
                                    </v-flex>

                                    <v-flex xs12 sm3 d-flex>
                                        <v-datetime-picker
                                                label="Data/Hora Fim Envio de Propostas"
                                                color="cyan darken-4"
                                                locale="pt-br"
                                                placeholder="00/00/0000 00:00"
                                                preppend-icon="event"
                                                v-model="datetime">
                                        </v-datetime-picker>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-datetime-picker
                                                label="Data/Hora Abertura Licitação"
                                                color="cyan darken-4"
                                                locale="pt-br"
                                                placeholder="00/00/0000 00:00"
                                                preppend-icon="event"
                                                v-model="datetime">
                                        </v-datetime-picker>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-select
                                                :items="casasDecimais"
                                                v-model="casaDecimal"
                                                label="CasasDecimais"
                                                :disabled=true
                                                value="2"
                                        ></v-select>
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
                                                v-model.lazy="preco" v-money="money"
                                                maxLength="24"
                                        ></v-text-field>
                                    </v-flex>
                                    {{precoFormatado}}
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

            <div class="az-actions-form">
                <div class="align-left">
                    <a class="action-secundary">Importar</a>
                </div>
                <div class="align-right">
                    <a class="action-secundary">Cancelar</a>
                    <a class="action-primary" @click="estaSalvo=true">Salvar</a>
                </div>
            </div>
        </az-container>
    </div>

</template>

<script>
    var accounting = require("accounting");

    export default {
        data() {
            return {
                dataHora: null,
                tipoGrupamento: [
                    {text: "Lote"}
                ],
                tiposRecurso: [
                    {text: "Bid"},
                    {text: "Bird"}
                ],
                tipoBeneficio: [
                    {text: "Diferenciado"},
                    {text: "Exclusivo"}
                ],
                casasDecimais: [
                    {text: "1"},
                    {text: "2"}
                ],
                tiposDisputa: [
                    {text: "Valor unitário"},
                    {text: "Valor Global"}
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
                    {text: "Maior Desconto"}
                ],
                pregoeiro: "Cesar Ricardo Da Silva Nelson",
                e1: null,
                e2: null,
                renderTime: false,
                casaDecimal: '2',
                renderDate: true,
                name: null,
                registroPreco: null,
                modalidade: 'Pregão Eletrônico',
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
    .az-actions-form{
        padding: 0 20px 20px 20px;
        justify-content: space-between;
        display: flex;
        font-size: 13px;

        .align-left{
            .action-secundary{
                padding: 10px 15px;
                margin-right: 10px;
                color: #3a6861;
                border: 1px solid #3a6861;
                border-radius: 2px;
                &:hover{
                    color: white;
                    border: 1px solid #3a6861;
                    background-color: #3a6861;
                }
            }
        }

        .align-right{
            .action-primary{
                padding: 10px 15px;
                border: 1px solid #7aa329;
                background-color: #7aa329;
                color: white;
                margin-left: 10px;
                border-radius: 2px;
                &:hover{
                    background-color: lighten(#7aa329, 10%);
                    border: 1px solid lighten(#7aa329, 10%);
                }
            }
            .action-secundary{
                padding: 10px 15px;
                margin-left: 10px;
                color: #777777;

                &:hover{
                    color: darkred;
                }
            }
        }
    }

</style>

