<template>

  <v-card style="height: 100%">
    <v-card-text class="mb-0 pb-0">
    <v-data-table
        :items="items"
        :headers="headers"
        @click:row="goToDetail"
        hide-default-footer
    >


      <template v-slot:item.buttons="{item}">
        <v-btn
            icon
            color="success"
            @click="goToDetail(item)">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <div class="text-center mt-10 mb-4">
      <v-pagination
          v-model="page"
          :length="5"
          color="black"
      ></v-pagination>
    </div>
    </v-card-text>
  </v-card>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "MyRequestsTable",

  data: () => ({

    page: 1,
    headers: [
      {text: "№", value: 'number'},
      {text: "Дата заявки", value: 'date'},
      {text: "Тип субсидии", value: 'type'},
      {text: "Текущий статус", value: 'status'},
      {text: "Сумма субсидии", value: 'sum'},
      {text: "", value: 'buttons'},
    ],


    items:[
      {
        number: 16,
        id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f',
        date: '26.09.2021',
        type: 'Субсидия на онлайн-продвижение товаров, работ и услуг',
        status: 'Запрос доп. документов',
        sum: '700 000р'
      },
      {
        number: 15,
        id: '0x1bbe067bb0fc732f88f5bc487a195a3b7d94e743fb0012814a73a38d662f581f',
        date: '25.09.2021',
        type: 'Субсидия на онлайн-продвижение товаров, работ и услуг',
        status: 'Отказано',
        sum: '700 000р'
      },
      {
        number: 14,
        id: '0x1bbe067bb02c732f88f5bc487a195a3b7d94e743fb0012134a73a38d662f581f',
        date: '21.09.2021',
        orgName: 'Граница',
        type: 'Субсидии для предприятия общепита',
        status: 'Выплачена',
        sum: '400 000р'
      },
      {
        number: 13,
        id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e143fb0012834a73a38d662f581f',
        date: '29.08.2021',
        type: 'Субсидии для франчайзи',
        status: 'Выплачена',
        sum: '700 000р'
      }
    ]
  }),


  computed: {

  },

  methods: {

    goToDetail(item){
      this.$router.push({name: 'Detail', params: {id: item.id}})
    }
  }
}
</script>

<style scoped>

.blur{
  color: transparent;
  text-shadow: rgba(0, 0, 0, 0.95) 0px 0px 10px;
}
</style>
