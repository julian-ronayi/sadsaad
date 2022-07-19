import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router';

loadFonts();

const store = createStore({
  state () {
    return {
      beerList: [{
        id: 1,
        title: 'Hooga',
        description: 'sdasd',
        price: 50
      }, {
        id: 2,
        title: 'Budik',
        description: '23123j',
        price: 36
      }]
    }
  },
});

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
