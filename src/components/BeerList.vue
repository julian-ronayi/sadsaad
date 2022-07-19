<template>
  <div style="margin-top: 100px">
    <h1>BeerList</h1>
    <ul class="beerList">
      <li
        v-for="beer in beerList"
        :key="beer.id"
      >
        <v-card
          class="mx-auto"
          max-width="344px"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            {{ beer.title }}
          </v-card-title>

          <v-card-subtitle>
            Price: {{ beer.price }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Explore
            </v-btn>

            <v-spacer>
            </v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ beer.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'BeerListComponent',
  computed: {
    beerList () {
      return this.$store.state.beerList
    }
  },
}

</script>

<style scoped>
  .beerList {
    list-style: none;
  }

  .beerList li {
    margin: 0 !important;
    width: 300px;
  }
</style>
