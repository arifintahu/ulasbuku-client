<template>
  <v-container>
    <v-row class="text-center">

      <v-col cols="12" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Register
        </h1>
      </v-col>
      <v-col class="mb-4 justify-center d-flex">
        <form>
          <v-text-field
            v-model="fullname"
            label="Full Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn x-large color="primary" width="300" @click.prevent="submit">Register</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Register',
  data: () => ({
    fullname: '',
    email: '',
    password: ''
  }),
  methods: {
    submit(){
      console.log(this.fullname);
      this.$router.push({ name : 'Signin' });
    }
  }
}
</script>
