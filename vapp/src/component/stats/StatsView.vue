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
          <div class="grant-title ml-2">Статистика</div>
        </v-row>

        <v-row class="justify-center align-center ">
          <div class="sub-title ml-2">Обзор заявок и информация по различным субсидиям</div>
        </v-row>

        <v-row justify="center" class="mt-15">
          <v-col class="form  fixed " lg="6">
            <GrantTable/>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>

import GrantTable from "./GrantTable";


export default {
  name: "StatsView",
  components: {GrantTable},

  data: () => ({


  }),
}
</script>

<style scoped>

</style>
