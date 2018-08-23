"use strict";
const log = require("electron-log");

const extensionLog = (logLevel = "info", err) => {
  log[logLevel](`${err}`);
};

const INPUT_METHOD = {
  INPUT_TEXT: "input:text",
  INPUT_KEY: "input:key",
  INPUT_SELECT: "input:select",
  INPUT_FILE: "input:file",
  INPUT_FOLDER: "input:folder",
  INPUT_COLOR: "input:color"
};

class DeckboardExtention {
  constructor(moduleName, inputs, execute) {
    this.name = moduleName;
    this.inputs = inputs;
    this.execute = execute;
  }

  get selections() {
    return [
      {
        header: this.name
      },
      this.inputs
    ];
  }
}

module.exports = {
  DeckboardExtention,
  extensionLog,
  INPUT_METHOD
};
