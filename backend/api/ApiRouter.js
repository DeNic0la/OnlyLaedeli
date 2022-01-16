import {match, required, Router, Session, validate, crypto} from "../deps.js";
import {BasketManager} from "./BasketManager.js";

const ApiRouter = new Router();
const session = new Session();
let Basket = new BasketManager();
export let SessionForApp = session.initMiddleware();
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

ApiRouter.post('/basket/checkout', async context => {
    const {data} = await context.request.body().value;

    const [passes, errors] = await validate(data,{
        firstname:required,
        lastname:required,
        email:[required,match(emailRegex,true) ]
    });

    context.response.body = {
        valid: passes,
        errors: errors,
        orderNumber: uuid(),
    };
    if (passes){
        console.log("Sie haben eine neue Bestellung");
        Basket.addOrUpdateBasket(context, {})
    }
})
ApiRouter.get('/basket/', async context => {
    context.response.body = await Basket.getBasket(context);
})
ApiRouter.post('/basket/:itemId', async context => {
    const {amount,itemId} = await context.request.body().value;

    let basket = await Basket.getBasket(context);
    if (amount === 0) {
        delete basket[itemId];
    }
    else if(amount > 0){
        basket[itemId] = amount;
    }
    Basket.addOrUpdateBasket(context, basket);
    context.response.body = basket;
})

function uuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export {ApiRouter};