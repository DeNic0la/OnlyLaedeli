<template>
  <v-app>
    <v-app-bar app>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/product">Product</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>


        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
