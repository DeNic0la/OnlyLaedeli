# Applikation ausführen
Mit der [Webstorm IDEA](https://www.jetbrains.com/de-de/webstorm/) können die Run-Configurations einfach ausgeführt werden und diese Anleitung muss nicht beachtet werden

## Produktiv
Die Produktive Dockerfiles sind mehr auf Performance ausgerichtet. Die Applikationen können damit nicht debuggt werden.
### Docker mit Local Repo
Im Produktiven Kontext kann diese Applikation nur mit Docker ausgeführt werden.
Dafür muss nur Docker installiert werden und das Verzeichnis geklont werden. Um die Applikation zu starten muss ein Terminal geöffnet werden und in das Verzeichnis `OnliLaedeli`
gewechselt werden da sich dort die `docker-compose.yml` Datei befindet. Dort muss der Command `docker-compose up` ausgeführt werden. Nun startet die Applikation.
Beim ersten mal geht das etwas länger da die Container Images von DockerHub heruntergeladen werden müssen.
Die Webseite ist dann auf [localhost](http://localhost) verfügbar.
### Docker ohne Local Repo
Grundsätzlich wird nur Docker und die `docker-compose.yml` datei benötigt.
Die Applikation kann mit dem 
`docker-compose -f "Pfad zu docker-compose.yml" up`
Befehl ausgeführt werden


## Entwicklung
### Docker
#### Front
Im `/frontend` Verzeichnis befinden sich 2 `Dockerfile`s. Mit diesen können die Entsprechenden Images gebaut werden.
Das Produktive Image befindet sich ebenfalls auf Dockerhub, wenn das Frontend ausgeführt werden soll ohne einen Container zu Bauen kann das
docker image `denic0la/laedeli-front` von Dockerhub gepulled werden. Die Run-Config dafür ist `Prod/Run Image Front |Prod`.
#### Back
Im `/backend` Verzeichnis befinden sich 2 `Dockerfile`s. Mit diesen können die Entsprechenden Images gebaut werden.
Das Produktive Image befindet sich ebenfalls auf Dockerhub, wenn das Backend ausgeführt werden soll ohne einen Container zu Bauen kann das
docker image `denic0la/laedeli-back` von Dockerhub gepulled werden. Die Run-Config dafür ist `Prod/Run Image Back |Prod`.
### Ohne Docker
Um ein Teil der Applikation ohne Docker laufen zu lassen müssen alle Dependencys in der richtigen Version installiert sein.
Mehr dazu bei den [Anforderungen](./Requirements.md) oder der [Installationsanleitung](./Install.md).

#### Frontend
Mit Webstorm kann die `serve Frontend` Run Configuration ausgeführt werden.
Alternativ kann im frontend Verzeichnis `npm run serve` ausgeführt werden.
#### Backend
Das Backend laufen zu lassen ist ein mehrteiliger Prozess. Zuerst müssen alle Dependencys aus dem lockfile geladen werden.
Dies muss immer gemacht werden wenn die Lokalen Dependecys nicht mehr aktuell sind. Falls die Dependencys angepasst wurden weill zb eine Neue Dependncy hinzugefügt wurde muss dies in das lockfile übertragen werden.
##### Load/Update Dependencys
Dafür muss der `deno cache --reload --lock=lock.json deps.js` Befehl im backend Verzeichnis ausgeführt werden.
##### Run Backend
Dies kann mit der Run Config `Deno:Backend (Allow all)` gemacht werden. 
Alternativ kann im backend Verzeichnis der `deno run --lock=lock.json --cached-only backend.js` Befehl ausgeführt werden
##### Write Dependencys
Wenn die Dependencys angepasst wurden kann das lockfile mit dem `deno cache --lock=lock.json --lock-write deps.js` Befehl gemacht werden.