<template>
  <v-menu
      bottom
      offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          class="ma-2"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon
            class="basketIcon"
        >mdi-basket</v-icon>
        {{totalPrice|toMoney}}
      </v-btn>
    </template>
    <v-card
        max-width="400"
        width="300"
    >
      <v-list three-line>
        <template >
          <v-subheader
              v-text="'Warenkorb'"
          ></v-subheader>
          <div v-for="(item) in basket" :key="item.productId">
            <header-basket-menu-list-item :id="item.productId" :product="item.product" :count="item.count" @change="changeProductCount(item.productId,$event)"  @remove="changeProductCount(item.productId,0)">

            </header-basket-menu-list-item>
            <v-divider
                :inset="true"
            ></v-divider>
          </div>

          <v-list-item>

            <v-list-item-content class="text-center justify-center">
              <v-list-item-title>Total: {{totalPrice|toMoney}}</v-list-item-title>
              <v-btn>Checkout</v-btn>
            </v-list-item-content>
          </v-list-item>

        </template>
      </v-list>


    </v-card>
  </v-menu>
</template>

<script>
import HeaderBasketMenuListItem from "./HeaderBasketMenuListItem.vue";


export default {
  name: "HeaderBasketMenu",
  components:{
    HeaderBasketMenuListItem
  },
  data () {
    return {

    }
  },
  computed:{
    basket(){
      return this.$store.getters.getBasket;
    },
    totalPrice(){
      let price = 0;
      Object.values(this.basket).forEach((value) =>{
        if (value.product){
          const {specialOffer, normalPrice} = value.product;
          const itemPrice = parseInt(specialOffer||normalPrice|| 0);
          price += itemPrice * value.count;
        }
      })

      return price;
    }
  },
  methods:{
    changeProductCount(productId,newCount){
      let t = {productId,newCount};
      this.$store.dispatch('setNewProductCount',t);
    },
  },
  mounted() {

  }
}
</script>

<style scoped>
.basketIcon{
  margin-right: 2px;
}
</style>