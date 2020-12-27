import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products.js'
import basket from './modules/basket.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
		products,
    basket
	},
	strict: process.env.NODE_ENV !== 'production'
})
