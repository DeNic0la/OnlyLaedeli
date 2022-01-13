import { Application, oakCors } from "./deps.js";
import {staticFiles} from "./fileserver.js";
import {ApiRouter, SessionForApp} from "./api/ApiRouter.js";

const app = new Application();
app.use(oakCors({
    origin: "http://localhost:8080",
    methods:['GET','POST','OPTION','HEAD'],
    preflightContinue:false,
    exposedHeader:"Access-Control-Allow-Origin",
    optionsSuccessStatus:200
})); //Enable CORS (Everywhere)

app.use(SessionForApp);// To Use Sessions
app.use(ApiRouter.routes());
app.use(staticFiles);//This needs to be last (lowest Prio)
console.log("Started");
app.listen({port:8000});