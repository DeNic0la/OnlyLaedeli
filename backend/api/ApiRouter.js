import {helpers,Router, Session} from "../deps.js";
import {BasketManager} from "./BasketManager.js";

const ApiRouter = new Router();
const session = new Session();
let Basket = new BasketManager();
export let SessionForApp = session.initMiddleware();



ApiRouter.get("/hello",context => {
    context.response.body = "Backend is Alive"
})
ApiRouter.post('/basket/checkout', async context => {
    const {data, basket} = await context.request.body().value;
    console.log(data);
    console.log(basket);
    //TODO Laurin Vertify Data and Basket
    context.response.body = {
        valid: true,
        errors:{},
        orderNumber:1,
    };
    //errors format = field:error message
})
ApiRouter.get('/basket/', async context => {
    context.response.body = await Basket.getBasket(context);
})
ApiRouter.post('/basket/:itemId', async context => {
    const {itemId} = helpers.getQuery(context, {mergeParams: true});
    const {amount} = await context.request.body().value;
    //TODO Laurin update Basket, if amount = 0 delete

    context.response.body = {
        1:3,
        3:2,
        4:5,
    }; // Formatt = ID : AMOUNT
    //TODO VERY IMPORTANT! Return new Basket
})


export {ApiRouter};