import {send, Context, oakCors} from "./deps.js";

export const staticFiles = context => send(
    context,
    context.request.url.pathname,
    {
        root: `${Deno.cwd()}/res`,
    });
