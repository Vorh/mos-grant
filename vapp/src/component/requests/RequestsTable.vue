<template>

  <v-card style="height: 100%">
    <v-card-text class="mb-0 pb-0">
    <v-data-table
        :items="requests"
        :headers="headers"
        @click:row="goToDetail"
        hide-default-footer
    >

      <template v-slot:item.inn = {item}>
        <span class="blur">{{item.inn}}</span>
      </template>

      <template v-slot:item.orgName = {item}>
        <span class="blur">{{item.orgName}}</span>
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
  name: "RequestsTable",

  data: () => ({

    page: 1,
    headers: [
      {text: "Дата заявки", value: 'date'},
      {text: "Тип субсидии", value: 'type'},
      {text: "Организация", value: 'orgName'},
      {text: "ИНН", value: 'inn'},
      {text: "Статус", value: 'status'},
      {text: "Сумма субсидии", value: 'sum'},
    ],
  }),


  computed: {

    ...mapGetters(['requests'])
  },

  methods: {

    goToDetail(item){
      this.$router.push({name: 'RequestDetail', params: {id: item.id}})
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
