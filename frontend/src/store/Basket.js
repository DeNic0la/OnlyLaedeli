import axios from "axios";
import {URL_BACK} from "../Web.Config.js";
export const Basket = {
    state: {
        basket:{},
        loading: false,
    },
    mutations: {
        updateBasket(state, {payload}){
            state.basket = payload.basket;
        },

        setLoading(state, payload){
            state.loading = payload.loading;
        }

    },
    actions: {
        fetchBasketFromApi({commit}){
            new Promise(resolve => {
                axios.get(`${URL_BACK}/basket/`, {headers: {Accept: 'application/json'}}).then(value => {
                    if (value.status === 200) {
                        resolve(value.data)
                    } else {
                        resolve({});
                    }
                })
            }).then(r =>{
                commit('updateBasket',{payload:{basket:r}});
            })
        },
        setNewProductCount({commit, getters},details){
            let id = details.productId;
            let count = details.newCount;
            new Promise(resolve => {
                axios.post(`${URL_BACK}/basket/${id}`, {headers: {Accept: 'application/json'},
                    data:{
                        itemId:id,
                        amount:count,
                    }},).then(value => {
                    if (value.status === 200) {
                        resolve(value.data)
                    } else {
                        resolve({});
                    }
                })
            }).then(r =>{
                commit('updateBasket',{payload:{basket:r},getters});
            })
        }
    },
    getters: {
        getBasket(state, rootGetters) {
            let basket = state.basket;
            let newBasket = {};
            for (const [key, value] of Object.entries(basket)){
                let id = parseInt(key);
                let product = rootGetters.getProductById(id);
                let entry = {productId:id,count:parseInt(value),product:product};
                newBasket[key] = entry;
            }
            return newBasket;
        },
    }
}