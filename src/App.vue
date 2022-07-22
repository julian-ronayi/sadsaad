<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        color="#6A76AB"
        dark
        prominent
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-toolbar-title style="color: white">Beer Application</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <div v-bind:style="{ color: white }" class="tabs">
              <router-link to="/"><v-tab>Home</v-tab></router-link>
              <router-link to="/beers"><v-tab>Beer List</v-tab></router-link>
              <router-link to="/about"><v-tab>About</v-tab></router-link>
              <router-link v-if="isLoggedIn" to="/beers/create-beer"><v-tab>Create Beer</v-tab></router-link>
              <router-link v-if="!isLoggedIn" to="/login"><v-tab>Login</v-tab></router-link>
              <v-tab v-if="isLoggedIn" @click="logout">Logout</v-tab>
            </div>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="2000px"
      >
        <v-container style="height: 1000px;">
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-card>
    </v-app>
  </template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'AppComponent',
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn
    })
  },
  mounted() {
    const token = localStorage.getItem('token')
    this.$store.dispatch('checkToken', token);
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$route.push({ path: '/' });
    }
  }
}

</script>

<style scoped>
  .tabs a {
    text-decoration: none;
    color: white;
  }
</style>
