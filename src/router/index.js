import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import BeerList from '../components/BeerList.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/beers', name: 'BeerList', component: BeerList },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
