<template>
  <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>
      {{this.productName}}
    </v-card-title>

    <v-card-text>

      <div class="my-4 text-subtitle-1">
        {{this.normalPrice}}
      </div>

      <div>{{this.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="addToBasket"
      >
        Zum Warenkorb hinzufügen
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductComponent",
  props:{
    id:{
      type:Number,
      required:false,
    },
    productName:{
      type:String,
      required:true,
    },
    normalPrice:{
      type:Number,
      required:true,
    },
    specialPrice:{
      type:Number,
      required:false,
    },
    imageName:{
      type:String,
      required:false,
    },
    description:{
      type:String,
      required:true,
    }
  },
  methods:{
    addToBasket(){
      console.log("Added to basket");
    }
  },
  data:function () {
    return{
      loading:false,
    }
  }
}
</script>

<style scoped>

</style>