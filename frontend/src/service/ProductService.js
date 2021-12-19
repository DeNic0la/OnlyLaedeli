import axios from "axios";
import {URL_BACK} from "../Web.Config.js";
class ProductService {

    constructor() {
        this.url = ";";
        this.products = this.getAllProducts();
    }
    getAllProducts(){
        return
    }
    getProductById(idToGet){
        return new Promise(resolve => {

            axios.get(`${URL_BACK}/product/${idToGet}`, {headers: {Accept: 'application/json'}}).then(value =>  {
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
    }

}
const service = new ProductService();
export function getService(){
    return service;
}
