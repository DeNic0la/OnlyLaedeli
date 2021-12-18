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
        A Menu
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
          <div v-for="(item) in mytems" :key="item.title">
            <v-list-item
            >
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
export default {
  name: "HeaderBasketMenu",
  data () {
    return {
      items: [
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me 2',
        },
      ],
      mytems: [

        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `le text2`,
        },

        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `letext2`,
        },

        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: 'leText2',
        },

        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: 'le Texts',
        },

        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: 'lesos textos',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>