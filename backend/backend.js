import { Application, oakCors } from "./deps.js";
import {staticFiles} from "./fileserver.js";
import {ApiRouter, SessionForApp} from "./api/ApiRouter.js";

const app = new Application();

app.use(SessionForApp);// To Use Sessions
app.use(oakCors()); //Enable CORS (Everywhere)
ApiRouter.options("", oakCors())
app.use(ApiRouter.routes());
app.use(ApiRouter.allowedMethods());
app.use(staticFiles);//This needs to be last (lowest Prio)
console.log("Started");
app.listen({port:8000});