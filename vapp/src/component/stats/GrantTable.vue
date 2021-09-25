<template>

  <div>
    <v-data-table
        :items="requests"
        :headers="headers"
        hide-default-footer
    >

      <template v-slot:item.mode={item}>

        <v-chip
            :color="getModeColor(item.mode)"
            text-color="white"
        >
          {{ item.mode }}
        </v-chip>
      </template>

    </v-data-table>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "GrantTable",

  data: () => ({

    page: 1,
    headers: [
      {text: "Тип субсидии", value: 'type'},
      {text: "Фонд субсидии", value: 'sum'},
      {text: "Количество заявок", value: 'count'},
      {text: "Процент отказов", value: 'percent'},
      {text: "Сложность получения", value: 'mode'},
    ],

    requests: [
      {
        id: '0x1bbe067bb02c732f88f5bc487a195a3b7d94e743fb0012834a73a38d662f581f',
        type: 'Субсидия на онлайн-продвижение товаров, работ и услуг',
        count: '285',
        sum: '700 000 р',
        percent: '12%',
        mode: 'Легкая'
      },
      {
        id: '0x1bbe067bb0fc732f88f5bc487a195a3b7d94e743fb0012834a73a38d662f581f',
        type: 'Субсидии для предприятия общепита',
        count: '124',
        sum: '600 000 р',
        percent: '38%',
        mode: 'Средняя',

      },

      {
        id: '0x1bbe067bb02c732f88f5bc487a195a3b7d94e743fb0012834a73a38d662f581f',
        type: 'Для социальных предприятий',
        count: '102',
        sum: '600 000 р',
        percent: '57%',
        mode: 'Сложная'
      },
      {
        id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0012834a73a38d662f581f',
        type: 'Субсидии для франчайзи',
        count: '14',
        sum: '500 000 р',
        percent: '84%',
        mode: 'Очень сложная'
      },
    ],
  }),


  computed: {},

  methods: {


    getModeColor(mode) {

      switch (mode) {
        case 'Очень сложная':
          return 'red';
        case 'Сложная':
          return 'orange';
        case 'Легкая':
          return 'green';
        case 'Средняя':
          return 'info'

      }
    }
  }
}
</script>

<style scoped>

.blur {
  color: transparent;
  text-shadow: rgba(0, 0, 0, 0.95) 0px 0px 10px;
}
</style>
