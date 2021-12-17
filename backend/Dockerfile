FROM denoland/deno:1.13.2

EXPOSE 8000

WORKDIR /app

USER deno

COPY . .
RUN deno cache deps.js
RUN deno cache backend.js
RUN deno cache --reload --lock=lock.json deps.js

CMD ["run", "--lock=lock.json", "--cached-only", "--allow-all", "backend.js"]