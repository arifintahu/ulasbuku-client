<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" class="mb-4" v-if="!signin">
        <h1 class="display-2 font-weight-bold mb-3">
          Great to have you
        </h1>
        <div class="my-3">
          <v-btn x-large color="primary" width="300" @click.prevent="signin=true">Sign In</v-btn>
        </div>
        <div>
          <v-btn x-large color="primary" width="300"  :to="{ name : 'Register'}">Register</v-btn>
        </div>
      </v-col>

      <v-col class="mb-4 justify-center d-flex" v-if="signin">
        <form>
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn x-large color="primary" width="300" @click.prevent="signinClick">Sign In</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Signin',
  data: () => ({
    signin: false,
    email: '',
    password: ''
  }),
  methods: {
    signinClick(){
      this.$store.dispatch('setUser', 'arifintahu')
        .then(() => {
          this.$router.push({ name : 'Home' })
        })
      console.log(this.email, this.password);
    }
  }
}
</script>
