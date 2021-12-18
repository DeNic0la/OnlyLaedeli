import {helpers,Router} from "../deps.js";
import {URL_BACK} from "../../frontend/src/Web.Config.js";

const ApiRouter = new Router();

ApiRouter.get("/hello",context => {
    context.response.body = "Backend is Alive"
})
ApiRouter.get('/product/:id', context => {
    const { id } = helpers.getQuery(context,{mergeParams:true});
    //TODO LAURIN: Return the requested Product Object
    context.response.body = `{
        "id": ${id},
        "productName": "Demo",
        "specialOffer": 0.0,
        "normalPrice": 0.0,
        "imageName": "null.jpg",
        "description": "Hardcoded Object"
    }`;
})
ApiRouter.get('/basket/', context => {
    //TODO LAURIN: return the Basket
    context.response.body = {
        1:3,
        3:2,
        4:5,
    }; // Formatt = ID : AMOUNT
})
ApiRouter.post('/basket/:itemId', async context => {
    const {itemId} = helpers.getQuery(context, {mergeParams: true});
    const {amount} = await context.request.body().value;
    //TODO Laurin update Basket, if amount = 0 delete
})
ApiRouter.post('/basket/checkout', async context => {
    const {data, basket} = await context.request.body().value;
    //TODO Laurin Vertify Data and Basket
    context.response.body = {
        valid: true,
        errors:{},
        orderNumber:1,
    };
    //errors format = field:error message
})

export {ApiRouter};