import axios from "axios";
import {URL_BACK} from "../Web.Config.js";
class ProductService {

    constructor() {
        this.url = ";";
        this.products = this.getAllProducts();
    }
    getAllProducts(){
        return new Promise(resolve => {

            axios.get(`${URL_BACK}/products.json`, {headers: {Accept: 'application/json'}}).then(value =>  {
                if (value.status === 200) {
                    resolve(value.data)
                }
                else {
                    resolve([]);
                    //TODO Show Error
                    return [];
                }
            })
        })
        /*return /*.then(value => {
            if (value.status === 200) {
                return value.data;
            }
            else {
                //TODO Show Error
                return [];
            }
        });*/
        //return this.products;
    }
    getProductById(idToGet){
        const find = parseInt(idToGet);
        for (let productsKey in this.products) {
            let prod = this.products[productsKey];
            if (parseInt(prod.id) === find){
                return prod;
            }
        }
    }

}
const service = new ProductService();
export function getService(){
    return service;
}
