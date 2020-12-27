import axios from 'axios'

export default {
	namespaced: true,
	state: {
        products: []
		
	},
	getters: {
		sectionProducts: (state) => (section) => {
			return state.products[section]
		} 
	},
	mutations: {
        loadProducts(state,data){
            state.products = data
        }

	},
	actions: {
		loadProducts({commit}){
            return new Promise(function(resolve,reject){
                axios.get('http://localhost:8080/json/products.json')
                .then((response) => {
                    commit('loadProducts',response.data) 
                    resolve()      
              })
            })
        }
	}
}