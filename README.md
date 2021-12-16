# OnlyLaedeli

Projekt von Laurin und Nicola

# Frontend
Verwendete Libarys:
* [Vue (Frontend)](https://vuejs.org/v2/guide/)
  * [Vuetify (Material Libary für Vue)](https://vuetifyjs.com/en/getting-started/installation/)
  * [Vue Router)](https://router.vuejs.org/)
* Deno
* Oak

# Commands
* Reload Dependencys and cache localy: `deno cache --reload --lock=lock.json deps.js`
* Update the Dependencys: `deno cache --lock=lock.json --lock-write deps.js`
* Run Backend: `deno run --lock=lock.json --cached-only backend.js`

# Installationsanleitung
## Entwicklung
Diese Anleitung erklärt das aufsetzen der Entwicklungsumgebung auf einer Linux Ubuntu VM v 20.04.3 LTS. 


#### Deno Version
Die Version v1.16 verursacht probleme mit den verwendeten libarys. Eine Übersicht der Versionen ist auf der [GitHub Seite](https://github.com/denoland/deno/releases) von Deno verfügbar.
Es muss die Deno version 1.14.3 installiert werden.
### Deno Instalieren
Befehl `curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.14.3` ausführen.</br>
mit `nano .bash_profile` die datei anpassen (ich musste die `.bashrc` Datei anpassen) und </br>
`export DENO_INSTALL="/home/vmadmin/.deno"`</br>`
export PATH="$DENO_INSTALL/bin:$PATH"`</br>
dort hinzufügen und den Computer neustarten. Alternativ können die Befehle auch ausgeführt werden.(Dies muss jedoch nach jedem Neustart gemacht werden und ist nicht empfohlen)


### Vue Instalieren
npm installieren:`package command`</br>
Vue Cli installieren:`npm install -g @vue/cli`</br>
In korrektes Verzeichniss wechseln:`cd frontend/`</br>
Dependencys Installieren:`npm install`</br>



## Run
Mit der [Webstorm IDEA](https://www.jetbrains.com/de-de/webstorm/) können die Run-Configurations einfach ausgeführt werden und diese Anleitung muss nicht beachtet werden
### Frontend
Wechsle in das richtige Verzeichnis `cd frontend/`
und führe folgenden Befehl aus:</br>
`npm run serve` (Runconfig vorhanden)
### Backend
Wechsle in das richtige Verzeichnis `cd backend/`
und führe folgenden Befehl aus:</br>
`deno run --lock=lock.json --cached-only backend.js`</br>
Vorher solltest du sicherstellen dass du alle Dependencys geladen hast, mit folgendem Command kannst du die Dependencys Laden:</br>
`deno cache --reload --lock=lock.json deps.js`</br>
Wenn du neue Dependencys Hinzugefügt hast solltest du diese mit dem `deno cache --lock=lock.json --lock-write deps.js` Command in das lockfile schreiben

## Produktiv


# Version Requirements
