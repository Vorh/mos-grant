<template>
 <div>
      <v-text-field
          v-model="orgName"
          label="Организация"
          required
          color="black"
          outlined
          dense
          readonly
      ></v-text-field>
      <v-text-field
          v-model="inn"
          label="ИНН"
          required
          color="black"
          outlined
          dense
          readonly
      ></v-text-field>
   <v-text-field
       v-model="date"
       label="Дата создания"
       required
       color="black"
       outlined
       dense
       readonly
   ></v-text-field>
      <v-text-field
          v-model="sum"
          label="Сумма"
          required
          color="black"
          outlined
          dense
          readonly
      ></v-text-field>
      <v-text-field
          v-model="typeGrant"
          outlined
          readonly
          dense
          color="black"
          label="Тип субсидии"
          required
      ></v-text-field>
 </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Card",

  data:()=>({
    date: '26.09.2021',
  }),

  computed: {
    ...mapGetters(['inn', 'orgName', 'typeGrant', 'sum'])

  }
}
</script>

<style scoped>

</style>
