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
      <v-row class="ma-1">
        <p>Заявке присвоен
          <v-chip>№ 16</v-chip>
          <v-chip class="ml-1">26.09.2021 12:05</v-chip>
        </p>
      </v-row>
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
      <v-row class="ma-1">
        <p>Сотрудник
          <v-chip>Шаруев А.А.</v-chip>
          взял Вашу заявку в работу.
        </p>
      </v-row>
    </v-stepper-content>

    <v-stepper-step
        editable
        complete
        step="4"
        edit-icon="mdi-check"
        color="black"
    >
      <p class="pa-0 ma-0">Проверка <v-chip class="check-chip" color="green">Московская прописка</v-chip>
        пройдена</p>
    </v-stepper-step>

    <v-stepper-content step="4">
    </v-stepper-content>


    <v-stepper-step
        editable
        complete
        step="5"
        edit-icon="mdi-check"
        color="black"
    >
      <p class="pa-0 ma-0">Проверка <v-chip class="check-chip" color="warning">Российское гражданство</v-chip>
        не пройдена</p>
    </v-stepper-step>
    <v-stepper-content step="5">
    </v-stepper-content>

    <v-stepper-step
        editable
        complete
        step="6"
        edit-icon="mdi-check"
        color="black"
    >
      <p class="pa-0 ma-0">Проверка <v-chip class="check-chip" color="green">Возраст бизнеса </v-chip>
        пройдена</p>
    </v-stepper-step>
    <v-stepper-content step="6">
    </v-stepper-content>

    <v-stepper-step
        editable
        complete
        step="7"
        edit-icon="mdi-check"
        color="black"
    >
      <p class="pa-0 ma-0">Проверка <v-chip class="check-chip" color="warning">Надежность</v-chip>
        не пройдена</p>
    </v-stepper-step>
    <v-stepper-content step="7">
    </v-stepper-content>

    <v-stepper-step
        editable
        complete
        step="8"
        edit-icon="mdi-check"
        color="black"
    >
      <p class="pa-0 ma-0">Проверка <v-chip class="check-chip" color="info">Наличие долгов </v-chip>
        в процессе </p>
    </v-stepper-step>
    <v-stepper-content step="8">
    </v-stepper-content>

    <v-stepper-step
        editable
        color="black"
        :rules="[() => false]"
        step="9">
      Запрошены доп. документы
    </v-stepper-step>
    <v-stepper-content step="9">
      <DocumentUploader/>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import GrantDocument from "../grant/GrantDocument";
import DocumentUploader from "./DocumentUploader";
import {mapGetters} from "vuex";

export default {
  name: "Status",
  components: {DocumentUploader, GrantDocument},

  computed: {
    ...mapGetters(['sum', 'typeGrant', 'inn', 'orgName']),
  },
  data: () => ({

    step: 10,

  }),
}
</script>

<style scoped>
.no-transition {
  transition: none !important;
}
.check-chip{
  color: black !important;
}
</style>
