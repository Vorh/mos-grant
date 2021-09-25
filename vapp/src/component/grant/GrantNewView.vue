<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <RequestStepper/>
      <v-col
          lg="12"
          md="7"
          sm="12"
      >
        <v-row justify="center" class="mt-5">
          <v-col class="form  fixed" lg="4">

            <v-card style="height: 100%">
              <v-card-title>
                Сумма и тип субсидии
              </v-card-title>
              <v-card-text>
                <v-form
                    ref="form"
                    lazy-validation
                >
                  <v-text-field
                      v-model="sum"
                      label="Сумма"
                      required
                      color="black"
                      outlined
                      dense
                  ></v-text-field>

                  <v-select
                      dense
                      v-model="typeGrant"
                      :items="items"
                      outlined
                      color="black"
                      label="Тип субсидии"
                      required
                  ></v-select>

                  <v-btn outlined class="btn-get" color="black" @click="goToNext">Отправить</v-btn>

                </v-form>
              </v-card-text>

            </v-card>

          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>


import {mapActions, mapMutations} from "vuex";
import RequestStepper from "../requests/RequestStepper";

export default {
  name: "GrantNewView",
  components: {RequestStepper},
  data: () => ({
    sum: null,

    typeGrant: null,
    items: [
        "На онлайн-продвижение товаров, работ и услуг",
        "Для франчайзи",
        "Для резидентов технопарков и кластеров",
        "Для гостиниц и предприятий из приоритетных отраслей",
        "Для предприятий общепита",
        "Для социальных предприятий"
    ]
  }),


  computed: {},

  methods: {

    ...mapMutations(['setStep', 'setComplete1']),


    goToNext(){
      this.setStep(2);
      this.setComplete1(true)
      this.$router.push({name: "GrantDocument"});
    },

  }

}
</script>

<style scoped>



.form {
  background-color: #F4F5F9;
  border-radius: 8px;
}

.btn-get{
  width: 100%;
}

</style>
