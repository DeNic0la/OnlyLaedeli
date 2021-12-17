//import axios from "axios";
import Products from "../assets/products.json"
class ProductService {

    constructor() {
        this.url = ";";
        this.products = Products;
    }
    getAllProducts(){
        return this.products;
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
