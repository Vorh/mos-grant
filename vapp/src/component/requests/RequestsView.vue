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
          <div class="grant-title ml-2">Мои заявки на субсидию</div>
        </v-row>

        <v-row justify="center" class="mt-15">
          <v-col class="form  fixed " lg="6">
            <RequestsTable/>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import RequestsTable from "./RequestsTable";
export default {
  name: "RequestsView",
  components: {RequestsTable},
  data: () => ({


  }),
}
</script>

<style scoped>

</style>
