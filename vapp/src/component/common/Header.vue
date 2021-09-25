<template>
  <v-app-bar
      dense
      app
      color="white"
      class="app-bar"
  >

    <v-col lg="3" md="1" cols="2" sm="2" class="ml-0 pl-0">
      <v-avatar style="width: 100%; border-radius: 0">
        <img :src="require('../../assets/logo_tall.png')"
             style="width: auto; height: 60px"
        />
        <v-spacer></v-spacer>
      </v-avatar>
    </v-col>
    <v-col lg="6" md="10" sm="8" cols="10" class="ma-0 pa-0">
      <v-row justify="center">
        <div class="hidden-xs-only">
          <span v-bind:class="activeTabGrant" @click="goToAction('/')">Субсидия</span>
          <span v-bind:class="activeTabRequests" class="ml-10" @click="goToAction('/detail')">Мои заявки</span>
          <span v-bind:class="activeTabAccount" class=" ml-10" @click="goToAction('/stats')">Статистика</span>
        </div>
        <div class="hidden-sm-and-up mt-10">
          <v-select class="menu-select" flat solo color="#5686B2" :items="menus" v-model="menu" item-value="to"
                    @input="pushUrl" item-text="name"/>
        </div>
      </v-row>
    </v-col>
    <v-col lg="3" md="1" class="hidden-sm-and-down">
      <v-row justify="end" align="center">
        <div class="account ml-1">
          ИНН: <strong>7736207543</strong> ИП Павлов Я.В.
        </div>
      </v-row>
    </v-col>
  </v-app-bar>
</template>
<script>


export default {
  name: 'Header',
  components: {},
  data: () => ({

    tabId: 1,

    menu: null,
    menus: [
      {
        name: 'Grant',
        to: '/',
        id: 1
      },
      {
        name: 'Detail',
        to: '/detail',
        id: 2,
      },
      {
        name: 'Stats',
        to: '/stats',
        id: 3,
      },
    ]
  }),


  computed: {


    activeTabGrant: function () {
      return {
        'active-tab': this.tabId === 1,
        'in-active-tab': this.tabId !== 1,
      }
    },

    activeTabRequests: function () {
      return {
        'active-tab': this.tabId === 2,
        'in-active-tab': this.tabId !== 2,
      }
    },


    activeTabAccount: function () {
      return {
        'active-tab': this.tabId === 3,
        'in-active-tab': this.tabId !== 3,
      }
    },
  },


  created() {

    let path = this.$router.history.current.path;
    let find = this.menus.find(value => value.to === path);
    if (find) {
      this.menu = find;
      this.tabId = find.id;
    }

  },


  methods: {

    goToAction(id) {

      let menu = this.menus.find(value => value.to === id);

      if (menu === this.menu)
        return;
      else {
        this.$router.push(id)
        this.menu = menu;
        this.tabId = menu.id;
      }

    },

    pushUrl(to) {
      this.$router.push(to)
    },

    clickLogo() {
      window.open('https://mos-grant.ru/', '_blank').focus();
    },

  }
  ,
}
;
</script>
<style>
.app-bar {
  box-shadow: 0 2px 4px -1px rgba(255, 255, 255, 0.2), 0 4px 5px 0 rgba(215, 214, 214, 0.14), 0 1px 10px 0 rgba(255, 255, 255, 0.12) !important;
}

.tabs {
  font-size: 25px;
}

.active-tab {
  color: #333333;
  font-size: 25px;
  font-weight: bold;
  border-bottom: 4px solid #171717;
  cursor: pointer;
}

.menu-select {
  width: 150px;
  font-size: 25px;
  color: #171717;
}

.in-active-tab {
  color: #333333;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
}

.account {
  cursor: pointer; /* Mouse pointer on hover */
  color: #686868;
  height: 35px;
  font-weight: 600;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #ECECEC;
  border-radius: 10px;
}


.logo {
  width: 400px;
  cursor: pointer;
}

</style>
