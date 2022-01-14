import axios from "axios";
import {URL_BACK} from "../Web.Config.js";
const leAxios = axios.create({
    withCredentials: true,
    baseURL: `${URL_BACK}`
});
export const Products = {
    state: () => ({
        products:[],
        loading: false,
    }),
    mutations: {
        updateProducts(state, payload){
            state.products = payload.products;
        },
        setLoading(state, payload){
            state.loading = payload.loading;
        }
    },
    actions: {
        fetchProductsFromApi({commit}){
            new Promise(resolve => {
                leAxios.get(`/products.json`, {headers: {Accept: 'application/json'}}).then(value => {
                    if (value.status === 200) {
                        resolve(value.data)
                    } else {
                        resolve([]);
                        return [];
                    }
                })
            }).then(r =>{
                commit('updateProducts',{products:r});
            })
        },
    },
     getters: {
        getAllProducts: state => {
            return state.products;
        },
        getProductById: (state) => (id) => {
            return state.products.find(product => product.id === id)
        }
    }
}