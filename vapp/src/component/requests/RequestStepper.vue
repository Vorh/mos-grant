<template>
  <v-col lg="8">
  <v-stepper non-linear :value="step">
    <v-stepper-header>
      <v-stepper-step
          step="1"
          color="black"
          :complete="complete1"
      >
        Сумма и тип субсидии
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
          step="2"
          color="black"
          :complete="complete2"
      >
        Документы
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
          step="3"
          color="black"
          :complete="complete3"
      >
        Проверка и отправка
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
  </v-col>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "RequestStepper",

  computed:{
    ...mapGetters(['complete3', 'complete2', 'complete1', 'step'])
  }
}
</script>

<style scoped>

</style>
