<template>
  <v-form v-model="valid" style="margin-top: 100px">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="user.email"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="user.password"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-btn elevation="2" @click="onSubmit()">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

export default {
  name: 'LoginComponent',
  data: () => ({
    user: {},
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch('login', this.user);
      this.$route.push({ path: '/beers' });
    }
  }
}

</script>
