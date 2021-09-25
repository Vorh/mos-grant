<template>
  <v-card style="height: 100%">
    <v-card-title>Данные заявки</v-card-title>
    <v-card-text class="mb-0 pb-0">
      <Card/>
    </v-card-text>
    <v-card-title class="mt-2 pt-0">Документы</v-card-title>
    <v-card-text>
      <Document/>
    </v-card-text>
  </v-card>
</template>

<script>
import Document from "./Document";
import Card from "./Card";
export default {
  name: "Data",
  components: {Card, Document}
}
</script>

<style scoped>

</style>
