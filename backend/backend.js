import { Application, oakCors } from "./deps.js";
import {staticFiles} from "./fileserver.js";
import {ApiRouter, SessionForApp} from "./api/ApiRouter.js";

const app = new Application();
app.use(oakCors({
    origin: ["http://localhost:8080","http://localhost:80","http://localhost"],
    methods:['GET','POST','OPTION','HEAD'],
    preflightContinue:false,
    credentials: true,
    exposedHeader:"Access-Control-Allow-Origin,Access-Control-Allow-Credentials",
    optionsSuccessStatus:200
})); //Enable CORS (Everywhere)

app.use(SessionForApp);// To Use Sessions
app.use(ApiRouter.routes());
app.use(staticFiles);//This needs to be last (lowest Prio)
console.log("Started");
app.listen({port:8000});