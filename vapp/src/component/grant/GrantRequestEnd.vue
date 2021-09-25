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
              </v-card-title>
              <v-card-title primary-title class="justify-center">
                <div>
                  <h5 class="headline text--accent-2">Заявка успешно отправлена!</h5>
                  <h3>Номер заявки № 16</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <v-row justify="center" align="center">
                  <div>
                    <v-img class="text-center" width="250" height="250" :src="require('../../assets/qr-code.jpg')"/>
                  </div>
                </v-row>
                <v-btn outlined class="btn-get mt-10" color="black" @click="goToNext">Открыть</v-btn>
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

export default {
  name: "GrantRequestEnd",
  components: {RequestStepper},


  methods: {

    goToNext() {
      this.$router.push({
        name: 'Detail',
        params: {id: '0x1bbe067bb0fc732188f5bc487a195a3b7d94e743fb0011834a73a38d662f581f'}
      })
    },
  }
}
</script>

<style scoped>

</style>
