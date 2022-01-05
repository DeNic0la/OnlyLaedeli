<template>
  <div class="product-container">
    <v-card
        v-if="isLoaded && isValid"
        class="product"
        width="70vw"
        max-width="80vw"
        height="90vh"
    >
      <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
      </template>

      <v-img
          height="60vh"
          contain
          :src="imageSrc"
      ></v-img>

      <v-card-title>
        {{this.product.productName}}
      </v-card-title>

      <v-card-text
          class="h-400"
      >

        <div class="text-subtitle-1" :class="mainPriceCssClass">
          {{this.product.normalPrice|toMoney}}
        </div>
        <div class="text-subtitle-1 actionPrice price" v-if="product.specialOffer">
          {{this.product.specialOffer|toMoney}}
        </div>

        <div>{{this.product.description}}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
            color="deep-purple lighten-2"
            text
            @click="changeBasketCount(1)"
            v-if="productBasketCount === 0"
        >
          Zum Warenkorb hinzufügen
        </v-btn>
        <product-counter v-else :value="productBasketCount" @remove="changeBasketCount(0)" @change="changeBasketCount($event)">

        </product-counter>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>


import {URL_BACK} from "../Web.Config.js";
import ProductCounter from "../components/ProductCounter.vue";

export default {
  name: "Product",
  components:{
    ProductCounter
  },
  data: function (){
    return{
      id:parseInt(this.$route.params.id),
    }
  },
  mounted() {
  },
  methods:{
    changeBasketCount(newCount){
      this.$store.dispatch('setNewProductCount',{
        productId:this.id,
        newCount:newCount,
      });
    }
  },
  computed:{
    product(){
      return this.$store.getters.getProductById(this.id);
    },
    productBasketCount(){
      return this.$store.getters.getBasketCount(this.id)
    },
    imageSrc(){
      if (this.product.imageName){
        return `${URL_BACK}/${this.product.imageName}`;
      }
      return "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    },
    isValid(){
      return this.product?.id;
    },
    isLoaded(){
      return !(this.product === null)
    },
    mainPriceCssClass(){
      if (this.product?.specialOffer){
        return "old-price"
      }
      else {
        return "price"
      }
    },
  }

}
</script>

<style scoped>
.product-container{
  display: flex;
  align-self: center;
  justify-content: space-around;
  flex-direction: row;
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