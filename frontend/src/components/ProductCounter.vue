<template>
  <v-text-field
    :value="leVal"
    filled
    rounded
    dense
    type="number"
    class="shrink inputAmount"
    @change="doChange"
    :rules="basketRules"
    append-icon="mdi-plus" @click:append="increment" :prepend-inner-icon="minusIcon" @click:prepend-inner="decrement"
  >

  </v-text-field>

  <!--v-input-number v-model="input"  ></v-input-number-->

</template>

<script>
export default {
  name: "ProductCounter",
  props:{
    value:{
      type: Number,
      required:true,
    }
  },
  model:{
    prop: 'value',
    event: 'change'
  },
  data: function () {
    return{
      input: 1,
      basketRules: [
        v => (v >= 0) || 'Muss Positiv sein',
      ]
    }
  },
  computed:{
    leVal(){
      return this.value;
    },
    minusIcon(){
      if (this.value > 1){
        return "mdi-minus";
      }
      else {
        return "mdi-trash-can-outline";
      }
    }
  },
  emits:['remove'],
  methods: {
    doChange(newVal){
      if (newVal >= 0 ){
        this.$emit('change', parseInt(newVal,10));
      }
      else {
        this.$emit('remove');
      }
    },
    increment () {
      this.doChange(parseInt(this.value,10) + 1);
    },
    decrement () {
      this.doChange(parseInt(this.value,10) - 1);
    }
  }

}
</script>

<style scoped>
.inputAmount >>> input{
  max-width: 40px;
}
/*Hiding input Arrows*/
.inputAmount >>> input::-webkit-outer-spin-button,
.inputAmount >>> input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.inputAmount >>> input[type=number] {
  -moz-appearance: textfield;
}
</style>