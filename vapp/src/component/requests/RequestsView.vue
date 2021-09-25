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
          <div class="grant-title ml-2">Мои заявки на субсидии</div>
        </v-row>

        <v-row justify="center" class="mt-15">
          <v-col class="form  fixed " lg="6">
            <MyRequestsTable/>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import MyRequestsTable from "./MyRequestsTable";
export default {
  name: "RequestsView",
  components: {MyRequestsTable },
  data: () => ({


  }),
}
</script>

<style scoped>

</style>
