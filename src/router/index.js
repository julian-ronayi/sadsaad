import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import BeerList from '../components/BeerList.vue';
import BeerView from '../components/BeerView.vue';
import CreateBeer from '../components/CreateBeer.vue';
import EditBeer from '../components/EditBeer.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/beers', name: 'BeerList', component: BeerList },
  { path: '/beers/:id', name: 'BeerView', component: BeerView },
  {
    path: '/beers/:id/edit',
    name: 'EditEdit',
    component: EditBeer,
    beforeEnter: function(to, from, next){
      const token = localStorage.getItem('token');
      if (!token) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/beers/create-beer',
    name: 'CreateBeer',
    component: CreateBeer,
    beforeEnter: function(to, from, next){
      const token = localStorage.getItem('token');
      if (!token) {
        next('/login')
      } else {
        next()
      }
    }
  },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
