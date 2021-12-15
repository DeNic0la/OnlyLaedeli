# OnlyLaedeli

Projekt von Laurin und Nicola

# Frontend
Verwendete Libarys:
* [Vno (Vue für Deno) ](https://deno.land/x/vno@1.5.1)

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


### Vno Instalieren
Vno ist Vue für Deno, um die CLI zu installieren muss der Befehl 
`sudo deno install --allow-net --unstable https://deno.land/x/vno/install/vno.ts`
ausgeführt werden. Vno wird für das Backend nicht benötigt. Kann auch ohne Sudo gemacht werden.


## Run
###Frontend
Wechsle in das richtige Verzeichnis `cd frontend/`
und führe folgenden Befehl aus:</br>
`vno run dev`


## Produktiv


# Version Requirements
* Vno erfordert Version 1.10 oder neuer


alias sudo='sudo env PATH=$PATH $@'