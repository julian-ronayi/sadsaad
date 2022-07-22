<template>
  <v-form v-model="valid" style="margin-top: 100px">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="beer.title"
            label="Title"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="beer.price"
            label="Price"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="beer.photoUrl"
            label="Photo Url"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-checkbox
            v-model="beer.isAlcoholic"
            label="Is Alcoholic"
          ></v-checkbox>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-textarea
            v-model="beer.description"
            label="Description"
            auto-grow
          ></v-textarea>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-btn elevation="2" @click="onSubmit()">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'EditBeerComponent',
    computed: {
      ...mapState({
        beer: state => state.beer
      })
    },
    methods: {
      onSubmit() {
        const beer = this.$store.state.beer;
        this.$store.dispatch('editBeer', beer);
        this.$router.push({ path: `/beers/${beer._id}` });
      }
    },
    mounted() {
      this.$store.dispatch('fetchBeerById', this.$route.params.id);
    },
  }
</script>
