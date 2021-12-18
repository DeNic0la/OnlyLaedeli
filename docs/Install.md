# Installationsanleitung
Nicht für alles ist eine Installationsanleitung vorhanden, die Installationsanleitung beinhaltet nur die Komplexeren Teile.

## Docker
Die installation mit von Docker ist mir mit dem `sudo apt install docker`Befehl gelungen.
Falls dies nicht funktionieren sollte verweise ich auf die [Dokumentation von Docker](https://docs.docker.com/engine/install/ubuntu/).

## Deno
#### Deno Version
Die Version v1.16 verursacht probleme mit den verwendeten libarys. Eine Übersicht der Versionen ist auf der [GitHub Seite](https://github.com/denoland/deno/releases) von Deno verfügbar.
Es muss die Deno version 1.14.3 installiert werden.
### Deno Instalieren
Befehl `curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.14.3` ausführen.</br>
mit `nano .bash_profile` die datei anpassen (ich musste die `.bashrc` Datei anpassen) und </br>
`export DENO_INSTALL="/home/vmadmin/.deno"`</br>`
export PATH="$DENO_INSTALL/bin:$PATH"`</br>
dort hinzufügen und den Computer neu starten. Alternativ können die Befehle auch ausgeführt werden.(Dies muss jedoch nach jedem Neustart gemacht werden und ist nicht empfohlen).
### Deno Dependencys Cachen
Mit dem `deno cache --reload --lock=lock.json deps.js` Befehl im backend Verzeichnis alle Dependcys herunterladen und Cachen.

### Vue Instalieren
npm installieren:`sudo apt-get install nodejs`. Falls fehler auftreten ist [Hier eine Anleitung](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/) </br>
Vue Cli installieren:`npm install -g @vue/cli`</br>
In korrektes Verzeichniss wechseln:`cd frontend/`</br>
Dependency's Installieren:`npm install`</br>

