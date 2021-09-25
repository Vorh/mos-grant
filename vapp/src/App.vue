<template>
  <v-app id="app">
    <Header/>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>

</template>

<script>


import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
export default {
  name: 'app',
  components: {
    Header,
    Footer

  },

}
</script>

<style>


@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

html {
  overflow-y: auto !important;
}

#app {
  font-family: 'Lato', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grant-title {
  font-size: 50px;
  line-height: 80px;
  font-weight: bold;
}
</style>
