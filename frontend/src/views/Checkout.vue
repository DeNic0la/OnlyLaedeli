<template>
  <div class="product-container">
    <v-card
        class="product"
        width="70vw"
        max-width="80vw"
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
        <v-form
            ref="form"
            v-model="valid"
        >
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="3"
              >
                <v-text-field
                    label="Vorname"
                    :rules="[rules.required, rules.counter]"
                    placeholder="Max">
                  <template #label>
                    Vorname <span class="red--text"><strong>* </strong></span>
                  </template>
                </v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="3"
              >
                <v-text-field
                    label="Nachname"
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
                  sm="3"
                  md="3"
              >
                <v-text-field
                    label="E-Mail"
                    type="email"
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
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data:function () {
    return{
      valid:false,
      rules: {
        required: value => !!value || 'Pflichtfeld.',
        counter: value => value?.length <= 50 || 'Max 50 zeichen',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Ungültige e-mail.'
        },
      }
    }
  },
  methods: {
    sendForm(){
      console.log("sent");
    },
    clearForm(){
      this.$refs.form.reset();
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