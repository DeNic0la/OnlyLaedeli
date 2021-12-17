import {helpers,Router} from "../deps.js";

const ApiRouter = new Router();

ApiRouter.get("/hello",context => {
    context.response.body = "Backend is Alive"
})

export {ApiRouter};