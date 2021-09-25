<template>
  <v-stepper
      v-model="step"
      vertical
      class="no-transition"
  >
    <v-stepper-step
        complete
        step="1"
        editable
        edit-icon="mdi-check"
        color="black"
    >
      Заявка создана
    </v-stepper-step>

    <v-stepper-content step="1" class="no-transition"
    >
      <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
      ></v-card>
    </v-stepper-content>

    <v-stepper-step
        editable
        complete
        color="black"
        edit-icon="mdi-check"


        step="2"
    >
      Заявка отправлена
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
      ></v-card>
    </v-stepper-content>

    <v-stepper-step
        editable
        complete
        step="3"
        edit-icon="mdi-check"
        color="black"
    >
      Заявка взята в работу
    </v-stepper-step>

    <v-stepper-content step="3">
      <p>Сотрудник Шаруев А.А. взял Вашу заявку в работу.
      </p>
      <p>
        Ожидайте результатов проверки.
      </p>
    </v-stepper-content>

    <v-stepper-step
        editable
        color="black"
        :rules="[() => false]"
        step="4">
      Запрошены доп. документы
    </v-stepper-step>
    <v-stepper-content step="4">
      <DocumentUploader/>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import GrantDocument from "../grant/GrantDocument";
import DocumentUploader from "./DocumentUploader";
export default {
  name: "Status",
  components: {DocumentUploader, GrantDocument},
  data: () => ({

    step: 4,

  }),
}
</script>

<style scoped>
.no-transition {
  transition: none !important;
}
</style>
