# SPFx 2019 Template

## Vorbereitungen

1. Installiere [Node v8](https://nodejs.org/en/blog/release/v8.17.0)
2. Installiere [Python 2](https://www.python.org/downloads/windows)
3. Installiere alle Projekt-Abhängigkeiten: `npm install`
4. Erstelle SSL-Zertifikat: `npm run trust-dev-cert`

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

## VSCode Erweiterungen

Alle empfohlenen VSCode Erweiterungen können automatisch unter dem Tab "Erweiterungen" installiert werden.

### EditorConfig for VS Code

Ermöglicht die Konfiguration des VSCode Editors über die Konfigurationsdatei `.editorconfig`.
[Mehr Informationen](https://editorconfig.org/)

### ESLint

Ermöglicht das Anzeigen von Linting-Fehlern im Editor von VSCode.
Bietet außerdem Quick-Fixes für verschiedene Linting-Fehler an.
[Mehr Informationen](https://eslint.org/)

### Prettier

Ermöglicht das automatische Korrigieren von Linting-Fehlern.
Die Korrektur des Codes erfolgt nach den eingestellten ESLint Regeln.

### npm Intellisense

Ermöglicht npm-spezifische Autovervollständigung im VSCode Editor.

### Path Intellisense

Ermöglicht Autovervollständigung von Datei-Pfaden im VSCode Editor.
