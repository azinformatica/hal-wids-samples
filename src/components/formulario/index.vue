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
                        <div class="item">
                            <label>Justificativa</label>
                            <span>Valor invalido no item.</span>
                        </div>
                    </div>
                    <div class="actions">
                        <a class="action">Cancelar Publicação</a>
                        <a class="action-primary">Publicar</a>
                        <a class="icon">
                            <v-icon>chat</v-icon>
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
                        Lotes/Itens
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
                                        <v-dialog
                                                ref="dialog"
                                                v-model="modalHoraInicioEnvioPropostas"
                                                :return-value.sync="dataHora"
                                                persistent
                                                lazy
                                                full-width
                                                width="290px"
                                        >
                                            <v-text-field
                                                    slot="activator"
                                                    v-model="dataHora"
                                                    label="Data/Hora Inicio Envio de Propostas"
                                                    append-icon="event"
                                                    placeholder="00/00/0000 00:00"
                                                    readonly
                                            ></v-text-field>
                                            <v-date-picker v-model="dataInicioEnvioPropostas" scrollable
                                                           color="cyan darken-4"
                                                           locale="pt-br" v-show="!renderTime">
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary"
                                                       @click="modalHoraInicioEnvioPropostas = false">Cancel
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                       @click="renderTime=true">OK
                                                </v-btn>
                                            </v-date-picker>
                                            <v-time-picker
                                                    v-if="renderTime"
                                                    v-model="horaInicioEnvioPropostas"
                                                    color="cyan darken-4" v-show="renderTime"
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary"
                                                       @click="modalHoraInicioEnvioPropostas = false">Cancel
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                       @click="$renderTime=false; modalHoraInicioEnvioPropostas = false;">
                                                    OK
                                                </v-btn>
                                            </v-time-picker>
                                        </v-dialog>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-dialog
                                                ref="dialog"
                                                v-model="modalHoraInicioEnvioPropostas"
                                                :return-value.sync="dataHora"
                                                persistent
                                                lazy
                                                full-width
                                                width="290px"
                                        >
                                            <v-text-field
                                                    slot="activator"
                                                    v-model="dataHora"
                                                    label="Data/Hora Fim Envio de Propostas"
                                                    append-icon="event"
                                                    placeholder="00/00/0000 00:00"
                                                    readonly
                                            ></v-text-field>
                                            <v-date-picker v-model="dataInicioEnvioPropostas" scrollable
                                                           color="cyan darken-4"
                                                           locale="pt-br" v-show="!renderTime">
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary"
                                                       @click="modalHoraInicioEnvioPropostas = false">Cancel
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                       @click="renderTime=true">OK
                                                </v-btn>
                                            </v-date-picker>
                                            <v-time-picker
                                                    v-if="renderTime"
                                                    v-model="horaInicioEnvioPropostas"
                                                    color="cyan darken-4" v-show="renderTime"
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary"
                                                       @click="modalHoraInicioEnvioPropostas = false">Cancel
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                       @click="$renderTime=false; modalHoraInicioEnvioPropostas = false;">
                                                    OK
                                                </v-btn>
                                            </v-time-picker>
                                        </v-dialog>
                                    </v-flex>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-dialog
                                                ref="dialog"
                                                v-model="modalHoraInicioEnvioPropostas"
                                                :return-value.sync="dataHora"
                                                persistent
                                                lazy
                                                full-width
                                                width="290px"
                                        >
                                            <v-text-field
                                                    slot="activator"
                                                    v-model="dataHora"
                                                    label="Data/Hora Abertura Licitação"
                                                    append-icon="event"
                                                    placeholder="00/00/0000 00:00"
                                                    readonly
                                            ></v-text-field>
                                            <v-date-picker v-model="dataInicioEnvioPropostas" scrollable
                                                           color="cyan darken-4"
                                                           locale="pt-br" v-show="!renderTime">
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary"
                                                       @click="modalHoraInicioEnvioPropostas = false">Cancel
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                       @click="renderTime=true">OK
                                                </v-btn>
                                            </v-date-picker>
                                            <v-time-picker
                                                    v-if="renderTime"
                                                    v-model="horaInicioEnvioPropostas"
                                                    color="cyan darken-4" v-show="renderTime"
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary"
                                                       @click="modalHoraInicioEnvioPropostas = false">Cancel
                                                </v-btn>
                                                <v-btn flat color="primary"
                                                       @click="$renderTime=false; modalHoraInicioEnvioPropostas = false;">
                                                    OK
                                                </v-btn>
                                            </v-time-picker>
                                        </v-dialog>
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
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </div>
                        <div class="az-actions-form">
                            <div class="align-left">
                                <a class="action-delete">Excluir Licitação</a>
                                <a class="action-delete">Suspender Licitação</a>
                            </div>
                            <div class="align-right">
                                <a class="action-secundary">Cancelar</a>
                                <a class="action-primary" @click="estaSalvo=true">Salvar</a>
                            </div>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div class="az-form-content">
                            <v-container fluid grid-list-xl>
                                <v-layout wrap align-center>
                                    <v-flex xs12 sm3 d-flex>
                                        <v-text-field
                                                v-model="numeroEdital"
                                                required
                                                label="Número do Edital *"
                                                placeholder="Ex. 123/2018"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm12 d-flex>
                                        <span class="az-subtitle">Anexos do Edital</span>
                                    </v-flex>
                                    <v-flex xs12 sm12 d-flex>
                                        <div class="az-drop-file">
                                            <a>
                                                <v-icon>archive</v-icon>
                                                Importar Arquivos</a>
                                            <p>Arraste e solte os arquivos aqui para serem carregados.</p>
                                        </div>
                                    </v-flex>
                                    <v-flex xs12 sm12 d-flex>
                                        <v-data-table
                                                :headers="headers"
                                                :items="desserts"
                                                :loading="false"
                                                :rows-per-page-items="[10,20,50]"
                                                class="az-table-list"
                                                prev-icon="mdi-menu-left"
                                                next-icon="mdi-menu-right"
                                                sort-icon="mdi-menu-down"
                                        >
                                            <template slot="items" slot-scope="props">
                                                <td>
                                                    <v-select
                                                            :items="tiposAnexos"
                                                            v-model="tipoAnexo"
                                                            label=""
                                                            :disabled=false
                                                    ></v-select>
                                                </td>
                                                <td>
                                                    <span>{{ props.item.data }}</span>
                                                    <v-dialog
                                                            v-model="dialog"
                                                            width="500"
                                                    >
                                                        <a slot="activator" class="teste">
                                                            <v-icon>edit</v-icon>
                                                        </a>
                                                        <v-card>
                                                            <v-card-text>
                                                                teste
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                        color="primary"
                                                                        flat
                                                                        @click="dialog = false"
                                                                >
                                                                    OK
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                </td>
                                                <td>{{ props.item.nome }}</td>
                                                <td class="table-actions">
                                                    <a>
                                                        <v-icon>get_app</v-icon>
                                                    </a>
                                                    <a>
                                                        <v-icon>close</v-icon>
                                                    </a>
                                                </td>
                                            </template>
                                        </v-data-table>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div class="az-form-content">
                            <div class="az-drop-file-big" v-if="!possuiItens">
                                <a @click="possuiItens=true">Importar Planilia</a>
                                <p>Baixe o modelo e importe no botão acima.</p>
                            </div>
                            <div class="reimport-itens" v-if="possuiItens">
                                <div class="button-reimport">
                                    <a @click="possuiItens=true">
                                        <v-icon>archive</v-icon>
                                        Reimportar Planilia</a>
                                </div>
                                <div class="resume">
                                    <label>Total Unitário: </label>
                                    <span>R$ 1.234,09</span>
                                    <span class="separator">|</span>
                                    <label>Total Geral: </label>
                                    <span>R$ 12.340,90</span>
                                </div>
                            </div>
                            <div v-if="possuiItens">
                                <v-flex xs12 sm12 d-flex>
                                    <v-data-table
                                            :headers="headersItens"
                                            :items="dessertsItens"
                                            :loading="false"
                                            hide-actions
                                            class="az-table-list"
                                            sort-icon="mdi-menu-down"
                                    >
                                        <template slot="items" slot-scope="props">
                                            <td>{{ props.item.lote }}</td>
                                            <td>{{ props.item.meEpp }}</td>
                                            <td>{{ props.item.item }}</td>
                                            <td>{{ props.item.descricao }}</td>
                                            <td>{{ props.item.ficha }}</td>
                                            <td>{{ props.item.catalogo }}</td>
                                            <td>{{ props.item.unidade }}</td>
                                            <td style="text-align: right;">{{ props.item.quantidade }}</td>
                                            <td style="text-align: right;">{{ props.item.valorUnitario }}</td>
                                            <td style="text-align: right;">{{ props.item.valorTotal }}</td>
                                        </template>
                                    </v-data-table>
                                </v-flex>
                            </div>
                            <div class="reimport-itens" v-if="possuiItens">
                                <div class="button-reimport">
                                </div>
                                <div class="resume">
                                    <label>Total Unitário: </label>
                                    <span>R$ 1.234,09</span>
                                    <span class="separator">|</span>
                                    <label>Total Geral: </label>
                                    <span>R$ 12.340,90</span>
                                </div>
                            </div>
                        </div>
                    </v-tab-item>
                </v-tabs>
            </div>
        </az-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headers: [
                    {
                        text: 'Tipo',
                        align: 'left',
                        sortable: false,
                        value: 'tipo',
                        width: '250px',
                    },
                    {
                        text: 'Data',
                        align: 'left',
                        sortable: false,
                        value: 'data',
                        width: '150px',
                    },
                    {
                        text: 'Nome',
                        value: 'nome',
                        sortable: false,
                        align: 'left',
                    },
                    {
                        text: 'Ações',
                        value: 'acoes',
                        sortable: false,
                        align: 'right',
                        width: '120px',
                    }
                ],
                headersItens: [
                    {
                        text: 'Lote',
                        align: 'left',
                        sortable: true,
                        value: 'lote',
                        width: '50px',
                    },
                    {
                        text: 'ME/EPP',
                        align: 'left',
                        sortable: true,
                        value: 'meEpp',
                        width: '50px',
                    },
                    {
                        text: 'Item',
                        align: 'left',
                        sortable: true,
                        value: 'item',
                        width: '50px',
                    },
                    {
                        text: 'Descrição',
                        value: 'descricao',
                        sortable: true,
                        align: 'left',
                    },
                    {
                        text: 'Ficha',
                        value: 'ficha',
                        sortable: true,
                        align: 'left',
                        width: '50px',
                    },
                    {
                        text: 'Catálogo',
                        value: 'catalogo',
                        sortable: true,
                        align: 'left',
                        width: '50px',
                    },
                    {
                        text: 'Unidade',
                        value: 'unidade',
                        sortable: true,
                        align: 'left',
                        width: '100px',
                    },
                    {
                        text: 'Qtde',
                        value: 'quantidade',
                        sortable: false,
                        align: 'right',
                        width: '100px',
                    },
                    {
                        text: 'Unitário(R$)',
                        value: 'valorUnitario',
                        sortable: false,
                        align: 'right',
                        width: '100px',
                    },
                    {
                        text: 'Total(R$)',
                        value: 'valorTotal',
                        sortable: false,
                        align: 'right',
                        width: '100px',
                    }
                ],
                dessertsItens: [
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    },
                    {
                        lote: '001',
                        meEpp: 'Sim',
                        item: '001',
                        descricao: 'Enim maecenas duis pulvinar a posuere duis consequat et ultricies consequat arcu dapibus, donec class aliquet massa pharetra venenatis aliquet a hac amet. nunc ipsum commodo habitasse tempor, sed imperdiet.',
                        quantidade: '500,00',
                        unidade: 'Caixa',
                        ficha: 'Sim',
                        catalogo: 'Não',
                        valorUnitario: '5.289,90',
                        valorTotal: '26.449,50',
                    }
                ],
                desserts: [
                    {
                        tipo: 'Anexo',
                        data: '21/12/2018',
                        nome: 'ADMINSTRAÇÃO DE AUXILIO ALIMENTAÇÃO.pdf'
                    },
                    {
                        tipo: 'Anexo',
                        data: '22/12/2018',
                        nome: 'ATESTADO NADA CONSTA.pdf'
                    },
                    {
                        tipo: 'Anexo',
                        data: '22/12/2018',
                        nome: 'DOCUMENTO CERCA.pdf'
                    }
                ],
                numeroEdital: null,
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
                tiposAnexos: [
                    {text: "Tipo01"},
                    {text: "Tipo02"}
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
                tipoAnexo: null,
                renderTime: false,
                casaDecimal: '2',
                renderDate: true,
                name: null,
                datetime: '',
                registroPreco: null,
                modalidade: 'Pregão Eletrônico',
                tipo: null,
                numeroProcesso: null,
                tipoDisputa: null,
                tipoRecurso: null,
                dataInicioEnvioPropostas: null,
                dateFormatted: null,
                data: new Date(),
                time: new Date(),
                horaInicioEnvioPropostas: null,
                mostrarHora: false,
                modalDataInicioEnvioPropostas: false,
                modalHoraInicioEnvioPropostas: false,
                preco: null,
                valorReferencia: 1000,
                descricao: null,
                modoVisualizacao: false,
                possuiItens: false,
                estaSalvo: false,
                price: null,
                money: {
                    decimal: ',',
                    thousands: '.',
                    prefix: 'R$ ',
                    suffix: '',
                    precision: 2,
                    masked: false
                },
                methods: {
                    formatDate(dataInicioEnvioPropostas) {
                        if (!dataInicioEnvioPropostas) return null

                        const [year, month, day] = dataInicioEnvioPropostas.split('-')
                        return `${day}/${month}/${year}`;
                    }
                },
            }
        }
    };
