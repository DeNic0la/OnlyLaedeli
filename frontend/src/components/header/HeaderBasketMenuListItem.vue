<template>
  <v-list-item>
    <v-list-item-avatar
        :tile="true"
    >
      <v-img :src="imageSrc"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{product.productName || ''}}</v-list-item-title>
      <v-list-item-subtitle>
        <product-counter :value="count" @change="$emit('change', $event)"  @remove="$emit('remove')">

        </product-counter>
        <div>{{itemPrice}} CHF</div>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import {URL_BACK} from "../../Web.Config.js";
import ProductCounter from "../ProductCounter.vue";

export default {
  name: "HeaderBasketMenuListItem",
  components:{
    ProductCounter
  },
  props:{
    id:{
      type:Number,
      required:true
    },
    count:{
      type:Number,
      required:true,
    },
    product:{
      type:Object,
      required:true,
    },
  },
  computed:{
    imageSrc(){
      if (this.product?.imageName){
        return `${URL_BACK}/${this.product.imageName}`;
      }
      return "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    },
    itemPrice(){
      if (this.product.specialOffer){
        return this.product.specialOffer*this.count;
      }
      return this.product.normalPrice*this.count;
    }
  },
  data: function () {
    return{

    }
  },
  methods:{},
}
</script>

<style scoped>

</style>