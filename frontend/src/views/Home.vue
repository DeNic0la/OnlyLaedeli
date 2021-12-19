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
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductComponent
  },
  data:function () {
    return {

    }
  },
  computed:{
    products(){
      return this.$store.getters.getAllProducts;
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods:{
    ...mapActions({
      fetchProducts: 'fetchProductsFromApi'
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
