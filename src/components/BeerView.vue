<template>
  <div style="margin-top: 100px">
    <h1>{{ beer.title }}</h1>
    <h3>{{ beer.price }}</h3>
    <v-img
      v-bind:src="beer.photoUrl"
      height="200px"
    ></v-img>
    <div>
      <p>{{ beer.description }}</p>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'BeerViewComponent',
    computed: {
      ...mapState({
        beer: state => state.beer
      })
    },
    mounted() {
      this.$store.dispatch('fetchBeerById', this.$route.params.id);
    },
  }
</script>
