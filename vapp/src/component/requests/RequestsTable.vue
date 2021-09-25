<template>

  <div>
    <v-data-table
        :items="requests"
        :headers="headers"
        @click=""
        hide-default-footer
    >

    </v-data-table>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "RequestsTable",

  data: () => ({

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
}
</script>

<style scoped>

</style>
