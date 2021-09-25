<template>

  <v-card style="height: 100%">
    <v-card-text class="mb-0 pb-0">
    <v-data-table
        :items="requests"
        :headers="headers"
        hide-default-footer
    >

      <template v-slot:item.inn = {item}>
        <span class="blur">{{item.inn}}</span>
      </template>

      <template v-slot:item.orgName = {item}>
        <span class="blur">{{item.orgName}}</span>
      </template>

    </v-data-table>

    </v-card-text>
  </v-card>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "SimilarRequests",

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


  }
}
</script>

<style scoped>

.blur{
  color: transparent;
  text-shadow: rgba(0, 0, 0, 0.95) 0px 0px 10px;
}
</style>
