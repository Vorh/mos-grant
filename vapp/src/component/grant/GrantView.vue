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
          <v-col class="form  fixed">
            <v-row>
              <v-text-field dense color="black" outlined v-model="inn" label="ИНН"></v-text-field>
            </v-row>
            <v-row>
              <v-btn outlined class="btn-get" color="black" @click="getGrant">Получить</v-btn>
            </v-row>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>


import {mapActions} from "vuex";

export default {
  name: "GrantView",
  data: () => ({
    inn: null,
  }),


  computed: {},

  methods: {


    getGrant(){
      this.login(this.inn);
    }

  }

}
</script>

<style scoped>


.fixed {
  flex: 0 0 300px;
}

.form {
  background-color: #F4F5F9;
  border-radius: 8px;
}

.btn-get{
  width: 100%;
}

</style>
