<template>

  <div>
    <v-data-table
        :items="requests"
        :headers="headers"
        @click:row="goToDetail"
        hide-default-footer
    >

    </v-data-table>

    <div class="text-center mt-10">
      <v-pagination
          v-model="page"
          :length="5"
          color="black"
      ></v-pagination>
    </div>
  </div>
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

</style>
