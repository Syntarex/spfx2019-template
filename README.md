# SPFx 2019 Template

## Verwenden der Projektvorlage
Um die Projektvorlage zu verwenden, muss das Repository geklont und anschließend neu initialisiert werden.

##### Klonen
```
$ git clone git@github.com:Syntarex/spfx2019-template.git
```

##### Neu initialisieren
```
$ rm -f -r .git
$ git init
```

## VSCode Extensions

### EditorConfig for VS Code
Ermöglicht die Konfiguration des VSCode Editors über die Konfigurationsdatei `.editorconfig`.
[Mehr Informationen](https://editorconfig.org/)

### ESLint
Ermöglicht das Anzeigen von Linting-Fehlern im Editor von VSCode.
Bietet außerdem Quick-Fixes für verschiedene Linting-Fehler an.
[Mehr Informationen](https://eslint.org/)

### npm Intellisense
Ermöglicht npm-spezifische Autovervollständigung im VSCode Editor.

### Path Intellisense
Ermöglicht Autovervollständigung von Datei-Pfaden im VSCode Editor.

### Prettier
Ermöglicht das automatische Korrigieren von Linting-Fehlern.
Die Korrektur des Codes erfolgt nach den eingestellten ESLint Regeln.