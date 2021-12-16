<template>
  <div>
    <div class="product-container">
      <v-container>
        <v-row>
          <v-col
              cols="4"
              v-for="(product, index) in products" :key="index"
          >
            <v-lazy
                :options="{
                threshold: .3
              }"
                min-height="250"
                transition="expand-transition"
            >
              <product-component :description="product.description" :special-price="product.specialOffer" :normal-price="product.normalPrice" :product-name="product.productName">

              </product-component>
            </v-lazy>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>

import ProductComponent from "../components/ProductComponent.vue";
import Products from "../assets/products_big.json"

export default {
  name: 'Home',
  components: {
    ProductComponent
  },
  data:function () {
    return{
      products:Products,
    }
  },
  computed:{

  },
  mounted() {

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
</style>
