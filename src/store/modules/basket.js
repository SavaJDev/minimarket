import axios from 'axios'

export default {
	namespaced: true,
	state: {
        basket: []
		
	},
	getters: {
        /*проверка на наличие товара в корзине*/
        inCart: (state) => (id) => state.basket.some((el) => el.id === id),
        /*количество видов товара в корзине*/
		cnt(state) {
            return state.basket.length;
        },
        total(state){
            return state.basket.reduce((total,item) => {
                return total + item.price * item.cnt
            },0)
        }
		
	},
	mutations: {
        /*добавление товара в корзину*/
        add(state,product){
            state.basket = [
                ...state.basket,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price, 
                    cnt: 1
                }    
            ]
        },
        /*удаление товара из корзины*/
        remove(state, id){
            state.basket = state.basket.filter((el) => el.id !== id)
        },
        /*если товар уже есть в корзине, то увеличивается его количество*/
        changeCntOne(state, id){
            let index = state.basket.findIndex((el) => el.id === id);
            state.basket[index].cnt = ++state.basket[index].cnt;
        },
        /*изменение количества товара в корзине через поле input*/
        changeCnt(state, data){
			let index = state.basket.findIndex((el) => el.id === data.id);
			let cnt = data.cnt;

			if(isNaN(cnt) || cnt < 1){
				cnt = 1;
			}

			state.basket[index].cnt = cnt;
		},
	},
	actions: {
		add({commit,getters}, product){
			return new Promise(function(resolve, reject){
                if(!getters.inCart(product.id)){
                    commit('add', product);
					resolve();
                } else {
                    commit('changeCntOne', product.id);
					resolve();
                }
					
			});
        },
        remove({commit,getters}, product){
			return new Promise(function(resolve, reject){
				if(getters.inCart(product.id)){
					commit('remove', product.id);
					resolve();
				}
				
			});
        },
        changeCnt({commit,getters}, data){
			return new Promise(function(resolve, reject){
				if(getters.inCart(data.id)){
					commit('changeCnt', data);
					resolve();
				}
			});
		},
	}
}