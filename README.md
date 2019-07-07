# deckboard-kit
[![Build Status](https://travis-ci.org/rivafarabi/deckboard-kit.svg?branch=master)](https://travis-ci.org/rivafarabi/deckboard-kit)

Deckboard app extention starter

## Install

```
npm install -g deckboard-kit
```
## Usage

### Create Extension Project
In extensions folder located in `\Users\{USER}\deckboard\`
```
deckboard-kit --create extension-example
cd extension-example
npm install
```

### Package Extension
When you are ready to share the extension, run this command to package the project:
```
deckboard-kit --build
```
This command will generate asar file located in `dist` folder.

## Submit Extension
To add your extension to extension list, follow the instruction [here](https://github.com/rivafarabi/deckboard-extensions).

## Example
- [Power Control](https://github.com/rivafarabi/deckboard-power-control)
