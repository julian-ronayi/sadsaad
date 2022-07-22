import axios from 'axios';
import { API } from '../constants';

const fetchBeerList = async ({ commit }) => {
  try {
    const data = await axios.get(API.beers.getList());
    commit('SET_BEERLIST', data.data);
  } catch (error) {
    console.log(error)
  }
};

const fetchBeerById = async ({ commit }, id) => {
  try {
    const data = await axios.get(API.beers.getOne(id))
    commit('SET_BEER', data.data);
  } catch (error) {
    console.log(error);
  }
};

const createBeer = async ({ commit }, beerData) => {
  try {
    const data = await axios.post(API.beers.create(), beerData)
    commit('CREATE_BEER', data.data)
  } catch (error) {
    console.log(error)
  }
};

const deleteBeer = async ({ commit }, id) => {
  try {
    await axios.delete(API.beers.delete(id))
    commit('DELETE_BEER', id)
  } catch (error) {
    console.log(error)
  }
};

const editBeer = async ({ commit }, beerData) => {
  try {
    await axios.put(API.beers.edit(beerData._id), beerData)
    commit('EDIT_BEER')
  } catch (error) {
    console.log(error)
  }
};

const login = async ({ commit }, userData) => {
  try {
    const data = await axios.post(API.users.login(), userData)
    commit('LOGIN_USER', data.data);
  } catch (error) {
    console.log(error)
  }
};

const checkToken = async ({ commit }, token) => {
  try {
    await axios.post(API.users.checkToken(), { token })
    commit('CHECK_TOKEN', token);
  } catch (error) {
    console.log(error)
  }
};

const logout = ({ commit }) => {
  commit('LOGOUT');
};

export default {
  fetchBeerList,
  fetchBeerById,
  createBeer,
  deleteBeer,
  editBeer,
  login,
  checkToken,
  logout,
}
