# Projektkonfiguration

Dieses Dokument soll Aufschluss darüber geben was an welcher Stelle im Projekt konfiguriert werden.

## Editor-Einstellungen

**Einstellungen zum Editor von VSCode können unter `/.editorconfig` gemacht werden.**

Die unter `/.editorconfig` gesetzten Einstellungen werden von der VSCode Erweiterung "EditorConfig" (`editorConfig.editorConfig`) eingelesen und erzwungen.

## VSCode Einstellungen

**Einstellungen zur Entwicklungsumgebung VSCode können unter `/.vscode/settings.json` gemacht werden.**

Diese Vorlage setzt die VSCode Erweiterung "Prettier" (`esbenp.prettier-vscode`) als Standard-Formattierer für den Editor ein.
Bedeutet, dass Prettier beim Speichern den eigenen Code gegen alle festgelegten [Prettier-Regeln](TODO: LINK ZU Prettier-Einstellungen) prüft und gefundene Abweichungen automatisch behebt.

```
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
```

Außerdem werden Imports aus verschiedenen Bibliotheken automatisch optimiert.

```
    "editor.codeActionsOnSave": {
        "source.organizeImports": true
    },
```

## Prettier-Regeln

**Die für das Formattieren festgelegten Regeln können in der Datei `./.prettierrc.js` geändert werden.**

## Projekt-Konfiguration

**Projekteinstellungen können unter `./package.json` gemacht werden.**

In der `./package.json` können allgemeine Projektinformationen sowie Abhängigkeiten gepflegt werden.

Diese Projektvorlage synchronisiert die Versionsnummer der SharePoint-Lösung stets mit der hier hinterlegten Versionsnummer.
So muss diese nicht an zwei Stellen gepflegt werden.
