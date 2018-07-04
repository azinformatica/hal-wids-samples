<template>
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
</template>
<script>

    export default {
        methods: {

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