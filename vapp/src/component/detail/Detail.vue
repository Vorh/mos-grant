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
          <div class="grant-title ml-2">Заявка №16</div>
        </v-row>
        <v-row class="justify-center align-center">
          <div class="sub-title ml-2">Статус: Запрошены доп. документы</div>
          <v-btn icon color="green">
            <v-icon title="Что значит этот статус?">mdi-comment-question</v-icon>
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-col class="tabs pa-1 " lg="6">
            <button v-bind:class="activeTabCard" @click="tab = 1">Данные заявки</button>
            <button v-bind:class="activeTabDocument" @click="tab = 2 ">Статус</button>
            <button v-bind:class="activeTabCheck" @click="tab = 3 ">Проверки</button>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-5">
          <v-col class="form  fixed" lg="6">
            <Data v-if="tab === 1"/>
            <Status v-if="tab === 2"/>
            <Checks v-if="tab ===3"/>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>

import Card from "./Card";
import Document from "./Document";
import Data from "./Data";
import Checks from "./Checks";
import Status from "./Status";

export default {
  name: "Detail",
  components: {Status, Checks, Data, Document, Card},


  data:()=>({

    tab: 1,
  }),

  computed: {
    activeTabCard: function () {
      return {
        'tab-button': this.tab === 1,
        'tab-button-in-active': this.tab !== 1,
      }
    },

    activeTabDocument: function () {
      return {
        'tab-button': this.tab === 2,
        'tab-button-in-active': this.tab !== 2,
      }
    },

    activeTabCheck: function () {
      return {
        'tab-button': this.tab === 3,
        'tab-button-in-active': this.tab !== 3,
      }
    }
  },
}
</script>

<style scoped>
.tab-button-in-active {
  cursor: pointer; /* Mouse pointer on hover */
  width: 200px;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  opacity: 0.8;


}


.tab-button-in-active:hover {
  opacity: 1;
  background-color: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 5px;
}

.tab-button {
  cursor: pointer; /* Mouse pointer on hover */
  height: 40px;
  width: 200px;
  color: black;
  font-weight: 600;
  font-size: 18px;
  border-radius: 5px;
  background-color: #FFFFFF;
  border: 1px solid #ECECEC;
}
</style>
