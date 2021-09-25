<template>
  <v-card>
    <v-card-title> {{ title }}
    </v-card-title>
    <v-card-text>
      <div class="ml-3">
        <v-row justify="start">
             <span class="text-start">
               {{ desc }}
            </span>
        </v-row>
        <v-row justify="start" align="start">
          <v-switch :loading="loadingStatus" inset :color="colorSwitch" :label="switchLabel" v-model="valueSwitch"
                    readonly></v-switch>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Check",

  props: {
    title: {
      type: String,
    },

    desc: {
      type: String,
    },
    result: {
      type: Number,
    },

  },

  computed: {

    loadingStatus: function (){

      if (this.result === 3)
        return 'info'
      else
        return null
    },

    colorSwitch: function() {

      switch (this.result) {
        case 1:
          return 'green';
        case 2:
          return 'red';
        case 3:
          return 'black'
      }
    },

    valueSwitch: function () {
      if (this.result === 1)
        return true;
      else
        return true;
    },

    switchLabel: function () {

      switch (this.result) {
        case 1:
          return 'Проверка пройдена'
        case 2:
          return 'Проверка не пройдена'
        case 3:
          return 'Проверка в процессе'
      }

    }
  },

  methods: {

  }

}
</script>

<style scoped>

</style>
