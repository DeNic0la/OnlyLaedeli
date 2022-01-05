<template>
  <v-card
      :loading="loading"
      class="product"
      max-width="35vw"
      height="500px"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        contain
        height="250"
        :src="imageSrc"
    ></v-img>

    <v-card-title>
      {{this.productName}}
    </v-card-title>

    <v-card-text
      class="h-400"
    >

      <div class="text-subtitle-1" :class="mainPriceCssClass">
        {{this.normalPrice}} CHF
      </div>
      <div class="text-subtitle-1 actionPrice price" v-if="specialPrice">
        {{this.specialPrice}} CHF
      </div>

      <div>{{this.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="addToBasket"
      >
        Zum Warenkorb hinzufügen
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>


import {URL_BACK} from "../Web.Config.js";

export default {
  name: "ProductComponent",
  props:{
    id:{
      type:Number,
      required:false,
    },
    productName:{
      type:String,
      required:true,
    },
    normalPrice:{
      type:Number,
      required:true,
    },
    specialPrice:{
      type:Number,
      required:false,
    },
    imageName:{
      type:String,
      required:false,
    },
    description:{
      type:String,
      required:true,
    }
  },
  methods:{
    addToBasket(){
      console.log("Added to basket");

    }
  },
  data:function () {
    return{
      loading:false,
    }
  },
  computed:{
    mainPriceCssClass(){
      if (this.specialPrice){
        return "old-price"
      }
      else {
        return "price"
      }
    },
    imageSrc(){
      if (this.imageName){
        return `${URL_BACK}/${this.imageName}`;
      }
      return "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    }
  }
}
</script>

<style scoped>
.product{
  margin: 5px;
}
.h-400{
  height: 120px;
}
.price{
  font-weight: bolder;
}
.actionPrice{
  color: ForestGreen;
}
.old-price{
  text-decoration: line-through;
}
</style>