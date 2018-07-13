<template>
    <div>
    	<az-toolbar>
            <div slot="actions">
                <v-btn depressed flat class="btn-primario"><v-icon>add_circle</v-icon>Novo</v-btn>
                <v-btn depressed flat class="btn-secundario"><v-icon>get_app</v-icon>Importar</v-btn>
            </div>
            <az-advanced-search slot="advanceSearch" @search="pesquisar">
                <div slot="filters" class="adSearch">
                    <div class="lista">
                        <v-select
                            :items="orgaos"
                            v-model="filters.responsavel"
                            label="Responsável">
                        </v-select>

                        <v-select
                            :items="situacoes"
                            v-model="filters.status"
                            label="Status">
                        </v-select>
                    </div>
                </div>
            </az-advanced-search>
	    </az-toolbar>

        <div class="az-datatable">
            <v-data-table
                    :headers="headers"
                    :items="items"
                    :pagination.sync="pagination"
                    hide-actions
                    class="elevation-1">
                <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{ props.item.dataAbertura }}</td>
                    <td class="text-xs-left">{{ props.item.edital }}</td>
                    <td class="text-xs-left">{{ props.item.objeto }}</td>
                    <td class="text-xs-left">{{ props.item.responsavel }}</td>
                    <td class="text-xs-left">{{ props.item.modalidade }}</td>
                    <td class="text-xs-left">{{ props.item.status }}</td>
                    <td class="justify-center layout px-0">
                        <v-btn icon class="mx-0" @click="editItem(props.item)">
                            <v-icon color="teal">edit</v-icon>
                        </v-btn>
                        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                            <v-icon color="pink">delete</v-icon>
                        </v-btn>
                    </td>
                </template>
            </v-data-table>
            <div class="az-datatable__pagination">
                <v-pagination :length="pages" v-model="pagination.page"></v-pagination>
            </div>
        </div>
      </div>
</template>
<script>

    export default {
        methods : {
            pesquisar() {
                console.log('chamou pesquisa')
            }
        },
        watch: {
            pagination: {
                handler() {
                },
                deep: true
            }
        },
        data() {
            return {
                orgaos: [
                    {
                        id: 1,
                        sigla: 'ADM'
                    },
                    {
                        id: 2,
                        sigla: 'SAD'
                    },
                                        {
                        id: 3,
                        sigla: 'SEFAZ'
                    }
                ],
                situacoes : [
                    "ABERTO",
                    "AGUARDANDO ABERTURA",
                    "ENCERRADO"
                ],
                filters: {
                    responsavel : null,
                    status : null
                },
                pagination: {rowsPerPage: 3},
                selected: [],
                headers: [
                    {text: 'Data Abertura', value: 'dataAbertura'},
                    {text: 'Edital', value: 'edital'},
                    {text: 'Objeto', value: 'objeto'},
                    {text: 'Responsável', value: 'responsavel'},
                    {text: 'Modalidade', value: 'modalidade'},
                    {text: 'Status', value: 'status'},
                    {text: 'Ações', value: 'iron', sortable: false}
                ],
                items: [
                    {
                        dataAbertura: new Date(),
                        edital: '0001/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0002/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0003/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0004/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0005/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0006/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0007/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0008/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0009/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    },
                    {
                        dataAbertura: new Date(),
                        edital: '0010/2018',
                        objeto: 'Compra de aquisição de cadeiras confortáveis com encosto reclinável.',
                        responsavel: 'SAD',
                        modalidade: 'PREGÃO ELETRÔNICO',
                        status: 'Aberto'
                    }
                ],
                pages: 2
            }
        }
    }
</script>
<style lang="less">
    .az-datatable {
        padding: 0 10px;
    }
</style>