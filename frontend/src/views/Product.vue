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
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>
        {{this.product.productName}}
      </v-card-title>

      <v-card-text
          class="h-400"
      >

        <div class="text-subtitle-1" :class="mainPriceCssClass">
          {{this.product.normalPrice}} CHF
        </div>
        <div class="text-subtitle-1 actionPrice price" v-if="product.specialOffer">
          {{this.product.specialOffer}} CHF
        </div>

        <div>{{this.product.description}}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
            color="deep-purple lighten-2"
            text
        >
          Zum Warenkorb hinzufügen
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>


import {mapActions} from "vuex";

export default {
  name: "Product",
  data: function (){
    return{
      id:parseInt(this.$route.params.id),
//      product: {},
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods:{
    ...mapActions({
      fetchProducts: 'fetchProductsFromApi'
    })
  },
  computed:{
    product(){
      return this.$store.getters.getProductById(this.id);
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