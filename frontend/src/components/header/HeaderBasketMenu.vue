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
        B {{totalPrice}} CHF
      </v-btn>
    </template>
    <!--v-list>
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="() => {}"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list-->
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

        </template>
      </v-list>


    </v-card>
  </v-menu>
</template>

<script>
import HeaderBasketMenuListItem from "./HeaderBasketMenuListItem.vue";
import {mapActions} from "vuex";

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
    ...mapActions({
      fetchBasketFromApi: 'fetchBasketFromApi'
    })
  },
  mounted() {
    this.fetchBasketFromApi();
  }
}
</script>

<style scoped>

</style>