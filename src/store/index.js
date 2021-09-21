import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: [],
  },
  mutations: {
    loadProducts(state, products) {
      console.log(products)
      state.products = products
    },
    addToBag(state, product) {
      state.productsInBag.push(product)
    },
    removeFromBag(state, productId) {
      const updatedBag = state.productsInBag.filter(
        item => productId != item.id
      )
      state.productsInBag = updatedBag
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products').then(response => {
        commit('loadProducts', response.data)
      })
    },
    addToBag({ commit }, product) {
      commit('addToBag', product)
    },
    removeFromBag({ commit }, productId) {
      if (confirm('Quer remover do carrinho?')) {
        commit('removeFromBag', productId)
      }
    },
  },
  modules: {},
})
