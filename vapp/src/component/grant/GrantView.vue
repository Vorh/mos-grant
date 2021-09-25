<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          lg="12"
          md="7"
          sm="12"
      >
        <v-row class="justify-center align-center pt-15">
          <div class="grant-title ml-2">Желаете получить субсидию?</div>
        </v-row>

        <v-row justify="center" class="mt-15">
          <v-col class="form  fixed" lg="3">

            <v-card style="height: 100%">
              <v-card-text>
                  <v-text-field dense color="black" outlined v-model="inn" label="ИНН"></v-text-field>
                  <v-btn outlined class="btn-get" color="black" @click="getGrant">Начать оформление субсидии</v-btn>
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

export default {
  name: "GrantView",
  data: () => ({
    inn: null,
  }),


  computed: {},

  methods: {

    ...mapActions(['resetSteps', 'login']),
    ...mapMutations(['setStep']),

    getGrant(){
      this.resetSteps();
      this.login(this.inn);
      this.setStep(1);
      this.$router.push({name: 'GrantData'})
    }

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
