<template>
  <div>
    <h1>Le Id:{{id}}</h1>
  </div>
</template>

<script>
export default {
  name: "Product",
  data: function (){
    return{
      id:this.$route.params.id,
    }
  },

}
</script>

<style scoped>

</style>