# OnlyLaedeli

OnlyLaedeli ist kein reales Unternehmen. Dieses Projekt wurde als Teil der Ausbildung zum Informatiker von Laurin und Nicola umgesetzt. Dieses Projekt ist ein Auftrag aus dem Modul M133. Einige der verwendeten Ressourcen (Bilder, Daten) wurden vom BBZW Sursee zur Verfügung gestellt.

## Wichtig
Alle Anleitungen und Informationen Beziehen sich auf den Kontext der Linux Vm `bmLP1` aus SmartLearn.
Dabei handelt es sich um eine Linux VM mit Ubuntu der Version 20.04.3 LTS. Informationen zum OS sind mit dem `cat /etc/os-release` Befehl abzurufen.
Grundsätzlich spielt die Entwicklungsumgebung keine grosse Rolle. Jedoch wird Linux empfohlen.
Ebenfalls wird Empfohlen [WebStorm](https://www.jetbrains.com/webstorm/) zu verwenden da damit die Run Configs ausgeführt werden können.
Das Frontend verwendet je nach Stufe den port `:80` oder `:8080` und das Backend den Port `:8000`. Diese Ports müssen Frei sein, ansonsten treten Fehler auf.

## Documentation
* [Anforderungen](./docs/Requirements.md)
* [Installationsanleitung](./docs/Install.md)
* [Run Anleitung](./docs/Run.md)

## Demo Applikation laufen lassen
1. [Docker Installieren](./docs/Install.md#Docker)
2. Im Applikationsverzeichnis `docker-compose up` ausführen. Mehr dazu in der [Dokumentation](./docs/Run.md#Produktiv)

## Verwendete Libarys:
* [Vue (Frontend)](https://vuejs.org/v2/guide/)
  * [Vuetify (Material Libary für Vue)](https://vuetifyjs.com/en/getting-started/installation/)
  * [Vue Router](https://router.vuejs.org/)
* Deno
* Oak



