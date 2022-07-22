import { createStore } from 'vuex'
import actions from '../actions';

const store = createStore({
  state: () => ({
    beerList: [],
    beer: {},
    isLoggedIn: false,
  }),
  getters: {
    getBeerList: (state) => state.beerList,
    getBeerById: (state) => (id) => {
      return state.beerList.find(todo => todo.id === id);
    }
  },
  actions,
  mutations: {
    SET_BEERLIST(state, beerList) {
      state.beerList = beerList
    },
    SET_BEER(state, beer) {
      state.beer = beer
    },
    CREATE_BEER(state, beer) {
      state.beerList.push(beer);
    },
    DELETE_BEER(state, id) {
      state.beerList = state.beerList.filter(beer => beer._id !== id);
    },
    EDIT_BEER(state, beer) {
      state.beer = beer;
    },
    LOGIN_USER(state, token) {
      this.state.isLoggedIn = true;
      localStorage.setItem('token', token);
    },
    CHECK_TOKEN() {
      this.state.isLoggedIn = true;
    },
    LOGOUT() {
      localStorage.removeItem('token');
      this.state.isLoggedIn = false;
    }
  }
});

export default store;
