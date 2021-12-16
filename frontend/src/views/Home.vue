<template>
  <div>
    <product-component v-for="(product, index) in products" :key="index" :description="product.description" :normal-price="product.normalPrice" :product-name="product.productName">

    </product-component>
  </div>

</template>

<script>

import ProductComponent from "../components/ProductComponent.vue";
import Products from "../assets/products.json"

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
  mounted() {
    console.log(Products);
  }
}
</script>
