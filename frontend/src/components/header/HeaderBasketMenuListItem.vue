<template>
  <v-list-item>
    <v-list-item-avatar
        :tile="true"
    >
      <v-img :src="item.avatar"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{item.title}}</v-list-item-title>
      <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "HeaderBasketMenuListItem",
  props:{
    id:{
      type:Number,
      required:true
    },
    image:{
      type:String,
      required:false
    },
    name:{
      type:String,
      required:true
    }
  },
}
</script>

<style scoped>

</style>