<template>
    <div>
        <az-toolbar>
            <div slot="actions">
                <a class="btn btn-primary">
                    <v-icon>add_circle</v-icon>
                    Novo</a>
                <a class="btn btn-alternative">
                    <v-icon>get_app</v-icon>
                    Importar</a>
            </div>
            <az-search slot="simpleSearch"></az-search>
            <az-advanced-search slot="advanceSearch">
                <div slot="filters" class="adSearch">
                    <div class="lista">
                        <v-select
                                :items="situacoes"
                                v-model="e1"
                                placeholder="Ex. Em elaboração"
                                multiple
                                label="Situações"
                        ></v-select>

                        <v-select
                                :items="orgaos"
                                placeholder="Ex. Órgão01"
                                v-model="e2"
                                label="Órgão"
                        ></v-select>

                        <v-text-field
                                id="objeto"
                                placeholder="Ex. Caneta"
                                name="input-1"
                                label="Objeto"
                        ></v-text-field>
                    </div>
                </div>
            </az-advanced-search>
        </az-toolbar>
        <az-container>
            <az-form>
                <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :loading="false"
                        :rows-per-page-items="[5,10,20,50]"
                        class="az-table-list"
                        prev-icon="keyboard_arrow_left"
                        next-icon="keyboard_arrow_right"
                        sort-icon="keyboard_arrow_down"
                >
                    <template slot="items" slot-scope="props">
                        <tr :class="{'background-active': props.item.status === 'Em Andamento'}">
                            <td>{{
                                props.item.dataHoraAbertura }}
                            </td>
                            <td>{{
                                props.item.numeroEdital }}
                            </td>
                            <td>{{ props.item.objeto
                                }}
                            </td>
                            <td>{{
                                props.item.responsavel }}
                            </td>
                            <td>{{
                                props.item.modalidade }}
                            </td>
                            <td :class="{'status-active': props.item.status === 'Em Andamento', 'status': props.item.status !== 'Em Andamento'}">
                                <span v-if="props.item.status !== 'Em Andamento'">{{ props.item.status }}</span>
                                <a v-if="props.item.status === 'Em Andamento'">{{ props.item.status }}
                                    <v-icon>play_arrow</v-icon>
                                </a>
                            </td>
                            <td class="table-actions">
                                <v-tooltip top>
                                    <a slot="activator">
                                        <v-icon>search</v-icon>
                                    </a>
                                    <span>Visualizar</span>
                                </v-tooltip>
                                <v-tooltip top>
                                    <a slot="activator">
                                        <v-icon>edit</v-icon>
                                    </a>
                                    <span>Editar</span>
                                </v-tooltip>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </az-form>
        </az-container>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                situacoes: [
                    {text: "Selecione"},
                    {text: "Em Elaboração"},
                    {text: "Enviado"},
                    {text: "Recebido"},
                    {text: "Finalizado"},
                    {text: "Estornado"}
                ],
                orgaos: [
                    {text: "SAD"},
                    {text: "SES"},
                    {text: "SED"},
                    {text: "DETRAN"}
                ],
                e1: null,
                e2: null,
                headers: [
                    {
                        text: 'Data/Hora Abertura',
                        align: 'left',
                        sortable: false,
                        value: 'dataHoraAbertura',
                        width: '150px',
                    },
                    {
                        text: 'Num. Edital',
                        align: 'left',
                        sortable: false,
                        value: 'numeroEdital'
                    },
                    {
                        text: 'Objeto',
                        value: 'objeto',
                        sortable: false,
                        align: 'left',
                    },
                    {
                        text: 'Responsavel',
                        value: 'responsavel',
                        sortable: false,
                        align: 'left'
                    },
                    {
                        text: 'Modalidade',
                        value: 'modalidade',
                        sortable: false,
                        width: '180px',
                        align: 'left'
                    },
                    {
                        text: 'Status',
                        value: 'status',
                        sortable: false,
                        width: '150px',
                        align: 'left'
                    },
                    {
                        text: 'Ações',
                        align: 'right',
                        sortable: false,
                        width: '80px'
                    }
                ],
                desserts: [
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Em Andamento'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    },
                    {
                        value: false,
                        dataHoraAbertura: '21/12/2018 08:00:00',
                        numeroEdital: '0001/2018',
                        objeto: 'OBJETO DO PROCESSO LICITATÓRIO PARA COMPRA DE PRODUTOS',
                        responsavel: 'AGEPAN',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Publicada'
                    }
                ]
            };
        }
    };
</script>

<style lang="less">
    .az-container .az-table-list tbody tr:nth-child(even) {
        background-color: white !important;
        &:hover {
            background-color: #eee !important;
        }
    }

    .background-active {
        background-color: #f0edc6;
        &:hover {
            background-color: darken(#f0edc6, 10%) !important;
        }
    }

    .status {
        span {
            color: #777777;
            i {
                display: none;
            }
        }
    }

    .status-active {
        a {
            text-decoration: underline;
            position: relative;
            top: -5px;
            color: #c6762b;
            i {
                position: relative;
                top: 5px;
                font-size: 26px;
                color: #c6762b !important;
            }
        }
    }

</style>

