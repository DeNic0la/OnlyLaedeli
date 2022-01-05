<template>
  <v-app>
    <v-app-bar app
               dense
               dark
               color="pink darken-4"
    >
      <v-toolbar-title>
        <router-link to="/" class="app-title">OnlyLädeli</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

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
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    HeaderBasketMenu,
  },
  data:function(){
    return{

    }
  },
  methods:{
    ...mapActions({
      fetchProducts: 'fetchProductsFromApi',
      fetchBasket:'fetchBasketFromApi'
    }),
  },
  created() {
    this.fetchProducts();
    this.fetchBasket();
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
.v-application .app-title{
  text-decoration: none;
  color: white;
}

.router-link-exact-active{
 // text-decoration: underline;
}
</style>
