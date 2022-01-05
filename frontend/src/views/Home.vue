<template>
  <div>
    <div class="product-container">
      <v-container>
        <v-row>
          <v-col
              :cols="cols"
              v-for="(product, index) in products" :key="index"
          >
            <v-lazy
                :options="{
                threshold: .3
              }"
                min-height="250"
                transition="expand-transition"
            >
              <product-component @click="clickOnProduct(product.id)"   :description="product.description" :id="product.id" :image-name="product.imageName" :special-price="product.specialOffer" :normal-price="product.normalPrice" :product-name="product.productName">

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
    },
    cols(){
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 12
        case 'sm': return 6
        case 'md': return 6
        case 'lg': return 4
        case 'xl': return 4
        default:
          return 4;
      }
    }
  },
  mounted() {

  },
  methods:{
    clickOnProduct(id){
      this.$router.push("product/"+id)
    }
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
