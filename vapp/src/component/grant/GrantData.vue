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
                  <v-select
                      dense
                      v-model="typeGrant"
                      :items="items"
                      outlined
                      color="black"
                      label="Тип субсидии"
                      required
                  ></v-select>

                  <v-text-field
                      :disabled="!typeGrant"
                      v-model="sum"
                      color="black"
                      label="Сумма"
                      :hint="hint"
                      loading
                      dense
                      outlined
                  >
                    <template v-slot:progress>
                      <v-progress-linear
                          :value="progress"
                          :color="color"
                          absolute
                          height="7"
                      ></v-progress-linear>
                    </template>
                  </v-text-field>

                  <v-btn outlined :disabled="!enableSendBtn" class="btn-get" color="black" @click="goToNext">Отправить</v-btn>

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


import {mapActions, mapGetters, mapMutations} from "vuex";
import RequestStepper from "../requests/RequestStepper";

export default {
  name: "GrantData",
  components: {RequestStepper},
  data: () => ({

    sum: '',
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


  computed: {


    enableSendBtn(){
      return this.sum && this.typeGrant && this.color !== 'error'
    },

    hint (){
      if (this.typeGrant)
        return 'Максимальная сумму субсидирования 700 000 р'
      else
        return '';
    },

    progress () {
      return Math.min(100, this.sum.length * 18)
    },
    color () {

      let number = parseInt(this.sum.trim().split(' ').join(''));

      if(number >= 700001)
        return 'error';

      if (number > 650000)
        return 'warning';

      if (number <= 100000)
        return 'success';

      if (number > 100000)
        return 'success';


    },

  },

  methods: {

    ...mapMutations(['setStep', 'setComplete1', "setSum", 'setTypeGrant']),


    goToNext(){
      this.setSum(this.sum + ' р');
      this.setTypeGrant(this.typeGrant);
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
