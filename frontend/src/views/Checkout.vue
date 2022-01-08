<template>
  <div class="product-container">
    <v-card
        v-if="!orderSent"
        class="product"
        :width="width"
        :max-width="width"
    >
      <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>
        Checkout
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                md="6"
                sm="12"
            >
              <v-form
                  ref="form"
                  v-model="valid"
              >
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          label="Vorname"
                          :rules="[rules.required, rules.counter]"
                          v-model="firstnameField"
                          placeholder="Max">
                        <template #label>
                          Vorname <span class="red--text"><strong>* </strong></span>
                        </template>
                      </v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          label="Nachname"
                          v-model="lastnameField"
                          :rules="[rules.required, rules.counter]"
                          placeholder="Musterman">
                        <template #label>
                          Nachname <span class="red--text"><strong>* </strong></span>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          label="E-Mail"
                          type="email"
                          v-model="emailField"
                          :rules="[rules.required, rules.counter,rules.email]"
                          placeholder="MaxMusterman@mail.ch">
                        <template #label>
                          Email <span class="red--text"><strong>* </strong></span>
                        </template>

                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-col>
            <v-col
                cols="12"
                md="6"
                sm="12"
            >
              <v-list three-line>

                <template >
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
                    </v-list-item-content>
                  </v-list-item>

                </template>
              </v-list>

            </v-col>
          </v-row>
        </v-container>

      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
            class="mr-4"
            @click="sendForm"
            :disabled="!valid"
        >
          Absenden
        </v-btn>
        <v-btn
            color="error"
            @click="clearForm"
        >
          Löschen
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
        v-else
        class="product"
        :width="width"
        :max-width="width"
    >
      <h1 class="text-center">
        Besten Dank für ihre Bestellung!
      </h1>
      <h2 class="text-center">Bestellnummer: {{orderNumber}}</h2>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import {URL_BACK} from "../Web.Config.js";
import HeaderBasketMenuListItem from "../components/header/HeaderBasketMenuListItem.vue";

export default {
  name: "Checkout",
  components:{HeaderBasketMenuListItem},
  data:function () {
    return{
      orderSent: false,
      orderNumber: 0,
      valid:false,
      rules: {
        required: value => !!value || 'Pflichtfeld.',
        counter: value => value?.length <= 50 || 'Max 50 zeichen',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Ungültige e-mail.'
        },
      },
      firstnameField: '',
      lastnameField: '',
      emailField: '',
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
    },
    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100vw';
        case 'sm': return '90vw';
        case 'md': return '80vw';
        case 'lg': return '70vw';
        case 'xl': return '70vw';
        default: return '80vw';
      }
    },
  },
  methods: {
    sendForm(){
      axios.post(`${URL_BACK}/basket/checkout`,
          {data:{
                  firstname:this.firstnameField,
                  lastname:this.lastnameField,
                  email:this.emailField,
                },
                basket:this.basket
      },{headers: {Accept: 'application/json'}})
          .then(value => {
            const data = value?.data;
            if (data?.valid){
              this.orderSent = true;
              this.orderNumber = data.orderNumber;
            }
            else{
              alert('Die eingegebenen Daten sind nicht Korrekt.');
            }

            console.log(value);
          })
      console.log("sent");
    },
    clearForm(){
      this.$refs.form.reset();
    },
    changeProductCount(productId,newCount){
      let t = {productId,newCount};
      this.$store.dispatch('setNewProductCount',t);
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

</style>