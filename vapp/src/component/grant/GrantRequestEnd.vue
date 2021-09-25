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
                Заявка успешно создана!
              </v-card-title>
              <v-card-text>
                  <span>Номер вашей заявки № 16</span>

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

    },
  }
}
</script>

<style scoped>

</style>
