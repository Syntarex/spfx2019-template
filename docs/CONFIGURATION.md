# Projektkonfiguration

Dieses Dokument soll Aufschluss darüber geben was an welcher Stelle im Projekt konfiguriert werden.

## Editor-Einstellungen

**Einstellungen zum Editor von VSCode können unter `/.editorconfig` gemacht werden.**

Die unter `/.editorconfig` gesetzten Einstellungen werden von der VSCode Erweiterung "EditorConfig" (`editorConfig.editorConfig`) eingelesen und erzwungen.

## VSCode Einstellungen

**Einstellungen zur Entwicklungsumgebung VSCode können unter `/.vscode/settings.json` gemacht werden.**

Diese Vorlage setzt die VSCode Erweiterung "Prettier" (`esbenp.prettier-vscode`) als Standard-Formattierer für den Editor ein.
Bedeutet, dass Prettier beim Speichern den eigenen Code gegen alle festgelegten [Linting-Regeln](TODO: LINK ZU LINTING-Einstellungen) prüft und gefundene Fehler automatisch behebt.

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

## Linting-Einstellungen (ESLint)

**Die für das Linting festgelegten Regeln können in der Datei `./.eslintrc.js` geändert werden.**

Als Linting bezeichnet man einen Prozess der die Prüfung des Codes auf festgelegte Regeln ermöglicht und gegebenfalls Fehler wirft.

Standardmäßig verwendet SPFx hierfür das Tool `tslint`. Da dieses allerdings als `deprecated` und `unsupported` markiert wurde, wurde dieses in dieser Projektvorlage durch `eslint` ersetzt.
