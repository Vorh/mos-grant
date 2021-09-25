<template>

  <div>
    <v-data-table
        :items="requests"
        :headers="headers"
        @click:row="goToDetail"
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

  methods: {

    goToDetail(item){
      this.$router.push({name: 'RequestDetail', params: {id: item.id}})
    }
  }
}
</script>

<style scoped>

</style>
