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
              <product-component :description="product.description" :id="product.id" :image-name="product.imageName" :special-price="product.specialOffer" :normal-price="product.normalPrice" :product-name="product.productName">

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
import {getService} from "../service/ProductService.js";

export default {
  name: 'Home',
  components: {
    ProductComponent
  },
  data:function () {
    return {
      products: [],
      productService: getService(),
    }
  },
  computed:{

  },
  mounted() {
    this.productService.getAllProducts().then(value => {
      this.products = value;
    })
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
