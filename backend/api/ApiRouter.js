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

export {ApiRouter};