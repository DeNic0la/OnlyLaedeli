import Vue from 'vue'
import Vuex from "vuex";
import {Basket} from "./Basket.js";
import {Products} from "./Products.js";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Basket: Basket,
        Products: Products
    }
});
