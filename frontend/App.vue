<template>
    <div id="app">
    <img
      src="https://user-images.githubusercontent.com/63819200/128429048-5927eb19-b151-4855-93e3-2e0755c447a2.png"
      alt="image"
      border="0"
      width="450"
      height="auto"
    />
    <div id="nav">
     <router-link to="/comp">comp</router-link> 
</div>
    <router-view></router-view>

    
    <comp msg="you are building: frontend with vno" />
  </div>
</template>

<script>
import comp from './components/comp.vue';

export default {
  name: 'app',
  components: {comp},
};

</script>

<style>
html {
  background-color: #203A42;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #79d0b2;
  margin-top: 60px;
}
</style>