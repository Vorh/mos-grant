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
              <v-card-title>Подписание и отправка</v-card-title>
              <v-card-text>
                <span class="text-start mb-2">Проверьте еще раз введенные данные</span>
                <v-form
                    class="mt-2"
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

                  <v-expansion-panels class="ma-0 pa-0 box">
                    <v-expansion-panel
                    >
                      <v-expansion-panel-header>
                        Обязательные документы (4)
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel
                    >
                      <v-expansion-panel-header>
                        Необязательные документы (2)
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>

                  <v-btn outlined class="btn-get mt-10" color="black" @click="goToNext">Подписать и отправить</v-btn>
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
import RequestStepper from "../requests/RequestStepper";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "GrantSendRequest",
  components: {RequestStepper},

  computed: {
    ...mapGetters(['sum', 'typeGrant'])
  },

  methods: {

    ...mapMutations(['setComplete3', 'setStep']),

    goToNext() {
      this.setStep(4);
      this.setComplete3(true);
      this.$router.push({name: 'GrantRequestEnd'})
    },
  }
}
</script>

<style scoped>

</style>
