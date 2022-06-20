# SPFx 2019 Template

## Vorbereitungen

1. Installiere [Node v8](https://nodejs.org/en/blog/release/v8.17.0)
2. Installiere [Python 2](https://www.python.org/downloads/windows)

## Verwenden der Projektvorlage

Um die Projektvorlage zu verwenden, muss das Repository geklont und anschließend neu initialisiert werden.

##### Klonen

```
$ git clone git@github.com:Syntarex/spfx2019-template.git
```

##### Neu initialisieren

```
$ rmdir .git
$ git init
```

##### Installieren

1. Installiere alle Projekt-Abhängigkeiten: `npm install`
2. Erstelle SSL-Zertifikat: `npm run trust-dev-cert`

## Scripts

Die folgenden Skripte können im Terminal ausgeführt werden.

### build

Nutzt die SPFx Buildchain um TypeScript- und SCSS-Code zu kompilieren.

```
npm run build
```

### ship

Nutzt die SPFx Buildchain um TypeScript- und SCSS-Code optimiert zu kompilieren und führt alle Projekt-Assets zu einer bereitstellbaren SharePoint-Lösung zusammen.

```
npm run ship
```

### clean

Löscht cache- und alte build-Dateien.

```
npm run clean
```

### serve

Startet einen Test-Server und ein bereitstellbares Lösungspaket, welches auf den Test-Server zeigt.

```
npm run serve
```

## Projektstruktur

TODO
