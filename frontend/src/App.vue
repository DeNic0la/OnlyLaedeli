<template>
  <v-app>
    <v-app-bar app
               dense
               dark
               color="pink darken-4"
    >
      <v-toolbar-title>OnlyLaedeli</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          color="purple darken-1"
          elevation="4"
      >
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn
          color="purple darken-1"
          elevation="4"
      >
        <router-link to="/product">Product</router-link>
      </v-btn>
      <header-basket-menu>

      </header-basket-menu>





    </v-app-bar>

    <v-main>
      <v-container fluid>


        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>

import HeaderBasketMenu from "./components/header/HeaderBasketMenu.vue";

export default {
  name: 'App',
  components: {
    HeaderBasketMenu,
  },
  data:function(){
    return{

    }
  }
}
</script>

<style lang="scss">
.v-btn{
  margin-left: 5px;
  margin-right: 5px;

}
.v-application button a{
  color: white;
}
a{
  text-decoration: none;
}

.router-link-exact-active{
  text-decoration: underline;
}
</style>