</script>

<style lang="less">
    .reimport-itens {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-top: 10px;

        .button-reimport a {
            background-color: #d28a2C;
            color: white;
            padding: 10px 15px 10px 10px;
            border-radius: 2px;
            font-size: 13px;
            &:hover {
                background-color: lighten(#d28a2C, 10%);
                border: 1px solid lighten(#d28a2C, 10%) !important;
            }
            i {
                color: white;
                position: relative;
                top: 2px;
                font-size: 18px;
                margin-right: 5px;
            }
        }

        .resume {
            .separator {
                margin: 0 15px;
            }

            label {
                font-weight: bold;
                font-size: 13px;
                color: #777777;
            }
            span {
                font-weight: normal;
                font-size: 13px;
                color: #777777;

            }
        }
    }

    .az-table-list {
        tr {
            &:hover {
                .teste {
                    display: unset;
                }
            }
            .teste {
                display: none;
                i {
                    font-size: 16px;
                    margin-left: 10px;
                }
            }
        }
    }

    .az-container .az-table-list thead tr th {
        padding: 0 10px !important;
    }

    .az-table-list {
        .v-select__selection {
            font-size: 13px;
            color: #777;
        }
        .v-input__slot {
            margin: 0;
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 0 10px;
        }
        .v-input__slot::before {
            background-color: unset;
        }
        .v-text-field__details {
            display: none;
        }
        .v-input {
            margin: 0;
        }
        tbody tr td {
            height: unset;
            padding: 0 10px !important;
        }
        thead tr th {
            padding: 0 10px !important;
        }
    }

    .az-drop-file {
        border: 2px dashed #ccc;
        margin: 10px 0;
        padding: 30px 0 20px;
        display: block;
        align-content: center;
        align-items: center;
        text-align: center;
        background-color: #eeeeee;

        &__big {
            padding: 70px 0 60px !important;
        }

        p {
            width: 100%;
            color: #777;
            font-size: 13px;
            margin-bottom: 0;
            margin-top: 15px;
        }
        a {
            background-color: #d28a2C;
            color: white;
            padding: 10px 15px 10px 10px;
            border-radius: 2px;
            font-size: 13px;
            &:hover {
                background-color: lighten(#d28a2C, 10%);
                border: 1px solid lighten(#d28a2C, 10%) !important;
            }
            i {
                color: white !important;
                position: relative;
                top: 2px;
                font-size: 18px;
                margin-right: 5px;
            }
        }
    }

    .az-drop-file-big {
        border: 2px dashed #ccc;
        margin: 10px 0;
        padding: 70px 0 60px;
        display: block;
        align-content: center;
        align-items: center;
        text-align: center;
        background-color: #eeeeee;

        p {
            width: 100%;
            color: #777;
            font-size: 13px;
            margin-bottom: 0;
            margin-top: 15px;
        }
        a {
            background-color: #d28a2C;
            color: white;
            padding: 10px 15px 10px 10px;
            border-radius: 2px;
            font-size: 13px;
            &:hover {
                background-color: lighten(#d28a2C, 10%);
                border: 1px solid lighten(#d28a2C, 10%) !important;
            }
            i {
                color: white !important;
                position: relative;
                top: 2px;
                font-size: 18px;
                margin-right: 5px;
            }
        }
    }

    .az-subtitle {
        font-size: 16px;
        font-weight: bold;
        color: #3a6861;
        margin: 10px 0;
        border-bottom: 1px solid #ccc;
    }

    .az-actions-form {
        padding: 0 20px 30px 20px;
        justify-content: space-between;
        display: flex;
        font-size: 13px;

        .align-left {
            .action-secundary {
                padding: 10px 15px;
                margin-right: 10px;
                color: #3a6861;
                border: 1px solid #3a6861;
                border-radius: 2px;
                &:hover {
                    color: white;
                    border: 1px solid #3a6861;
                    background-color: #3a6861;
                }
            }

            .action-delete {
                padding: 10px 15px;
                margin-right: 10px;
                color: #cccccc;
                border: 1px solid #cccccc;
                border-radius: 2px;
                &:hover {
                    color: white;
                    border: 1px solid #a03232;
                    background-color: #a03232;
                }
            }
        }

        .align-right {
            .action-primary {
                padding: 10px 15px;
                border: 1px solid #7aa329;
                background-color: #7aa329;
                color: white;
                margin-left: 10px;
                border-radius: 2px;
                &:hover {
                    background-color: lighten(#7aa329, 10%);
                    border: 1px solid lighten(#7aa329, 10%);
                }
            }
            .action-secundary {
                padding: 10px 15px;
                margin-left: 10px;
                color: #777777;

                &:hover {
                    color: darkred;
                }
            }
        }
    }

</style>

