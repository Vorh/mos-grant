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
export default {
  name: "Card",

  data:()=>({
    orgName: 'ООО Яндекс',
    inn: '7736207543',
    sum: '700 000 р',
    typeGrant: 'На онлайн-продвижение товаров, работ и услуг'
  }),
}
</script>

<style scoped>

</style>
