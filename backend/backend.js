import {Application} from "./deps.js";
import {staticFiles} from "./fileserver.js";

const app = new Application();

app.use(staticFiles);
app.listen({port:8000});