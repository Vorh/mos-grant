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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html {
  overflow-y: auto !important;
}

#app {
  font-family: 'Lato', sans-serif !important;
  /*font-family: 'Montserrat', sans-serif !important;*/
  /*font-family: 'Roboto Condensed', sans-serif;*/
  /*font-family: 'Nunito Sans', sans-serif !important;*/
  /*font-family: 'Fira Code', monospace !important;*/

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

.sub-title {
  font-size: 30px;
  line-height: 80px;
  font-weight: bold;
}
</style>
