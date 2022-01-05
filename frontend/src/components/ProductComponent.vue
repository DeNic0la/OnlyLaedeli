<template>

  <v-card
      :loading="loading"
      class="product"

      height="500px"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <div class="pointerclass" @click="$emit('click')">
      <v-img
          contain
          height="250"
          :src="imageSrc"
      ></v-img>
    </div>


    <v-card-title>
      <div class="pointerclass" @click="$emit('click')">
        {{this.productName}}
      </div>
    </v-card-title>

    <v-card-text
        class="h-400"
    >

      <div class="text-subtitle-1" :class="mainPriceCssClass">
        {{this.normalPrice|toMoney}}
      </div>
      <div class="text-subtitle-1 actionPrice price" v-if="specialPrice">
        {{this.specialPrice|toMoney}}
      </div>

      <div>{{this.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="changeBasketCount(1)"
          v-if="basketCount === 0"
      >
        Zum Warenkorb hinzufügen
      </v-btn>
      <product-counter v-else :value="basketCount" @remove="changeBasketCount(0)" @change="changeBasketCount($event)">

      </product-counter>
    </v-card-actions>
  </v-card>
</template>

<script>


import {URL_BACK} from "../Web.Config.js";
import ProductCounter from "../components/ProductCounter.vue";

export default {
  name: "ProductComponent",
  components:{
    ProductCounter
  },
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

    changeBasketCount(newCount){
      this.$store.dispatch('setNewProductCount',{
        productId:this.id,
        newCount:newCount,
      });
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
    },
    basketCount(){
      return this.$store.getters.getBasketCount(this.id)
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
.pointerclass{
  cursor:pointer;
}
</style>