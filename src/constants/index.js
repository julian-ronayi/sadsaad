const BASE_URL = process.env.VUE_APP_BASE_URL;

export const API = {
  beers: {
    getOne: (id) => `${BASE_URL}/beers/${id}`,
    getList: () => `${BASE_URL}/beers`,
    create: () => `${BASE_URL}/beers`,
    edit: (id) => `${BASE_URL}/beers/${id}`,
    delete: (id) => `${BASE_URL}/beers/${id}`,
  },
  users: {
    login: () => `${BASE_URL}/users/login`,
    checkToken: () => `${BASE_URL}/users/check-token`,
  }
}
